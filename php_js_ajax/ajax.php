<?php

require_once 'Database.php';
$db = new Database('localhost', 'php_test', 'root', '');

$request = 2;

// Read $_GET value
if (isset($_GET['q'])) {
    $request = 1;
}

//Fetch Data
if ($request == 1) {
    $data = $db->fetchData("SELECT * FROM users");

    echo json_encode($data);
}

// Insert Data
if ($request == 2) {
    $data = json_decode(file_get_contents('php://input'));

    $name = $data->name;

    $inserted = $db->query("INSERT INTO users (name) VALUES('$name')");

    if ($inserted) {
        echo 1;
    } else {
        echo 0;
    }
    exit;
}
