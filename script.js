// تعریف منو با JSON
const menuItems = [
  {
    name: "سالاد سبز",
    price: 30000
  },
  {
    name: "پیتزا پپرونی",
    price: 30000
  },
  {
    name: "برگر ویژه",
    price: 30000
  },
  {
    name: "پاستا آلفردو",
    price: 30000
  }
];

// گرفتن المنت منو از HTML
const menuContainer = document.getElementById("menu");

// ساختن آیتم‌ها از روی JSON
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
  alert(`"${name}" با قیمت ${price.toLocaleString()} تومان به سبد خرید اضافه شد.`);
}
