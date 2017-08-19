<?php

$path = '../json/prizeInfo.json';
$content = '"{"name":"'.$_GET['name'].'","mobile":"'.$_GET['mobile'].'","wechat":"'.$_GET['wechat'].'","address":"'.$_GET['address'].'"}",';
file_put_contents($path,$content,FILE_APPEND);
if (file_exists($path))
 {echo "ok";}
else
 {echo "ng";}

?>