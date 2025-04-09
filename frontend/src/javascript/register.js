//REGISTER PAGE
//variáveis
let erros = [];

const nome = document.querySelectorAll('input[type="text"');

const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

const select = {
  month: document.querySelector("#month"),
  day: document.querySelector("#day"),
  year: document.querySelector("#year"),
};

const gender = {
  female: document.querySelector("#female"),
  male: document.querySelector("#male"),
  custom: document.querySelector("#custom"),
};

const label = document.querySelectorAll("label");

//define os valores de day
for (let index = 1; index < 32; index++) {
  const option = document.createElement("option");

  option.value = index;
  option.textContent = index;

  select.day.appendChild(option);
}

//define os valores de year
for (let index = 1905; index < 2025; index++) {
  const option = document.createElement("option");

  option.value = index;
  option.textContent = index;

  select.year.appendChild(option);
}

//verificação do form
const sendValues = (event) => {
  //verifica o nome
  if (nome[0].value && nome[1].value === "") {
    erros.push("Nome ou sobrenome inválido(s).");

    nome.forEach((value) => {
      value.style.border = "1px solid red";
      value.style.outline = "2px solid #ff00003b";
    });
  }

  //verifica a data de nascimento
  if (
    select.month.value === "select-month" ||
    select.day.value == "select-day" ||
    select.year.value == "select-year"
  ) {
    erros.push("Data de nascimento inválida.");

    for (const key in select) {
      select[key].style.border = "1px solid red";
      select[key].style.outline = "2px solid #ff00003b";
    }
  }

  // verifica o gender
  if (!gender.female.checked & !gender.male.checked & !gender.custom.checked) {
    label.forEach((index) => {
      index.style.border = "1px solid red";
      index.style.outline = "2px solid #ff00003b";
    });

    erros.push("Selecione o seu gênero.");
  }

  //verificação do email
  if (email.value === "") {
    email.style.border = "1px solid red";
    email.style.outline = "2px solid #ff00003b";

    erros.push("Digite um email válido.");
  }

  //verifica a senha
  if (password.value === "") {
    password.style.border = "1px solid red";
    password.style.outline = "2px solid #ff00003b";

    erros.push("Digite uma senha válida.");
  }

  //verificação da senha do formulário
  let upperCase = false;
  let lowerCase = false;
  let symbol = false;
  let number = false;

  for (let index = 0; index < password.value.length; index++) {
    let char = password.value[index];

    //verifica os caracteres necessários
    if (/[A-Z]/.test(char)) upperCase = true;
    if (/[a-z]/.test(char)) lowerCase = true;
    if (/[\W_]/.test(char)) symbol = true;
    if (/\d/.test(char)) number = true;
  }

  if (password.value.length < 8)
    erros.push("Sua senha deve ter no mínimo 8 caracteres.");
  if (!upperCase) erros.push("Sua senha deve ter no mínimo 1 letra maiúscula.");
  if (!lowerCase) erros.push("Sua senha deve ter no mínimo 1 letra minúscula.");
  if (!number) erros.push("Sua senha deve ter no mínimo 1 número.");
  if (!symbol) erros.push("Sua senha deve ter no mínimo 1 símbolo.");

  //exibe os erros
  const divErros = document.querySelector("#erros");

  if (erros.length > 0) {
    divErros.style.display = "flex";

    erros.forEach((erro) => {
      divErros.innerHTML += `<p>${erro}</p>`;
    });
  } else {
    divErros.style.display = "none";
  }

  if (!erros.length === 0) {
    event.preventDefault()

    alert('Há campos vazios ou informações incorretas!')
  }
};

const closeWidow = () => {
  window.location.reload();
};
