const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push(
  {
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Phone",
    price: 185,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Portatil",
    price: 185,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  }
);

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product= {name, price, img} -> product.img
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    productCard.append(productImg, productInfo);

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    cardsContainer.append(productCard);
    /*Tambien puede funcionar con el .appendChild, pero  pasa un solo producto a la vez.
        .appendChild("productImg")
        con el .appen se pasarian los dos de una sola. .append("productImg, productInfo")
        */
  }
}

renderProducts(productList);
