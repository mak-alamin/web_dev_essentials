<?php

class Database
{
    private $host = "";
    private $db_name = "";
    private $db_user = "";
    private $db_pass = "";
    private $conn = "";

    public function connect()
    {
        $this->conn = null;
        try {
            $this->conn = new PDO();
        } catch (PDOException $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }
    }
}
