// const menuItems = [
//   { name: "سالاد سبز", price: 30000 },
//   { name: "پیتزا پپرونی", price: 30000 },
//   { name: "برگر ویژه", price: 30000 },
//   { name: "پاستا آلفردو", price: 30000 }
// ];

// let cart = [];

// const menuContainer = document.getElementById("menu");
// const cartContainer = document.getElementById("cart-items");
// const cartMessage = document.getElementById("cart-message");

// menuItems.forEach(item => {
//   const div = document.createElement("div");
//   div.className = "item";

//   div.innerHTML = `
//     <h3>${item.name}</h3>
//     <p>قیمت: ${item.price.toLocaleString()} تومان</p>
//     <button onclick="addToCart('${item.name}', ${item.price})">افزودن به سبد خرید</button>
//   `;

//   menuContainer.appendChild(div);
// });

// function addToCart(name, price) {
//   cart.push({ name, price });
//   updateCart();
// }

// function removeFromCart(index) {
//   cart.splice(index, 1);
//   updateCart();
// }

// function updateCart() {
//   cartContainer.innerHTML = "";

//   if (cart.length === 0) {
//     cartMessage.textContent = "سبد خرید شما خالی است";
//     return;
//   }

//   cartMessage.textContent = "آیتم‌های سبد خرید:";

//   cart.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       ${item.name} - ${item.price.toLocaleString()} تومان
//       <button onclick="removeFromCart(${index})" style="margin-right:10px; background-color:#dc3545;">❌ حذف</button>
//     `;
//     cartContainer.appendChild(li);
//   });
// }

const menuJson = JSON.stringify([
  { name: "سالاد سبز", price: 30000 },
  { name: "پیتزا پپرونی", price: 30000 },
  { name: "برگر ویژه", price: 30000 },
  { name: "پاستا آلفردو", price: 30000 },
]);

// داده‌های سبد خرید
let cart = [];

const menuContainer = document.getElementById("menu");
const cartContainer = document.getElementById("cart-items");
const cartMessage = document.getElementById("cart-message");


function fetchMenu() {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      try {
        const items = JSON.parse(menuJson);
        resolve(items);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
}

fetchMenu()
  .then(menuItems => {
    menuItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>قیمت: ${item.price.toLocaleString()} تومان</p>
      `;

      const btn = document.createElement("button");
      btn.textContent = "افزودن به سبد خرید";
      btn.addEventListener("click", () => addToCart(item.name, item.price));
      div.appendChild(btn);

      menuContainer.appendChild(div);
    });

   
    return menuItems;
  })
  .catch(err => {
    console.error("خطا در بارگذاری منو:", err);
  });



function addToCart(name, price) {
  return new Promise((resolve) => {
    cart.push({ name, price });
    updateCart();
    resolve({ name, price });
  });
}


function removeFromCart(index) {
  return new Promise((resolve) => {
    cart.splice(index, 1);
    updateCart();
    resolve(index);
  });
}


function updateCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartMessage.textContent = "سبد خرید شما خالی است";
    console.log("سبد خرید:", JSON.stringify(cart));
    return;
  }

  cartMessage.textContent = "آیتم‌های سبد خرید:";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price.toLocaleString()} تومان`;

    const rmBtn = document.createElement("button");
    rmBtn.textContent = "❌ حذف";
    rmBtn.style.marginRight = "10px";
    rmBtn.style.backgroundColor = "#dc3545";
    rmBtn.addEventListener("click", () =>
      removeFromCart(index).then(() => {})
    );

    li.appendChild(rmBtn);
    cartContainer.appendChild(li);
  });

  
  console.log("سبد خرید (JSON):", JSON.stringify(cart));
}