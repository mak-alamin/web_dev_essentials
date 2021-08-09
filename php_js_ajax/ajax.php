<?php

require_once 'Database.php';

$db = new Database('localhost', 'php_test', 'root', '');

$data = $db->fetchData("SELECT * FROM users");

echo json_encode($data);
