<?php
    if (empty($_GET['id'])) {
        $validid = false;
    } else if (is_numeric($_GET['id'])) {
        $id = (int) $_GET['id'];
        $validid = true;
    } else {
        $validid = false;
    }
    if ($validid == true) {
        $output = shell_exec('node ../../bin/dbgetid.js ' . escapeshellarg($id));
    } else {
        $output = '{"error":true,"message":"invalid id","type":400}';
    }
    header("content-type: application/json");
    echo $output;
?>
