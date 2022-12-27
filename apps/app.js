const data = [
  {
    id: 1,
    title: "Shaytanat",
    description: "Jinoyat olami sardorining hayot qissasi",
    price: 280000,
    status: "expensive",
    bg: "shaytanat",
  },
  {
    id: 2,
    title: "Billi Milligan",
    description: "Bir tanada yashovchi ber necha shaxs. Shizofreniya",
    price: 120000,
    status: "middle",
    bg: "billi",
  },
  {
    id: 3,
    title: "Daydi qizning daftari",
    description: 'Oh bir farishta "Taxmina" essiz...',
    price: 75000,
    status: "middle",
    bg: "daydi",
  },
  {
    id: 4,
    title: "Цветы для Элджернона",
    description: `Har bir inson o'qishi kerak bo'lgan kitob`,
    price: 530000,
    status: "expensive",
    bg: "kiz",
  },
  {
    id: 5,
    title: "Monstrolog shogirdi",
    description: `Montrologni shogirdiga aylangan yetim bola`,
    price: 320000,
    status: "expensive",
    bg: "monstrolog",
  },
  {
    id: 6,
    title: "1984",
    description: `Urush - bu tinchlik, ozodlik - bu qullik, bilmaslik - bu kuch`,
    price: 410000,
    status: "expensive",
    bg: "oruel",
  },
  {
    id: 7,
    title: "Umrning bir lahzasi!",
    description: "Inson umir va hayot yo'liga bag'ishlanadi.",
    price: 9000,
    status: "cheep",
    bg: "umr",
  },
  {
    id: 8,
    title: "Baxtiyor oila!",
    description: "Islomi hayot va oila.",
    price: 150000,
    status: "middle",
    bg: "oila",
  },
  {
    id: 9,
    title: "Otamdan qolgan dalalar.",
    description: "Insoniylik.",
    price: 50000,
    status: "middle",
    bg: "dalalar",
  },
  {
    id: 10,
    title: "Ilm olish sirlari!",
    description: "Ilm olish siralari islomiy shakilda.",
    price: 40000,
    status: "cheep",
    bg: "ilm",
  },
  {
    id: 11,
    title: "Yulduzli tunlar!",
    description: "Yaxshi kitob bo'lsa kerak.",
    price: 6000,
    status: "cheep",
    bg: "tunlar",
  },
  {
    id: 12,
    title: "Kichkina shahzoda",
    description: "Filni yutayotgan ilon yohut shlyapa mash-mashalari.",
    price: 80000,
    status: "middle",
    bg: "kichkina",
  },
];

let dataArr = data.slice();

const playground = document.querySelector(".main__content");
let totalPrice = document.querySelector(".header__nav-price");

let priceTotal = 0;

const createCard = (title, text, price, backround) => {
  let card = document.createElement("div");
  card.getAttribute("class");
  card.classList.add("main__card");

  let cardHeader = document.createElement("h2");
  cardHeader.getAttribute("class");
  cardHeader.classList.add("main__card-title");
  cardHeader.textContent = "BOOKS";

  let cardTitle = document.createElement("h2");
  cardTitle.getAttribute("class");
  cardTitle.classList.add("main__card-subtitle");
  cardTitle.textContent = title;

  let cardText = document.createElement("p");
  cardText.getAttribute("class");
  cardText.classList.add("main__card-text");
  cardText.textContent = text;

  let cardPrice = document.createElement("p");
  cardPrice.getAttribute("class");
  cardPrice.classList.add("main__card-price");
  cardPrice.textContent = `Price: ${price}`;

  let bg = document.createElement("div");
  bg.getAttribute("class");
  bg.classList.add("bg");

  let bgImg = document.createElement("img");
  bgImg.getAttribute("class");
  bgImg.getAttribute("src");
  bgImg.src = `images/${backround}.webp`;
  bgImg.classList.add("bgImg");

  bg.append(bgImg);

  card.append(cardHeader);
  card.append(cardTitle);
  card.append(cardText);
  card.append(cardPrice);
  card.append(bg);
  playground.append(card);

  totalPrice.textContent = `Total price: ${priceTotal} so'm`;
  card.addEventListener("mouseover", () => {
    bg.style.opacity = "0.4";
  });
  card.addEventListener("mouseout", () => {
    bg.style.opacity = "0";
  });
};

const cards = () => {
  dataArr.forEach((e) => {
    let dataTitle = e.title;
    let dataText = e.description;
    let dataPrice = e.price;
    let photo = e.bg; // minus

    priceTotal = 0;
    priceTotal = dataArr.reduce((acc, i) => acc + i.price, 0);

    createCard(dataTitle, dataText, dataPrice, photo);
  });
};

const allFilter = document.querySelectorAll(".sidebar-list-link");

const allBooks = document.querySelector(".all");
const expensiveBook = document.querySelector(".expensive");
const cheepBook = document.querySelector(".cheep");
const middleBook = document.querySelector(".middle");
//===================================================================
// allBooks.addEventListener("click", () => {
//   playground.innerHTML = "";
//   dataArr = data.slice();
//   cards();
// });

// expensiveBook.addEventListener("click", () => {
//   playground.innerHTML = "";
//   dataArr = data.filter((e) => e.status === "expensive");
//   cards();
// });

// cheepBook.addEventListener("click", () => {
//   playground.innerHTML = "";
//   dataArr = data.filter((e) => e.status === "cheep");
//   cards();
// });

// middleBook.addEventListener("click", () => {
//   playground.innerHTML = "";
//   dataArr = data.filter((e) => e.status === "middle");
//   cards();
// });

cards();
//===================================================================
// Filters
allFilter.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("all")) {
      playground.innerHTML = "";
      dataArr = data.slice();
      cards();
    } else if (e.classList.contains("expensive")) {
      playground.innerHTML = "";
      dataArr = data.filter((e) => e.status === "expensive");
      cards();
    } else if (e.classList.contains("cheep")) {
      playground.innerHTML = "";
      dataArr = data.filter((e) => e.status === "cheep");
      cards();
    } else if (e.classList.contains("middle")) {
      playground.innerHTML = "";
      dataArr = data.filter((e) => e.status === "middle");
      cards();
    }
  });
});

//===================================================================
// buttons
const btns = document.querySelectorAll(".sidebar__block-btn");
let inputValue = document.querySelector(".sidebar__block-input");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("max")) {
      let value = +inputValue.value;
      playground.innerHTML = "";
      dataArr = data.filter((e) => e.price >= value);
      cards();
      inputValue.value = "";
    } else if (btn.classList.contains("min")) {
      let value = +inputValue.value;
      playground.innerHTML = "";
      dataArr = data.filter((e) => e.price < value);
      cards();
      inputValue.value = "";
    }
  });
});

//===================================================================
// search
const searchBtn = document.querySelector(".header__nav-form-btn");
let searchInput = document.querySelector(".header__nav-form-input");

searchBtn.addEventListener("click", () => {
  let value = searchInput.value;
  playground.innerHTML = "";
  dataArr = data.filter((e) =>
    e.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  cards();
  searchInput.value = "";
});
// =================================================================
// burger menu
const bars = document.querySelector(".bars");
const barsOn = document.querySelector(".bars__box-on");
const barsOff = document.querySelector(".bars__box-off");
const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", () => {
  if (sidebar.classList.contains("sidebarActive")) {
    sidebar.classList.remove("sidebarActive");
    barsOff.style.display = "none";
    barsOn.style.display = "block";
  } else if (!sidebar.classList.contains("sidebarActive")) {
    sidebar.classList.add("sidebarActive");
    barsOff.style.display = "block";
    barsOn.style.display = "none";
  }
});
