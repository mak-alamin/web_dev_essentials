<?php

class Database
{
    public $pdo;
    public $stmt;

    public function __construct($host, $dbname, $username, $password)
    {
        try {
            $this->pdo = new \PDO("mysql:host=$host;dbname=$dbname", $username, $password);

            // echo "Connected successfully";
        } catch (\PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public function query($sql): bool
    {
        $this->stmt = $this->pdo->prepare($sql);
        return $this->stmt->execute();
    }


    public function fetchData($sql): array
    {
        $this->stmt = $this->pdo->prepare($sql);
        $this->stmt->execute();

        return $this->stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
