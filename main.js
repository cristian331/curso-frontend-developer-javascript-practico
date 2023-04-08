const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu'); // icono desplegar menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const myOrderContaneir = document.querySelector('.my-order-productscontent')
const totalToPayContainer = document.querySelector('#totalToPay')
const totalproductaddedContainer = document.querySelector('#TotalproductAdded')

let eventShowProductDetail
let eventAddToShoppingCart
let insertProductToShoppingCart
let totalToPay = 0
let totalProductAdded = 0

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

let productsList = [];
productsList.push({
    id: 0,
    name: 'Bike',
    price: 120,
    description:'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    id: 1,
    name: 'Computer',
    price: 660,
    description: 'It has all the ultimate tecnology to carry on yours project to the next level, with of the features you need and a beautiful style.',
    image: 'https://thumbs.dreamstime.com/b/laptop-computer-travel-37983668.jpg'
});
productsList.push({
    id: 2,
    name: 'CellPhone',
    price: 550,
    description: 'This cellphone will help you in your everyday routine, it has many apps and memory to save of your documents, pictures and favorite songs.',
    image: 'https://expertvagabond.com/wp-content/uploads/travel-cell-phone-plans-guide.jpg'
});
productsList.push({
    id: 3,
    name: 'Shoes',
    price: 320,
    description:'These shoes will take you everywhere, this is the perfect style for a person that lives his live in freedom and peace.',
    image: 'https://ae01.alicdn.com/kf/HTB1ElVQJFXXXXXkXFXXq6xXFXXXL/2015-de-inverno-homens-sapatos-t-nis-para-homens-Flats-moda-Casual-Sneakers-homens-Lace-up.jpg_Q90.jpg_.webp'
});

function toggleDesktopMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
}
function toggleCartAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')

}
function toggleMobileMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
}
function openProductDetailAside(event){
    eventShowProductDetail = {event};
    const indexObjectOnClick = eventShowProductDetail.event.target.accessKey;
    const objectOnClick = productsList[indexObjectOnClick];
    //console.log(evento);
    EspecProductDetail(objectOnClick);
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

function EspecProductDetail(objeto){
    const productDetailImg = document.getElementById('productDetailImage');
    productDetailImg.setAttribute('src', objeto.image);

    const productDetailPrice = document.getElementById('productDetailPrice');
    productDetailPrice.innerHTML ='$' + objeto.price

    const productDetailName = document.getElementById('productDetailName');
    productDetailName.innerHTML = objeto.name

    const productDetailDescription= document.getElementById('productDetailDescription');
    productDetailDescription.innerHTML = objeto.description
}

function addToShoppingCart(event){
    eventAddToShoppingCart = {event};
    //console.log({event});
    const indexObjectToAdd = eventAddToShoppingCart.event.target.accessKey;
    const objectToAdd = productsList[indexObjectToAdd];
    insertProductToShoppingCart = `
    <div class="shopping-cart">
    <figure>
      <img src=${objectToAdd.image} alt="${objectToAdd.name}">
    </figure>
    <p>${objectToAdd.name}</p>
    <p>$${objectToAdd.price}</p>
    <img src="./icons/icon_close.png" alt="close">
    </div>`

    totalToPay += objectToAdd.price
    totalProductAdded ++

    myOrderContaneir.innerHTML += insertProductToShoppingCart
    totalToPayContainer.innerHTML = `$${totalToPay}`
    totalproductaddedContainer.innerHTML = totalProductAdded

}

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('accessKey', product.id);
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`

        const productName = document.createElement('p');
        productName.innerText =`${product.name}`

        productInfoDiv.append(productPrice, productName);
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const ProductImgCart = document.createElement('img');
        ProductImgCart.classList.add('addCartShopping');
        ProductImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        ProductImgCart.setAttribute('accessKey', product.id);
        ProductImgCart.addEventListener('click', addToShoppingCart)
        
        productInfoFigure.appendChild(ProductImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);
        // productInfo.appendChild(productInfoDiv);
        // productInfo.appendChild(productInfoFigure);

        productCard.append(productImg, productInfo)
        // productCard.appendChild(productImg);
        // productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard)
    
    }
}
renderProducts(productsList);
