<?php 
    session_start();
    header('Content-Type: application/json');

    if (isset($_SESSION['username'])) {
        echo json_encode([
            'username' => $_SESSION['username'],
            'email' => $_SESSION['email'],
            'password' => $_SESSION['password'],
        ]);
    } else {
        echo json_encode(['error' => 'Usuário não logado']);
    }
    
    exit;
?>
