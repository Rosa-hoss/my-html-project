const menuItems = [
  { name: "سالاد سبز", price: 30000 },
  { name: "پیتزا پپرونی", price: 30000 },
  { name: "برگر ویژه", price: 30000 },
  { name: "پاستا آلفردو", price: 30000 }
];

let cart = [];

const menuContainer = document.getElementById("menu");
const cartContainer = document.getElementById("cart-items");
const cartMessage = document.getElementById("cart-message");

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

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartMessage.textContent = "سبد خرید شما خالی است";
    return;
  }

  cartMessage.textContent = "آیتم‌های سبد خرید:";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price.toLocaleString()} تومان
      <button onclick="removeFromCart(${index})" style="margin-right:10px; background-color:#dc3545;">❌ حذف</button>
    `;
    cartContainer.appendChild(li);
  });
}
