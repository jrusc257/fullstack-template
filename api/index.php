<?php

// This endpoint accepts a searchString parameter, and returns a combined result from the
// name-based search as well as the country code based search.  A future improvement could
// be to attach a flag to the code-based search results to reflect a difference in the API.
// that would depend on the user's needs.

 header("Access-Control-Allow-Origin: *");
 header('Content-Type: application/json');

 $searchString = $_GET['searchString'];

 // initialize curl and set options for the 'search by name' query
 $curl = curl_init();
 curl_setopt_array($curl, [
    CURLOPT_URL => 'https://restcountries.eu/rest/v2/name/' . $searchString,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_RETURNTRANSFER => 1
 ]);
 // execute curl and close the extension
 $resultByName = curl_exec($curl);
 curl_close($curl);

 // Decode results, and set to null if a status code is returned instead of a result
 // there's definitely a more elegant solution than just checking if a status merely exists
 $resultByName = json_decode($resultByName); 
 if ( isset($resultByName -> status)) {
   $resultByName = null;
 }

 // If the search string is two or three characters then execute a search based on alpha code
 // This prevents an excess call being made when there are more than three characters, where the result
 // will always be null
 if(strlen($searchString) === 2 || strlen($searchString) === 3){
   $curl2 = curl_init();
    curl_setopt_array($curl2, [
      CURLOPT_URL => 'https://restcountries.eu/rest/v2/alpha/' . $searchString,
      CURLOPT_SSL_VERIFYPEER => false,
      CURLOPT_RETURNTRANSFER => 1
    ]);
    $resultByCode = curl_exec($curl2);
    curl_close($curl2);
    
    $resultByCode = json_decode($resultByCode);
    if ( isset($resultByCode -> status)) {
      $resultByCode = null;
    }
 }

 // Idea - make this a little more elegant than just returning null when there are no results
 // Return all results with a little bit of sanitization
 if(isset($resultByCode) && isset($resultByName)){
   // Merge arrays and filter duplicates
   array_push($resultByName, $resultByCode);
   echo json_encode(['data' => array_unique($resultByName, SORT_REGULAR)]);
 } else if (isset($resultByName)) {
   echo json_encode(['data' => $resultByName]);
 } else if (isset($resultByCode)) {
  echo json_encode(['data' => [$resultByCode]]);
 } else {
   echo null;
 }
