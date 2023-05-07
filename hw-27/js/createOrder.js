'use strict'

import { body, modal, container, imgSrc, 
    goodNameText, goodPriceText } from "./script.js";

import { orderTpl } from "./orderTemplate.js";

function serialize(formElement){
    const data = new FormData(formElement);
        const obj = {};
        for (let [key, value] of data) {
            obj[key] = value;
            }
        return obj;
}

export function createOrder(){

    const order = document.createElement('div');
    order.classList.add('order');
    container.append(order);
    
    let scrollDiv = order.offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});

    const orderWrapper = document.createElement('div');
    orderWrapper.classList.add('order-wrapper');
    order.append(orderWrapper);

    orderWrapper.innerHTML = orderTpl;

    body.classList.add('under-modal');

    const otherGood = document.querySelector('.other-good');
    const createOrder = document.querySelector('.create-order');
    otherGood.addEventListener('click', chooseOtherGood);
    createOrder.addEventListener('click', checkout);

    const fullNameInput = document.querySelector('.fullName');
    const quantityInput = document.querySelector('.quantity');
    const commentText = document.querySelector('.comment-textarea');
    const postSelect = document.querySelector('.new-post');
    const citySelect = document.querySelector('.city');

    citySelect.addEventListener('change',
        function(){
            if (citySelect.value !== 'none'){
                postSelect.removeAttribute('disabled');
                citySelect.nextElementSibling.classList.remove('show');
            }
    });

    fullNameInput.addEventListener('input',
        function(){
            if (fullNameInput.value === ''){
                fullNameInput.nextElementSibling.innerHTML = 'Це поле не може бути порожнім';
                fullNameInput.nextElementSibling.classList.add('show');
            }                
        });
       
    quantityInput.addEventListener('input',
        function(){
            if (quantityInput.value >= 1){
                quantityInput.nextElementSibling.classList.remove('show');
            }
        });
        
    postSelect.addEventListener('change',
        function(){
            if (postSelect.value !== 'none'){
                postSelect.nextElementSibling.classList.remove('show');
            }
        });

    commentText.addEventListener('input',
        function(){
            if (commentText.value.length < 10 && commentText.value.length >= 1){
                commentText.nextElementSibling.innerHTML = 'Коментар повинен бути не менше 10 символів';
                commentText.nextElementSibling.classList.add('show');
            }
            if (commentText.value.length >= 10 || commentText.value.length === 0){
                commentText.nextElementSibling.classList.remove('show');
            }
        })

    fullNameInput.addEventListener('blur', checkFullNameInput);
    fullNameInput.addEventListener('input', checkFullNameInput);
    
    function checkFullNameInput(){
        const fullNamePattern = /^[А-ЯЄЇҐІ][а-яА-ЯЄІЇҐєїіґ\-]{1,}\s[А-ЯЄЇҐІ][а-яА-ЯЄІЇҐєїіґ\-]{1,}\s[А-ЯЄЇҐІ][а-яА-ЯЄІЇҐєїіґ\-]{1,}?$/;
        const isfullNameValid = fullNamePattern.test(fullNameInput.value);
        if (!isfullNameValid){
            fullNameInput.nextElementSibling.innerHTML = 'Введіть ПІБ у форматі \'Петренко Петро Петрович\'';
            fullNameInput.nextElementSibling.classList.add('show');
        } else {
            fullNameInput.nextElementSibling.classList.remove('show');
        }
    }        

    function checkEmailInput(){
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isEmailValid = emailPattern.test(emailInput.value);
        if (!isEmailValid){
            emailInput.nextElementSibling.innerHTML = 'Введіть e-mail у форматі \'test@mail.com\'';
            emailInput.nextElementSibling.classList.add('show');
        } else {
            emailInput.nextElementSibling.classList.remove('show');
        }
    }

    const phoneInput = document.querySelector('.phone');
    phoneInput.addEventListener('blur', checkPhoneInput);
    phoneInput.addEventListener('input', checkPhoneInput);

    function checkPhoneInput(){
        const phoneNumberPattern = /^\+38\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/;
        const isPhoneValid = phoneNumberPattern.test(phoneInput.value);
        if (!isPhoneValid){
            phoneInput.nextElementSibling.innerHTML = 'Введіть номер у форматі \'+38 (050) 123-45-67\'';
            phoneInput.nextElementSibling.classList.add('show');
        } else {
            phoneInput.nextElementSibling.classList.remove('show');
        }
    }

    const emailInput = document.querySelector('.email');
    emailInput.addEventListener('blur', checkEmailInput);
    emailInput.addEventListener('input', checkEmailInput);

}

