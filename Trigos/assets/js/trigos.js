// INFORM OPITION SELECTED 
let Title = document.getElementById("txtTitle"); // Título
let Sobre = document.getElementById("txtSobre"); // Descrição
let Rota = document.getElementById("SaibaMais"); // Rota para Site(Oficial)
let img = document.getElementById("imagem"); // Imagem/logo

// SELECT BUTTONS
let MissVida = document.getElementById("item-3");
let PortasAbertas = document.getElementById("item-4");
let Orfanato = document.getElementById("item-5");

MissVida.addEventListener("click", function (e) //função para quando o botão HTMl for clicado!
{   e.preventDefault();
    Title.innerHTML = "Missão Vida";
    Sobre.innerHTML = "A Missão Vida oferece a pessoas em situação de rua ou de risco social a oportunidade de reinserção social firmada nos princípios cristãos e de dignidade humana."
    Rota.href = "https://mvida.org.br/";
    img.src = "https://mvida.org.br/wp-content/uploads/2019/04/capa.png";
});
PortasAbertas.addEventListener("click", function (e) //função para quando o botão HTMl for clicado!
{   e.preventDefault();
    Title.innerHTML = "Missão Portas Abertas";
    Sobre.innerHTML = "Nossa MISSÃO é fortalecer e preparar cristãos vivendo sob perseguição e mobilizar a igreja brasileira para se identificar e se engajar com a Igreja Perseguida."
    Rota.href = "https://portasabertas.org.br/";
    img.src = "https://exibirgospel.com.br/wp-content/uploads/2022/05/logo-pa.jpg";
});

