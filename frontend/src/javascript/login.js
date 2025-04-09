//LOGIN PAGE

const erros = [];

const email = document.querySelector('input[type="email"');
const password = document.querySelector('input[type="password"');

const sendValues = (event) => {
  //verifica o email
  if (email.value === "") {
    erros.push("Digite um e-mail válido.");

    email.style.border = "1px solid red";
    email.style.outline = "2px solid #ff00003b";
  } 
  
  if (password.value === "") {
    erros.push("Digite uma senha válida.");

    password.style.border = "1px solid red";
    password.style.outline = "2px solid #ff00003b";
  }

  //exibe os erros
  const divErros = document.querySelector("#erros");

  if (erros.length > 0) {
    erros.forEach((erro) => {
      divErros.innerHTML += `<p>${erro}</p>`;

      divErros.style.display = "flex";
    });
  } else {
    divErros.style.display = "none";
  }
};

const closeWidow = () => {
  window.location.reload();
};