function chooseOtherGood(event){
    event.preventDefault();
    const order = document.querySelector('.order');
    order.remove();
    body.classList.remove('under-modal');
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

function checkOfRequired(element){
    element.innerHTML = 'Це поле не може бути порожнім';
    element.classList.add('show');
}

function checkout(){

    const paymentRadio = document.querySelectorAll('.payment');
    const fieldsetRadio = document.querySelector('.fieldset-radio');

    document.orderForm.addEventListener('submit',
    function (event){
        event.preventDefault();
        [...this.elements]
            .filter(element => element.type !== 'submit')
            .forEach(validateElement);
       
        let errorsShow = [...document.querySelectorAll('.error-span')];
        let isSuccessCheck = true;

        for (let i = 0; i < errorsShow.length; i++){
            if ( errorsShow[i].classList.contains('show') ){
                isSuccessCheck = false;
                return;
            } 
        }

        if (isSuccessCheck){
            showOrders();
        }

    })

    function validateElement(element){    

        const errorElement = element.nextElementSibling;
        if (element.hasAttribute('required') && element.value.trim() === ''
            && element.name === 'fullName') {
            checkOfRequired(errorElement);
        }

        if (element.hasAttribute('required') && element.value.trim() === ''
            && element.name === 'email') {
            checkOfRequired(errorElement);
        }

        if (element.hasAttribute('required') && element.value.trim() === ''
            && element.name === 'phone') {
            checkOfRequired(errorElement);
        }

        if (element.hasAttribute('required') && element.value.trim() === ''
            && element.name === 'quantity') {
            checkOfRequired(errorElement);
        }

        if (element.name === 'city' && element.value === 'none') {
            errorElement.innerHTML = 'Будь ласка, оберіть своє місто';
            errorElement.classList.add('show'); 
        }

        if (element.name === 'comment' && element.value.length >= 1 && element.value.length < 10) {
            errorElement.innerHTML = 'Коментар повинен бути не менше 10 символів';
            errorElement.classList.add('show'); 
        }

        if (element.name === 'newPost' 
            && element.value === 'none' 
            && !element.hasAttribute('disabled')) {
            errorElement.innerHTML = 'Будь ласка, оберіть відділення';
            errorElement.classList.add('show'); 
        }

        if (element.type === 'radio'){
            
            for(let i = 0; i < paymentRadio.length; i++){
                if (paymentRadio[i].checked){
                    return;
                } else if (i===0 && !paymentRadio[i].checked && !paymentRadio[i+1].checked) {
                    fieldsetRadio.lastElementChild.innerHTML = 'Будь ласка, оберіть варіант оплати';
                    fieldsetRadio.lastElementChild.classList.add('show'); 
                }
            }
        }

        paymentRadio.forEach((item) =>
            item.addEventListener('change', () => {
                fieldsetRadio.lastElementChild.classList.remove('show');
            })
        );
    }
}

const fullNameText = document.querySelector('.full-name-text');
const emailText = document.querySelector('.email-text');
const phoneText = document.querySelector('.phone-text');
const goodDetailImgItem = document.querySelector('.good-detail-img-item');
const goodDetailName = document.querySelector('.good-detail-name');
const goodDetailPrice = document.querySelector('.good-detail-price');
const quantityText = document.querySelector('.quantity-text');
const cityText = document.querySelector('.city-text');
const newPostText = document.querySelector('.new-post-text');
const paymentText = document.querySelector('.payment-text');
const commentText = document.querySelector('.comment-text');
const totalText = document.querySelector('.total-text');

function showOrders(){
    const orderData = serialize(document.orderForm);

    fullNameText.innerHTML = `<span class = "key">ПІБ: </span>
                                <span class = "value">${orderData.fullName}</span>`;
    emailText.innerHTML = `<span class = "key">e-mail: </span>
                                <span class = "value">${orderData.email}</span>`;
    phoneText.innerHTML = `<span class = "key">Номер телефону: </span>
                            <span class = "value">${orderData.phone}</span>`;
    goodDetailImgItem.setAttribute('src', imgSrc);
    goodDetailName.innerHTML = goodNameText;
    goodDetailPrice.innerHTML = goodPriceText;
    quantityText.innerHTML = `<span class = "key">Кількість: </span>
                                <span class = "value">${orderData.quantity}</span>`;
    cityText.innerHTML = `<span class = "key">Місто: </span>
                            <span class = "value">${orderData.city}</span>`;
    newPostText.innerHTML = `<span class = "key">Відділення Нової пошти: </span>
                            <span class = "value">${orderData.newPost}</span>`;
    paymentText.innerHTML = `<span class = "key">Варіант оплати: </span>
                            <span class = "value">${orderData.payment}</span>`;
    commentText.innerHTML = `<span class = "key">Коментар: </span>
                            <span class = "value">${orderData.comment}</span>`;
    totalText.innerHTML = `<span class = "key">Загальна вартість: </span>
                            <span class = "goods-price">${+(goodPriceText.replace(' ', '')
                            .replace('грн.', ''))*orderData.quantity} грн.</span>`;
    modal.classList.add('active-popup');   
}