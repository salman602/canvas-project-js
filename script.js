const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const freeCost = document.getElementById('free-cost');
const expressCost = document.getElementById('express-cost');

const shipping = document.getElementById('shipping');

const total = document.getElementById('total');

div1.addEventListener('click', function () {
    img.src = 'images/1.jpg';
    desc.innerText = 'First - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
    price.innerText = '580';

    updateTotal()
})

div2.addEventListener('click', function () {
    img.src = 'images/2.jpg';
    desc.innerText = 'Second - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
    price.innerText = '450';
    updateTotal()
})

div3.addEventListener('click', function () {
    img.src = 'images/3.jpg';
    desc.innerText = 'Third - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
    price.innerText = '330';

    updateTotal()
})



free.addEventListener('click', function () {
    // console.log('clicked')
    shipping.innerText = freeCost.innerText;

    updateTotal()
})

express.addEventListener('click', function () {
    console.log('clicked express')
    shipping.innerText = expressCost.innerText;

    updateTotal()
})


function updateTotal() {
    const productValue = Number(price.innerText);
    const shippingCharge = Number(shipping.innerText);


    const grandTotal = productValue + shippingCharge;

    total.innerText = grandTotal;

}
