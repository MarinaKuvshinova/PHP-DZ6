<?php
$country = trim($_POST['country']);
$fp = @fopen("countries.txt", "a+");
while (!feof($fp))
{
    $s = trim(fgets($fp));
    $s!==''?$arrC[]=$s:false;
}
if (array_search($country, $arrC)===false){
    fwrite($fp, "\r\n".$country);
    $arrC[]=$country;
    $country = $countryText = '';
}
fclose($fp);
echo json_encode($arrC);



