// تعریف منو با JSON
const menuItems = [
  { name: "سالاد سبز", price: 30000 },
  { name: "پیتزا پپرونی", price: 30000 },
  { name: "برگر ویژه", price: 30000 },
  { name: "پاستا آلفردو", price: 30000 }
];

// آرایه سبد خرید
let cart = [];

// گرفتن المنت‌ها از HTML
const menuContainer = document.getElementById("menu");
const cartContainer = document.getElementById("cart-items");
const cartMessage = document.getElementById("cart-message");

// ساختن آیتم‌های منو
menuItems.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>قیمت: ${item.price.toLocaleString()} تومان</p>
    <button onclick="addToCart('${item.name}', ${item.price})">افزودن به سبد خرید</button>
  `;

  menuContainer.appendChild(div);
});

// تابع افزودن به سبد خرید
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// تابع نمایش سبد خرید
function updateCart() {
  cartContainer.innerHTML = ""; // پاک کردن قبلی‌ها

  if (cart.length === 0) {
    cartMessage.textContent = "سبد خرید شما خالی است";
    return;
  }

  cartMessage.textContent = "آیتم‌های سبد خرید:";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price.toLocaleString()} تومان`;
    cartContainer.appendChild(li);
  });
}
