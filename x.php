<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    // Validate credentials
    if ($username == 'admin' && $password == 'admin123') {
        echo 'Login successful';
    } else {
        echo 'Invalid credentials';
    }
} else {
    echo '405 Method Not Allowed';
}
?>
