const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu'); // icono desplegar menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const asideCartMenu = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu(){
    const isAsideCartMenuClosed = asideCartMenu.classList.contains('inactive')

    if (!isAsideCartMenuClosed){
        asideCartMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
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
    asideCartMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideCartMenuClosed = asideCartMenu.classList.contains('inactive');

    if (!isAsideCartMenuClosed){
        asideCartMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
}

// function toggleDesktopMenu(){
//     if(desktopMenu.style.display === 'block'){
//         desktopMenu.style.display = 'none'
//     }else{
//         desktopMenu.style.display = 'block'
//         asideCartMenu.style.display = 'none'
//     }
//     //desktopMenu.classList.toggle('inactive')
// }

// function toggleMobileMenu(){
//     //mobileMenu.classList.toggle('inactive')
//     if(mobileMenu.style.display === 'block'){
//         mobileMenu.style.display = 'none'
//     }else{
//         mobileMenu.style.display = 'block'
//         asideCartMenu.style.display = 'none'
//     }
// }

// function toggleCartAside(){
//    // asideCartMenu.classList.toggle('inactive')
//    if(asideCartMenu.style.display === 'block'){
//     asideCartMenu.style.display = 'none'
//    }else{
//     asideCartMenu.style.display = 'block'
//     desktopMenu.style.display = 'none'
//     mobileMenu.style.display = 'none'
//     }
// }

let productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'Computer',
    price: 660,
    image: 'https://thumbs.dreamstime.com/b/laptop-computer-travel-37983668.jpg'
});
productsList.push({
    name: 'CellPhone',
    price: 550,
    image: 'https://expertvagabond.com/wp-content/uploads/travel-cell-phone-plans-guide.jpg'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

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
        ProductImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

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
