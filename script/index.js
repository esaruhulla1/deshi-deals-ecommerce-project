function getElement(id) {
    const element = document.getElementById(id)
    return element
}

// delegation
getElement('product-box').addEventListener('click', function(e){
    if(e.target.className.includes('cart-btn')){
    const cartButton = e.target;

        const productImg = cartButton.parentNode.parentNode.children[0].children[0].src;
        const productTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText
        
        // totalPrice update
        const productPrice = cartButton.parentNode.parentNode.children[1].children[2].children[0].innerText
        const totalPrice = getElement('total-price').innerText;
        console.log(totalPrice);
        
        const currenttotal = Number(productPrice) + Number(totalPrice);
        getElement('total-price').innerText = currenttotal.toFixed(2);

        // cartContaienr update
        const cartContaienr = getElement('cart-container')
        const newCart = document.createElement('div')
        newCart.innerHTML= `
                        <div class="bg-gray-200 rounded-e-xl flex justify-between p-4">
                             <img src="${productImg}" alt="" class="w-10">
                             <div class="">
                                <h2 class="font-bold">${productTitle}</h2>
                                <h2>${productPrice}</h2>
                            </div>
                         </div>
        `;
        cartContaienr.append(newCart);

        // currentQuantity update
        const quantity = getElement('total-quantity').innerText;
        const currentQuantity = Number(quantity) +1;
        getElement('total-quantity').innerText = currentQuantity;
    
        
    }
    
    
})

// Traverse technique
// const cartbtns = document.getElementsByClassName('cart-btn')
// for (let cartButton of cartbtns) {
//     cartButton.addEventListener('click', function () {
//         const productImg = cartButton.parentNode.parentNode.children[0].children[0].src;
//         const productTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText
        
//         // totalPrice update
//         const productPrice = cartButton.parentNode.parentNode.children[1].children[2].children[0].innerText
//         const totalPrice = getElement('total-price').innerText;
//         console.log(totalPrice);
        
//         const currenttotal = Number(productPrice) + Number(totalPrice);
//         getElement('total-price').innerText = currenttotal.toFixed(2);

//         // cartContaienr update
//         const cartContaienr = getElement('cart-container')
//         const newCart = document.createElement('div')
//         newCart.innerHTML= `
//                         <div class="bg-gray-200 rounded-e-xl flex justify-between p-4">
//                              <img src="${productImg}" alt="" class="w-10">
//                              <div class="">
//                                 <h2 class="font-bold">${productTitle}</h2>
//                                 <h2>${productPrice}</h2>
//                             </div>
//                          </div>
//         `;
//         cartContaienr.append(newCart);

//         // currentQuantity update
//         const quantity = getElement('total-quantity').innerText;
//         const currentQuantity = Number(quantity) +1;
//         getElement('total-quantity').innerText = currentQuantity;

//     });   

// }


// addEventListener clear all button 
document.getElementById('btn-clear').addEventListener('click', function(){
    const cartContaienr = getElement('cart-container')
    cartContaienr.innerHTML= ""
    getElement('total-price').innerText = 0; 
    getElement('total-quantity').innerText = 0;
})


// traditional way
// document.getElementById('cart-btn-1').addEventListener('click', function () {
//     const titel = getElement("card-title-1").innerText;
//     const price = getElement('card-price-1').innerText;


//     const totalPrice = getElement('total-price').innerText;
//     const currenttotal = Number(price) + Number(totalPrice);
//     getElement('total-price').innerText = currenttotal.toFixed(2);

//     const cartContaienr = getElement("cart-container");

//     const newCart = document.createElement('div');
//     newCart.innerHTML = `
//                         <div class="bg-gray-200 rounded-e-xl flex justify-between p-4">
//                             <img src="./assets/kitchen-1.png" alt="" class="w-10">
//                             <div class="">
//                                 <h2 class="font-bold">${titel}</h2>
//                                 <h2>${price}</h2>
//                             </div>
//                         </div>
//     `;
//     cartContaienr.append(newCart);

// });

