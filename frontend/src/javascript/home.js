const h1 = document.querySelector("h1");

fetch("../../../backend/session_info.php", {
  credentials: "include",
})
  .then((res) => res.json())
  .then((data) => {
    h1.innerText = 'Seja bem vindo, ' + data.username + '!';
  })
  .catch((error) => {
    console.log(error);
  });

