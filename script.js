const foods = [
  {
    name: "ข้าวมันไก่",
    desc: "น้ำซุปใส ไก่นุ่ม ข้าวหอมมัน พร้อมน้ำจิ้มเต้าเจี้ยว",
    price: "ราคา 50-65 บาท",
    img: "images/khaomangai.svg",
  },
  {
    name: "ผัดกะเพราหมูสับไข่ดาว",
    desc: "หมูสับผัดกะเพราเผ็ดจัดจ้าน ราดบนข้าวสวยร้อนๆ กับไข่ดาวกรอบ",
    price: "ราคา 55-70 บาท",
    img: "images/krapao.svg",
  },
  {
    name: "ต้มยำกุ้ง",
    desc: "น้ำซุปรสเปรี้ยวเผ็ด หอมตะไคร้ ใบมะกรูด กุ้งตัวโต",
    price: "ราคา 120-180 บาท",
    img: "images/tomyum.svg",
  },
  {
    name: "ส้มตำไทย",
    desc: "มะละกอสับกรอบ รสเปรี้ยวหวานเผ็ด โรยถั่วลิสงคั่ว",
    price: "ราคา 50-70 บาท",
    img: "images/somtam.svg",
  },
  {
    name: "ผัดไทยกุ้งสด",
    desc: "เส้นจันท์เหนียวนุ่ม ผัดซอสมะขาม ใส่ถั่วงอกและกุ้งสด",
    price: "ราคา 60-90 บาท",
    img: "images/padthai.svg",
  },
  {
    name: "มะม่วงข้าวเหนียว",
    desc: "ข้าวเหนียวมูนหอมกะทิ กับมะม่วงสุกหวานฉ่ำ",
    price: "ราคา 80-120 บาท",
    img: "images/mangosticky.svg",
  },
];

const imgEl = document.getElementById("food-img");
const nameEl = document.getElementById("food-name");
const descEl = document.getElementById("food-desc");
const priceEl = document.getElementById("food-price");
const plateEl = document.querySelector(".plate");
const btn = document.getElementById("random-btn");

let currentIndex = 0;

function showFood(food) {
  imgEl.src = food.img;
  imgEl.alt = food.name;
  nameEl.textContent = food.name;
  descEl.textContent = food.desc;
  priceEl.textContent = food.price;
}

function randomFood() {
  // สุ่มจนกว่าจะได้เมนูที่ไม่ซ้ำกับเมนูปัจจุบัน
  let next;
  do {
    next = Math.floor(Math.random() * foods.length);
  } while (next === currentIndex);
  currentIndex = next;

  plateEl.classList.remove("spin");
  void plateEl.offsetWidth; // รีสตาร์ทแอนิเมชัน
  plateEl.classList.add("spin");

  setTimeout(() => showFood(foods[currentIndex]), 250);
}

btn.addEventListener("click", randomFood);
