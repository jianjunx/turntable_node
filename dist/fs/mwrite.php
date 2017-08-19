<?php

$path ="../json/threshold.json";
$content = $_GET['extend'];
file_put_contents($path,$content,FILE_APPEND);
if (file_exists($path))
 {echo "ok";}
else
 {echo "ng";}

?>