const memes = [
  {
    name: "Merda Porcodio",
    desc: "Background nobiliare, si lamenta che il cazzo è secco, fa domande idiote e prende più di te (piselli e voti)",
    price: "Acquista: 150&#8364;",
    img: "img/M.Pdo.png",
  },
  {
    name: "Antonella Merdino",
    desc: "Puttana più vecchia del Monregale, pensa di far estremamente ridere, penalizza i DSA, mette i voti sbattendo una bacchetta di sambuco sul PC",
    price: "Acquista: VIII&#8364;",
    img: "img/Merdino.jpg",
  },
  {
    name: "Erminio Oddone",
    desc: "Creatura ignota, con la faccia di un criceto affogato, dice che Salvo ha il cazzo piccolo",
    price: "Acquista: 12000&#8364; (trasporti inclusi)",
    img: "img/erminio.png",
  },
  {
    name: "Santa-Maria Belfiore",
    desc: "R più moscia del mio fallo, vestiti pre-1990, invoca Mahullo e manda a fanculo Vasilenko",
    price: "Acquista: 753&#8364;AC",
    img: "img/belfior.png",
  },
];

const productImage = document.querySelector(".product-img");
const productName = document.querySelector(".product-name");
const productDesc = document.querySelector(".product-desc");
const productPrice = document.querySelector(".product-price");

const btnFwd = document.querySelector(".btn-fwd");
const btnBck = document.querySelector(".btn-bck");

let currentIndex = 0;

function showMeme(index) {
  const meme = memes[index];
  productImage.src = meme.img;
  productName.textContent = meme.name;
  if (productDesc) productDesc.textContent = meme.desc;
  productPrice.innerHTML = meme.price;
}

btnFwd.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % memes.length;
  showMeme(currentIndex);
});

btnBck.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + memes.length) % memes.length;
  showMeme(currentIndex);
});

showMeme(currentIndex);


