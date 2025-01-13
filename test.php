<?php

$serverName = "86.38.202.154";
$userName = "u309907878_equipo5";
$password = "Equipo5_ClimaPolar.";
$dbName = "u309907878_clima_polar_5";

try {
    $conn = new PDO("mysql:host=$serverName;dbname=$dbName", $userName, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}