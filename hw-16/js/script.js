'use strict';

import { generateUL } from "./renderCategories.js";
import { data } from "./data.js";

const body = document.querySelector('body');
const modal = document.querySelector('.popup-wrapper');
const okBtn = document.querySelector('.ok-btn');
const goodsWrapper = document.querySelector('.goods-wrapper');
const buyWrapper = document.querySelector('.buy-wrapper');
const goodCardWrapper = document.querySelector('.goods-card-wrapper')

const categories = document.querySelector('.categories');
const ul = generateUL(data);
categories.append(ul);

const categoriesList = document.querySelector('.categories-list');

const goodsTpl = `      
        <div class="goods-card" data-dataid = {goodId}>
        <img src={img} alt="goods" data-dataid = {goodId} class="goods-img">
        <h3 class = "goods-name" data-dataid = {goodId}>{name}</h3>
        <p class="goods-price" data-dataid = {goodId}>{price}</p>
        </div>
    `;

    let goodsHeader = document.createElement('h2');
    goodsHeader.classList.add('goods-header');
    goodsWrapper.prepend(goodsHeader);

categoriesList.addEventListener('click', (event) => {
    if (event.target.closest('.categories-item')){
        goodsWrapper.classList.remove('hidden');
        buyWrapper.innerHTML = '';

        const key = event.target.dataset.dataid;
        const itemPosition = data.findIndex((item) => item.dataId === key);
        const goods = data[itemPosition][key];
        goodsHeader.innerHTML = data[itemPosition].category;        
        
        if(!goods){
            goodCardWrapper.innerHTML = `<div class = "default-text">У даній категорії наразі відсутні товари</div>`;
            return;
        }        
        
        goodCardWrapper.innerHTML = goods.map(item =>
            goodsTpl
                .replaceAll('{img}', item.img)
                .replaceAll('{name}', item.name)
                .replaceAll('{price}', item.price)
                .replaceAll('{goodId}', item.goodId)
        ).join('');   
        
        const goodsCard = document.querySelectorAll('.goods-card');
        goodsCard.forEach((item) => {
            item.setAttribute('data-dataparentid', data[itemPosition].dataId);
        });       

        document.querySelectorAll('.goods-img').forEach((item) => {
            item.setAttribute('data-dataparentid', data[itemPosition].dataId);
        });

        document.querySelectorAll('.goods-name').forEach((item) => {
            item.setAttribute('data-dataparentid', data[itemPosition].dataId);
        });

        document.querySelectorAll('.goods-price').forEach((item) => {
            item.setAttribute('data-dataparentid', data[itemPosition].dataId);
        });
    }
});

const buyTpl = `      
            <h3 class="buy-title">{title}</h3>
            <img src={img} alt="buy" class="buy-img">
            <p class="buy-description">{description}</p>
            <p class="goods-price">{price}</p>
            <div class="button-wrapper">
                <button class = "buy-btn">Купити</button>
            </div>
    `;

goodsWrapper.addEventListener('click', (event) => {
    if (event.target.closest('.goods-card')){

        const key = event.target.dataset.dataparentid;
        const keyGood = event.target.dataset.dataid;
        const itemPosition = data.findIndex((item) => item.dataId === key);
        const goods = data[itemPosition][key];
        const goodsPosition = goods.findIndex((item) => item.goodId === keyGood);
        const buyGoods = goods[goodsPosition][keyGood];
               
        buyWrapper.innerHTML = buyGoods.map(item =>
            buyTpl
                .replaceAll('{title}', item.name)
                .replaceAll('{img}', item.img)
                .replaceAll('{description}', item.description)
                .replaceAll('{price}', item.price)
        ).join('');

        const buyBtn = document.querySelector('.buy-btn');

        buyBtn.addEventListener('click', () => {
            modal.classList.add('active-popup');
            body.classList.add('under-modal');
        });
    }
})

function closePopup (){
    modal.classList.remove('active-popup');
    goodCardWrapper.innerHTML = '';
    buyWrapper.innerHTML = '';
    goodsHeader.innerHTML = '';
    body.classList.remove('under-modal');
}

okBtn.addEventListener('click', closePopup);