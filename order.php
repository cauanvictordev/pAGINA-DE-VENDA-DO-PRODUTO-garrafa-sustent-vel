<?php
include 'db.php';
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$address = $data->address;
$quantity = $data->quantity;
$total_price = $data->total_price;

$sql = "INSERT INTO orders (name, email, address, quantity, total_price) VALUES ('$name', '$email', '$address', '$quantity', '$total_price')";
$conn->query($sql);
?>
