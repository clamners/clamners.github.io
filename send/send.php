<?php
header('Access-Control-Allow-Origin: *');

$userName = $_POST['name'];
$userPhone = $_POST['phone'];
$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$country = 'RU';
$campaign_hash = 'e6718541-07e2-4bfd-83b5-e56831111d07';
$clickid = $_POST['clickid'];


$order = array (
    'name' => $userName,
    'phone' => $userPhone,
    'ip' => $ip,
    'campaign_hash' => $campaign_hash,
    'user_agent' => $userAgent,
    'country' => 'RU',
    'subid2' => $clickid
);




$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://lucky.online/api/v1/lead-create/webmaster?api_key=5ee4dff854938522185663882081" );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     http_build_query($order) );
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Content-Type: application/x-www-form-urlencoded'));

$result=curl_exec ($ch);

echo $result;

if ($result === 0) {
    echo "Timeout! Everad CPA 2 API didn't respond within default period!";
} else {
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($httpCode === 200) {
        echo "вввв ";
    } else if ($httpCode === 400) {
        echo "Order data is invalid! Order is not accepted!";
    } else {
        echo
        "Unknown error happened! Order is not accepted! Check campaign_id, probably no landing exists for your campaign!";
    }
}
?>
