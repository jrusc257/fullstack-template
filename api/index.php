<?php
/**
 * This is a template php file for your countries search.
 * Use as you will, or start over. It's up to you.
 */
 header("Access-Control-Allow-Origin: *");
 header('Content-Type: application/json');

 $searchString = $_GET['searchString'];

 $curl = curl_init();
 curl_setopt_array($curl, [
    CURLOPT_URL => 'https://restcountries.eu/rest/v2/name/' . $searchString,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_RETURNTRANSFER => 1
 ]);
 $resultByName = curl_exec($curl);
 curl_close($curl);

 $resultByName = json_decode($resultByName); 
 if ( isset($resultByName -> status)) {
   $resultByName = null;
 }

 if(strlen($searchString) === 2 || strlen($searchString) === 3){
   $curl2 = curl_init();
    curl_setopt_array($curl2, [
      CURLOPT_URL => 'https://restcountries.eu/rest/v2/alpha/' . $searchString,
      CURLOPT_SSL_VERIFYPEER => false,
      CURLOPT_RETURNTRANSFER => 1
    ]);
    $resultByCode = curl_exec($curl2);
    curl_close($curl2);
    
    $resultByCode = [json_decode($resultByCode)];
    if ( isset($resultByCode -> status)) {
      $resultByCode = null;
    }
 }

 // Idea - make this a little more elegant than just returning null when there are no results
 if(isset($resultByCode) && isset($resultByName)){
   array_push($resultByName, $resultByCode);
   echo json_encode(['data' => array_unique($resultByName, SORT_REGULAR)]);
 } else if (isset($resultByName)) {
   echo json_encode(['data' => $resultByName]);
 } else if (isset($resultByCode)) {
  echo json_encode(['data' => $resultByCode]);
}
