const products = [{
        id: 1,
        title: "Shoe1",
        img: "img/shoe1.jpg",
        description: "This is shoe product 1",
        price: 149.99
    },
    {
        id: 2,
        title: "Shoe2",
        img: "img/shoe2.jpg",
        description: "This is shoe product 2",
        price: 79.99
    },
    {
        id: 3,
        title: "Shoe3",
        img: "img/shoe3.jpg",
        description: "This is shoe product 3",
        price: 59.99
    }
]

var infoModal = new bootstrap.Modal(document.getElementById("main-info"));
var cartModal = new bootstrap.Modal(document.getElementById("modal-cart-data")); //modals 
var buyToast = new bootstrap.Toast(document.getElementById("liveToast"));

//set up cart
let cart = []

//add to cart
function AddToCart(productid) {
    var ind = cart.findIndex(p => p.id == productid)
    if (ind == -1) { cart.push({ id: productid, qty: 1 }); } else {
        cart[ind].qty += 1;
    }

}

function UpdateCart() {
    cartHTML = ""
        //add item to cart
    if (cart.length > 0) {
        cart.forEach(e => {
            var currentProduct = products.find(p => p.id == e.id);
            cartHTML += `<div class="row align-items-center my-1">
                <div class="col-2"><img class="w-100" src="${currentProduct.img}">       </div>
                <div class="col-4">${currentProduct.title}      </div>
                <div class="col-2"><input id="${e.id}" class="w-100 qtyInput" type="number" value="${e.qty}">      </div>
                <div class="col-2">$${(currentProduct.price*e.qty).toFixed(2)}     </div>
                <div class="col-2"><div id="${e.id}" class="btn btn-danger cart-remove">X</div>      </div>
                </div>`;
        });
    } else {
        cartHTML = "<b>Your cart is empty!</b>";
    }

    document.getElementById("cart-body").innerHTML = cartHTML;
    const cartRemoveBtns = document.querySelectorAll(".cart-remove");
    cartRemoveBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            //console.log(e.target.id);
            var currentProduct = cart.findIndex(p => p.id == e.target.id);
            //console.log(currentProduct);
            cart.splice(currentProduct, 1);
            UpdateCart();
            //console.log(cart);
        })
    });

    const qtyInputs = document.querySelectorAll(".qtyInput");
    qtyInputs.forEach(input => {
        input.addEventListener("change", function(e) {
            //console.log(e.target.id);
            if (e.target.value > 0) {
                var currentProduct = cart.findIndex(p => p.id == e.target.id);
                cart[currentProduct].qty = e.target.value;

            } else {
                var currentProduct = cart.findIndex(p => p.id == e.target.id);
                //console.log(currentProduct);
                cart.splice(currentProduct, 1);
            }
            UpdateCart();

        })
    });

}


//console.log(cartRemove);

//update cart

//Used for eventlistener to single btn
document.getElementById("cart-btn").addEventListener("click", function() { //cart btn and modal

    if (cart.length === 0) {
        document.getElementById("cart-body").innerHTML = "<b>Your cart is empty!</b>"
    } else {
        //console.log(cart);
        UpdateCart();
    }

    cartModal.show();
});

//more info btn
const items = document.querySelectorAll(".more-info");
//console.log(items);

items.forEach(item => { //product info
    item.addEventListener("click", function(e) {
        var currentProduct = products.find(p => p.id == e.target.id);
        console.log(currentProduct.id);
        document.getElementById("modal-data").innerHTML = currentProduct.description;
        infoModal.show();
    })
});

//buybtn link
const cartbuy = document.querySelectorAll(".buy-btn");
//console.log(cartbuy);

cartbuy.forEach(item => { //buy btn function
    item.addEventListener("click", function(e) {
        var currentProduct = products.find(p => p.id == e.target.id);
        //console.log(e.target.price);
        document.getElementById("toast-body-img").innerHTML = `<img class="w-100" src=${currentProduct.img}>`;
        document.getElementById("toast-body-text").innerText = `${currentProduct.title} has been added to the cart.`;
        buyToast.show();
        AddToCart(e.target.id);
    })
});



//const buyitems = document.querySelectorAll(".buy-btn");
//buyitems.forEach(item =>{
//    item.addEventListener("click", function(e){
//        console.log(e.target.id);
//        infoModal.show();
//    })
//});