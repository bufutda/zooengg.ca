<?php
    $output = shell_exec('node ../../bin/db2json.js');
    header("content-type: application/json");
    echo $output;
?>
