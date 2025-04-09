<?php
    session_start();
    include '../backend/connection.php';

    if ($_POST) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "SELECT id, `first-name`, `last-name`, email, password FROM users 
                WHERE email = '$email' AND password = '$password'";

        $result = $connection->query($sql);

        if($result->rowCount() === 1) {
            //dados do usuário da sessão
            $user = $result->fetch(PDO::FETCH_ASSOC);

            $_SESSION['username'] = $user['first-name'] . ' ' . $user['last-name'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['password'] = $user['password'];

            header("Location: ../frontend/src/pages/home.html");
            exit;
        } else {
            echo "<script> 
                    alert('Usuário e/ou senha inválido(a)s!'); 
                    window.location.href = '../frontend/src/pages/login.html';
                </script>";
                exit;
        }
    }
?>