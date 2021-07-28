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
 $result = curl_exec($curl);

 echo json_encode(['data' => json_decode($result)]);
//echo $searchString;

 curl_close($curl);