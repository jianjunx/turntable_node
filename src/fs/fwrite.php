<?php

$path ="../json/prizeInfo.json";
$content = '"{"name":"'.$_GET['name'].'","age":"'.$_GET['age'].'"}",';
file_put_contents($path,$content,FILE_APPEND);
if (file_exists($path))
 {echo "ok";}
else
 {echo "ng";}

?>