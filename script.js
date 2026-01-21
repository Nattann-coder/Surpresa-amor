alert("JS funcionando!");

const texts = [
  "Desde que você chegou, meu mundo mudou 🤍",
  "Você é meu lar, minha paz",
  "Cada momento com você é único",
  "Eu escolho você todos os dias"
];

const photos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
let i = 0;

function start() {
  document.getElementById("start").classList.remove("active");
  document.getElementById("content").classList.add("active");
  next();
}

function next() {
  if (i < texts.length) {
    document.getElementById("text").innerText = texts[i];
    document.getElementById("photo").src = photos[i % photos.length];
    i++;
    setTimeout(next, 5000);
  } else {
    document.getElementById("content").classList.remove("active");
    document.getElementById("final").classList.add("active");
  }
}
