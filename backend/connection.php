<?php
    try {
        $connection = new PDO('mysql:dbname=users-data;host=localhost', 'root', '');

        echo 'Conexão efetuada com sucesso!';
    } catch (\PDOException $error) {
        echo 'Erro! não foi possível fazer a conexão ao banco de dados <br />' . $error;
    }
?>