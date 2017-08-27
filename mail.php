<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$home = $_POST['home'];
$building = $_POST['building'];
$apartement = $_POST['apartement'];
$floor = $_POST['floor'];
$comment = $_POST['comment'];
$payment = $_POST['payment'];
$callback = $_POST['callback'];

$message = "Сообщение от пользователя: $name! Телефон: $phone . Адрес: ул. $street д. $home/$building, кв. $apartement $floor этаж
Комментарий: . Оплата: $payment. Не перезванивать: $callback ";

$result = mail('greendiezer@yandex.ru', 'Hello', $message);

echo json_encode(array(
    'status'=> $result
));