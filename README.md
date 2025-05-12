# Pokewild
Um sistema de login simples inspirado no Facebook

## 🛠️ Tecnologias Utilizadas
<br/>HTML;
<br/>CSS;
<br/>JavaScript;
<br/>PHP;
<br/>MySQL;

## ▶️ Como rodar localmente
Pré-requisitos
XAMPP ou Laragon (ambiente com Apache + MySQL + PHP)

Um navegador moderno

Passos
<br />1° - git clone https://github.com/iamryaan011/fb-login-register.git

<br />2° - Copie os arquivos para a pasta do servidor local:

<br/>Exemplo no XAMPP: C:\xampp\htdocs\fb-login-register
<br/>Exemplo no Laragon: C:\laragon\www\fb-login-register

<br />3° - Importe o banco de dados:

<br />4° - Inicie o MySQL no XAMPP ou Laragon

<br />5° - Acesse: http://localhost/phpmyadmin

<br />6° - Crie um banco de dados chamado fb_login (ou o nome que estiver no seu código)

<br />7° - Importe o arquivo .sql que acompanha o projeto (se houver)

<br />8° - Configure a conexão com o banco:

<br />9° - No seu código PHP, verifique se o nome do banco, usuário e senha estão corretos.

Exemplo:
$conn = new mysqli("localhost", "root", "", "fb_login");
Execute o projeto:

Abra http://localhost/fb-login-register no seu navegador

## ✨ Funcionalidades
<br/>Sistema de "login", iniciando apenas quando você digitar um username;

<br/>Gera um pokémon aleatório na tela a cada refresh;

<br/>Captura dos pokémon com diferentes tipos de pokebolas;

<br/>Chance maior ou menor de acordo com a pokebola;

<br/>Geração do seu time (6 pokémon máximos);

<br/>Pokedex listando todos os pokémon da região;

## 📁 Estrutura de Pastas
A estrutura do projeto segue sendo algo bem simples e "entendível" separando a lógica do backend e do frontend

pokewild/
<br/>├── backend/
<br/>├── frontend

## 📬 Contato
<br/>Desenvolvido por Ryan Lima.
<br/>Email: iamryaan011@gmail.com 
<br/>Linkedin: <a href="linkedin.com/in/ryanlima011">linkedin.com/in/ryanlima011 </a>

## API utilizada:
PokeAPI: <a href="https://pokeapi.co">https://pokeapi.co/</a>


