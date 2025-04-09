<?php  

    session_start();
    session_unset();
    session_destroy();

    header('Location: ../frontend/src/pages/login.html');

    exit;
?>