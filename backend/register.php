<?php
    include '../backend/connection.php';

    //define minhas variáveis
    if ($_POST) {
        $first_name = $_POST["first_name"];
        $last_name = $_POST["last_name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $gender = $_POST["gender"];  
    }

    $sql = "SELECT id FROM users WHERE email = '$email'";
    $connection->query($sql);
    
    $result = $connection->query($sql);

    if($result->rowCount() > 0) {
        echo "<script>
                alert('Este email já está sendo utilizado!'); 
                window.location.href = '../frontend/src/pages/register.html';
            </script>";
    } else {
        $sql = "INSERT INTO users (`email`, `password`, `first-name`, `last-name`, gender) 
        VALUES('$email', '$password', '$first_name', '$last_name', '$gender')";

        $connection->query($sql);

        echo "<script>
                alert('Conta criada com sucesso!');
                window.location.href = '../frontend/src/pages/login.html'
            </script>";
    }
?>