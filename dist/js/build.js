function serialize(e){var t,n,a={};for([t,n]of new FormData(e))a[t]=n;return a}function createOrder(){var e=document.createElement("div"),t=(e.classList.add("order"),container.append(e),e.offsetTop),t=(window.scrollTo({top:t,behavior:"smooth"}),document.createElement("div")),e=(t.classList.add("order-wrapper"),e.append(t),t.innerHTML=orderTpl,body.classList.add("under-modal"),document.querySelector(".other-good")),t=document.querySelector(".create-order");e.addEventListener("click",chooseOtherGood),t.addEventListener("click",checkout);const n=document.querySelector(".fullName"),a=document.querySelector(".quantity"),s=document.querySelector(".comment-textarea"),o=document.querySelector(".new-post"),r=document.querySelector(".city");function i(){/^[А-ЯЄЇҐІ][а-яА-ЯЄІЇҐєїіґ\-]{1,}\s[А-ЯЄЇҐІ][а-яА-ЯЄІЇҐєїіґ\-]{1,}\s[А-ЯЄЇҐІ][а-яА-ЯЄІЇҐєїіґ\-]{1,}?$/.test(n.value)?n.nextElementSibling.classList.remove("show"):(n.nextElementSibling.innerHTML="Введіть ПІБ у форматі 'Петренко Петро Петрович'",n.nextElementSibling.classList.add("show"))}function l(){/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(u.value)?u.nextElementSibling.classList.remove("show"):(u.nextElementSibling.innerHTML="Введіть e-mail у форматі 'test@mail.com'",u.nextElementSibling.classList.add("show"))}r.addEventListener("change",function(){"none"!==r.value&&(o.removeAttribute("disabled"),r.nextElementSibling.classList.remove("show"))}),n.addEventListener("input",function(){""===n.value&&(n.nextElementSibling.innerHTML="Це поле не може бути порожнім",n.nextElementSibling.classList.add("show"))}),a.addEventListener("input",function(){1<=a.value&&a.nextElementSibling.classList.remove("show")}),o.addEventListener("change",function(){"none"!==o.value&&o.nextElementSibling.classList.remove("show")}),s.addEventListener("input",function(){s.value.length<10&&1<=s.value.length&&(s.nextElementSibling.innerHTML="Коментар повинен бути не менше 10 символів",s.nextElementSibling.classList.add("show")),(10<=s.value.length||0===s.value.length)&&s.nextElementSibling.classList.remove("show")}),n.addEventListener("blur",i),n.addEventListener("input",i);const c=document.querySelector(".phone");function d(){/^\+38\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/.test(c.value)?c.nextElementSibling.classList.remove("show"):(c.nextElementSibling.innerHTML="Введіть номер у форматі '+38 (050) 123-45-67'",c.nextElementSibling.classList.add("show"))}c.addEventListener("blur",d),c.addEventListener("input",d);const u=document.querySelector(".email");u.addEventListener("blur",l),u.addEventListener("input",l)}function chooseOtherGood(e){e.preventDefault(),document.querySelector(".order").remove(),body.classList.remove("under-modal"),window.scrollTo({top:0,behavior:"smooth"})}function checkOfRequired(e){e.innerHTML="Це поле не може бути порожнім",e.classList.add("show")}function checkout(){const n=document.querySelectorAll(".payment"),a=document.querySelector(".fieldset-radio");function s(e){var t=e.nextElementSibling;if(e.hasAttribute("required")&&""===e.value.trim()&&"fullName"===e.name&&checkOfRequired(t),e.hasAttribute("required")&&""===e.value.trim()&&"email"===e.name&&checkOfRequired(t),e.hasAttribute("required")&&""===e.value.trim()&&"phone"===e.name&&checkOfRequired(t),e.hasAttribute("required")&&""===e.value.trim()&&"quantity"===e.name&&checkOfRequired(t),"city"===e.name&&"none"===e.value&&(t.innerHTML="Будь ласка, оберіть своє місто",t.classList.add("show")),"comment"===e.name&&1<=e.value.length&&e.value.length<10&&(t.innerHTML="Коментар повинен бути не менше 10 символів",t.classList.add("show")),"newPost"!==e.name||"none"!==e.value||e.hasAttribute("disabled")||(t.innerHTML="Будь ласка, оберіть відділення",t.classList.add("show")),"radio"===e.type)for(let e=0;e<n.length;e++){if(n[e].checked)return;0!==e||n[e].checked||n[e+1].checked||(a.lastElementChild.innerHTML="Будь ласка, оберіть варіант оплати",a.lastElementChild.classList.add("show"))}n.forEach(e=>e.addEventListener("change",()=>{a.lastElementChild.classList.remove("show")}))}document.orderForm.addEventListener("submit",function(e){e.preventDefault(),[...this.elements].filter(e=>"submit"!==e.type).forEach(s);var t=[...document.querySelectorAll(".error-span")];let n=!0;for(let e=0;e<t.length;e++)if(t[e].classList.contains("show"))return void(n=!1);n&&showOrders()})}const fullNameText=document.querySelector(".full-name-text"),emailText=document.querySelector(".email-text"),phoneText=document.querySelector(".phone-text"),goodDetailImgItem=document.querySelector(".good-detail-img-item"),goodDetailName=document.querySelector(".good-detail-name"),goodDetailPrice=document.querySelector(".good-detail-price"),quantityText=document.querySelector(".quantity-text"),cityText=document.querySelector(".city-text"),newPostText=document.querySelector(".new-post-text"),paymentText=document.querySelector(".payment-text"),commentText=document.querySelector(".comment-text"),totalText=document.querySelector(".total-text");function showOrders(){var e=serialize(document.orderForm);fullNameText.innerHTML=`<span class = "key">ПІБ: </span>
                                <span class = "value">${e.fullName}</span>`,emailText.innerHTML=`<span class = "key">e-mail: </span>
                                <span class = "value">${e.email}</span>`,phoneText.innerHTML=`<span class = "key">Номер телефону: </span>
                            <span class = "value">${e.phone}</span>`,goodDetailImgItem.setAttribute("src",imgSrc),goodDetailName.innerHTML=goodNameText,goodDetailPrice.innerHTML=goodPriceText,quantityText.innerHTML=`<span class = "key">Кількість: </span>
                                <span class = "value">${e.quantity}</span>`,cityText.innerHTML=`<span class = "key">Місто: </span>
                            <span class = "value">${e.city}</span>`,newPostText.innerHTML=`<span class = "key">Відділення Нової пошти: </span>
                            <span class = "value">${e.newPost}</span>`,paymentText.innerHTML=`<span class = "key">Варіант оплати: </span>
                            <span class = "value">${e.payment}</span>`,commentText.innerHTML=`<span class = "key">Коментар: </span>
                            <span class = "value">${e.comment}</span>`,totalText.innerHTML=`<span class = "key">Загальна вартість: </span>
                            <span class = "goods-price">${+goodPriceText.replace(" ","").replace("грн.","")*e.quantity} грн.</span>`,modal.classList.add("active-popup")}export{createOrder};
"use strict";const data=[{category:"Телефони",dataId:"phones",phones:[{goodId:"samsung",samsung:[{name:"Мобільний телефон Samsung Galaxy A23",img:"./img/samsung.png",price:"8 855 грн.",description:"Екран (6.6\", PLS, 2408x1080) / Qualcomm Snapdragon 680 (2.4 ГГц + 1.9 ГГц) / основна квадрокамера: 50 Мп + 5 Мп + 2 Мп + 2 Мп, фронтальна камера 8 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*год"}],name:"Мобільний телефон Samsung Galaxy A23",img:"./img/samsung.png",price:"8 855 грн.",description:"Екран (6.6\", PLS, 2408x1080) / Qualcomm Snapdragon 680 (2.4 ГГц + 1.9 ГГц) / основна квадрокамера: 50 Мп + 5 Мп + 2 Мп + 2 Мп, фронтальна камера 8 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*год"},{goodId:"iphone",iphone:[{name:"Мобільний телефон Apple iPhone 14 128GB Starlight",img:"./img/iphone.png",price:"36 999 грн.",description:"Екран (6.1\", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / підтримка 2 SIM-карток (eSIM) / iOS 16"}],name:"Мобільний телефон Apple iPhone 14 128GB Starlight",img:"./img/iphone.png",price:"36 999 грн.",description:"Екран (6.1\", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / підтримка 2 SIM-карток (eSIM) / iOS 16"}]},{category:"Ноутбуки",dataId:"laptops",laptops:[{goodId:"lenovo",lenovo:[{name:"Ноутбук Lenovo IdeaPad 1 15ADA7",img:"./img/lenovo.png",price:"18 999 грн.",description:'Екран 15.6" TN (1920x1080) Full HD, матовий / AMD Athlon Silver 3050U (2.3 - 3.2 ГГц) / RAM 8 ГБ / SSD 256 ГБ / AMD Radeon Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.6 кг / сірий'}],name:"Ноутбук Lenovo IdeaPad 1 15ADA7",img:"./img/lenovo.png",price:"18 999 грн."},{goodId:"asus",asus:[{name:"Ноутбук ASUS Laptop X515JA-BR3971W",img:"./img/asus.png",price:"14 599 грн.",description:'Экран 15.6" (1366x768) WXGA HD, матовый / Intel Core i3-1005G1 (1.2 - 3.4 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 11 Home / 1.8 кг / серый'}],name:"Ноутбук ASUS Laptop X515JA-BR3971W",img:"./img/asus.png",price:"14 599 грн."},{goodId:"acer",acer:[{name:"Ноутбук Acer Laptop X515JA-BR3971W",img:"./img/acer.png",price:"38 999 грн.",description:"Екран 15.6” IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-11400H (2.7 - 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.2 кг / чорний"}],name:"Ноутбук Acer Laptop X515JA-BR3971W",img:"./img/acer.png",price:"38 999 грн."}]},{category:"Монітори",dataId:"monitors"},{category:"Планшети",dataId:"tablets",tablets:[{goodId:"iPod",iPod:[{name:'Планшет Apple iPad Air 10.9" M1 Wi-Fi 64GB Space Gray',img:"./img/ipod.png",price:"29 999 грн.",description:"Екран 10.9\" (2360x1640) MultiTouch / Apple M1 / RAM 8 ГБ / 64 ГБ вбудованої пам'яті / Wi-Fi / Bluetooth 5.0 / основна камера 12 Мп, фронтальна 12 Мп / iPadOS 15 / 461 г / космічний сірий"}],name:'Планшет Apple iPad Air 10.9" M1 Wi-Fi 64GB Space Gray',img:"./img/ipod.png",price:"29 999 грн.",description:"Екран 10.9\" (2360x1640) MultiTouch / Apple M1 / RAM 8 ГБ / 64 ГБ вбудованої пам'яті / Wi-Fi / Bluetooth 5.0 / основна камера 12 Мп, фронтальна 12 Мп / iPadOS 15 / 461 г / космічний сірий"},{goodId:"galaxy",galaxy:[{name:"Планшет Samsung Galaxy Tab S8+ 5G 128 GB Graphite",img:"./img/galaxy.png",price:"42 999 грн.",description:"Екран 12.4\" (2800x1752) MultiTouch / Qualcomm Snapdragon 8 Gen 1 (3.0 ГГц) / RAM 8 ГБ / 128 ГБ вбудованої пам'яті + microSD / 3G / 4G / 5G / Wi-Fi / Bluetooth 5.2 / подвійна основна камера: 13 Мп + 6 Мп, фронтальна — 12 Мп / Android 12 / 572 г / графітовий"}],name:"Планшет Samsung Galaxy Tab S8+ 5G 128 GB Graphite",img:"./img/galaxy.png",price:"42 999 грн.",description:"Екран 12.4\" (2800x1752) MultiTouch / Qualcomm Snapdragon 8 Gen 1 (3.0 ГГц) / RAM 8 ГБ / 128 ГБ вбудованої пам'яті + microSD / 3G / 4G / 5G / Wi-Fi / Bluetooth 5.2 / подвійна основна камера: 13 Мп + 6 Мп, фронтальна — 12 Мп / Android 12 / 572 г / графітовий"},{goodId:"lenovoTab",lenovoTab:[{name:"Планшет Lenovo Tab M10 Plus (3rd Gen) 4/128 Wi-Fi Storm Grey",img:"./img/lenovo-tab.png",price:"10 999 грн.",description:"Екран 10.61\" IPS (2000x1200), MultiTouch / MediaTek Helio G80 (2.0 ГГц) / RAM 4 ГБ / 128 ГБ вбудованої пам'яті + microSD / Wi-Fi / Bluetooth 5.1 / основна камера 8 Мп + фронтальна - 8 Мп / GPS / Android 12 / 465 г / сірий"}],name:"Планшет Lenovo Tab M10 Plus (3rd Gen) 4/128 Wi-Fi Storm Grey",img:"./img/lenovo-tab.png",price:"10 999 грн.",description:"Екран 10.61\" IPS (2000x1200), MultiTouch / MediaTek Helio G80 (2.0 ГГц) / RAM 4 ГБ / 128 ГБ вбудованої пам'яті + microSD / Wi-Fi / Bluetooth 5.1 / основна камера 8 Мп + фронтальна - 8 Мп / GPS / Android 12 / 465 г / сірий"}]},{category:"Навушники",dataId:"headphones",headphones:[{goodId:"AirPods",AirPods:[{name:"Навушники Apple AirPods with Charging Case",img:"./img/apple-air-pods.png",price:"5 299 грн.",description:"Збільшений час роботи в режимі телефонної розмови. Активація Siri голосом. AirPods — унікальні бездротові навушники. Вони пасуватимуть до всіх ваших пристроїв. Дістаньте їх із футляра, і відразу можете користуватися. Просто надіньте їх, і вони миттєво встановлять з'єднання, а, отже, ви зможете відразу зануритися в насичений якісний звук. Немов за помахом чарівної палички."}],name:"Навушники Apple AirPods with Charging Case",img:"./img/apple-air-pods.png",price:"5 299 грн.",description:"Збільшений час роботи в режимі телефонної розмови. Активація Siri голосом. AirPods — унікальні бездротові навушники. Вони пасуватимуть до всіх ваших пристроїв. Дістаньте їх із футляра, і відразу можете користуватися. Просто надіньте їх, і вони миттєво встановлять з'єднання, а, отже, ви зможете відразу зануритися в насичений якісний звук. Немов за помахом чарівної палички."},{goodId:"samsungBuds",samsungBuds:[{name:"Навушники Samsung Galaxy Buds2 Pro Violet",img:"./img/samsung-buds.png",price:"5 999 грн.",description:"Ви почуєте звучання кожної ноти, адже вони народжуються всередині вашого улюбленого Samsung Galaxy. Оновлений Samsung Seamless Codec кодує повний 24-бітний звук і декодує його за допомогою Galaxy Buds2 Pro, зберігаючи високу якість 24-бітного звучання."}],name:"Навушники Samsung Galaxy Buds2 Pro Violet",img:"./img/samsung-buds.png",price:"5 999 грн.",description:"Ви почуєте звучання кожної ноти, адже вони народжуються всередині вашого улюбленого Samsung Galaxy. Оновлений Samsung Seamless Codec кодує повний 24-бітний звук і декодує його за допомогою Galaxy Buds2 Pro, зберігаючи високу якість 24-бітного звучання."}]}];export{data};
"use strict";function getOrderDate(){var e=new Date,t=e.getFullYear(),r=e.getMonth(),r=r+1<10?"0"+(r+1):r+1,g=e.getDate(),g=g<10?"0"+g:g,a=e.getHours(),a=a<10?"0"+a:a,e=e.getMinutes();return g+`.${r}.${t} ${a}:`+(e<10?"0"+e:e)}export{getOrderDate};
"use strict";let myOrders={initialCount:JSON.parse(localStorage.getItem("id"))||0,orders:JSON.parse(localStorage.getItem("myOrders"))||[],idCurrentList:null,getNewId(){return++this.initialCount,localStorage.setItem("id",JSON.stringify(this.initialCount)),this.initialCount},setMyOrders(r){r={id:this.getNewId(),myOrderDate:r.myOrderDate,myOrderGoodName:r.myOrderGoodName,myOrderFullName:r.myOrderFullName,myOrderEmail:r.myOrderEmail,myOrderPhone:r.myOrderPhone,myOrderGoodQuantity:r.myOrderGoodQuantity,myOrderPrice:r.myOrderPrice,imgSrc:r.imgSrc,myOrderCity:r.myOrderCity,myOrderNewPost:r.myOrderNewPost,myOrderPayment:r.myOrderPayment,myOrderComment:r.myOrderComment,myOrderTotal:r.myOrderTotal};this.orders.push(r),this.saveToLocalStorage()},deleteOrder(e){var r=this.orders.findIndex(r=>r.id===+e);this.orders.splice(r,1),this.saveToLocalStorage()},saveToLocalStorage(){localStorage.setItem("myOrders",JSON.stringify(this.orders))}};export{myOrders};
const myOrdersWrapper=document.querySelector(".my-orders-wrapper");function renderOrders(){myOrders.orders.forEach(e=>{var r=document.createElement("div"),r=(r.classList.add("my-orders-preview"),r.innerHTML=myOrdersPreviewTpl.replace("{date}",e.myOrderDate).replace("{price}",e.myOrderTotal),myOrdersWrapper.append(r),document.createElement("div"));r.classList.add("my-orders-full","hidden"),r.innerHTML=myOrdersFullTpl.replace("{img}",e.imgSrc).replace("{name}",e.myOrderGoodName).replace("{fullName}",e.myOrderFullName).replace("{email}",e.myOrderEmail).replace("{phone}",e.myOrderPhone).replace("{price}",e.myOrderPrice).replace("{quantity}",e.myOrderGoodQuantity).replace("{city}",e.myOrderCity).replace("{new-post}",e.myOrderNewPost).replace("{payment}",e.myOrderPayment).replace("{comment}",e.myOrderComment).replace("{total}",e.myOrderTotal).replace("{id}",e.id),myOrdersWrapper.append(r)})}function showMyOrders(){var e=document.querySelector(".my-orders");e.hasAttribute("disabled")||(myOrdersWrapper.classList.remove("hidden"),goodCardWrapper.classList.add("hidden"),buyWrapper.innerHTML="",goodsHeader.innerHTML="Мої замовлення",renderOrders(),e.setAttribute("disabled",""))}myOrdersWrapper.addEventListener("click",e=>{e.target.closest(".my-orders-preview")&&(e.target.classList.contains("my-orders-preview")&&(e.target.classList.add("active-preview"),e.target.nextElementSibling.classList.contains("hidden")?e.target.nextElementSibling.classList.remove("hidden"):(e.target.nextElementSibling.classList.add("hidden"),e.target.classList.remove("active-preview"))),e.target.classList.contains("date")||e.target.classList.contains("price"))&&(e.target.parentElement.classList.add("active-preview"),e.target.parentElement.nextElementSibling.classList.contains("hidden")?e.target.parentElement.nextElementSibling.classList.remove("hidden"):(e.target.parentElement.nextElementSibling.classList.add("hidden"),e.target.parentElement.classList.remove("active-preview"))),e.target.classList.contains("buy-btn")&&(myOrders.deleteOrder(e.target.id),myOrdersWrapper.classList.add("hidden"),myOrdersWrapper.innerHTML="",renderOrders(),myOrdersWrapper.classList.remove("hidden"))});export{showMyOrders};
"use strict";const myOrdersPreviewTpl=`                        
                            <span class="date">{date}</span>
                            <span class="price my-order-price">{price}</span>        
`,myOrdersFullTpl=`
                        
                            <div class="my-order-detail">
                                <div class="my-order-detail-left">
                                    <div class="my-order-detail-img">
                                        <img src = {img} alt="зображення товару" class="my-order-detail-img-item">
                                    </div>
                                </div>
                                <div class="my-order-detail-right">
                                    <div class="my-order-detail-name">
                                        <span class = "key">Найменування товару:</span> 
                                        <span class = "value">{name}</span>
                                    </div>
                                    <div class="my-order-detail-fullname">
                                        <span class = "key">Замовник:</span> 
                                        <span class = "value">{fullName}</span>
                                    </div>
                                    <div class="my-order-detail-email">
                                        <span class = "key">E-mail:</span> 
                                        <span class = "value">{email}</span>
                                    </div>
                                    <div class="my-order-detail-phone">
                                        <span class = "key">Телефон:</span> 
                                        <span class = "value">{phone}</span>
                                    </div>
                                    <div class="my-order-detail-price">
                                        <span class = "key">Ціна:</span> 
                                        <span class = "value">{price}</span>
                                    </div>
                                    <div class = "my-order-detail-quantity">
                                        <span class = "key">Кількість:</span> 
                                        <span class = "value">{quantity}</span>
                                    </div>
                                    <div class = "my-order-detail-city">
                                        <span class = "key">Місто:</span> 
                                        <span class = "value">{city}</span>
                                    </div>
                                    <div class = "my-order-detail-new-post">
                                        <span class = "key">Нова пошта:</span> 
                                        <span class = "value">{new-post}</span>
                                    </div>
                                    <div class = "my-order-detail-payment">
                                        <span class = "key">Варіант оплати:</span> 
                                        <span class = "value">{payment}</span>
                                    </div>
                                    <div class = "my-order-detail-comment">
                                        <span class = "key">Коментар:</span> 
                                        <span class = "value">{comment}</span>
                                    </div>
                                    <div class = "my-order-detail-total">
                                        <span class = "key">Загальна вартість:</span> 
                                        <span class = "value">{total}</span>
                                    </div>
                                    <button class = "buy-btn mt-20" id = {id}>Видалити</button>
                                </div>
                            </div>           
`;export{myOrdersPreviewTpl,myOrdersFullTpl};
"use strict";const orderTpl=`      
        <div class = "form">
            <form name = "orderForm" novalidate>
                <div class = flex-wrapper>                        
                    <div class = "left-flex">
                        <label class = input-box>
                            Вкажіть своє прізвище, ім'я та по-батькові *
                            <input type = "text" name = "fullName" class = "fullName" placeholder = "ПІБ" required>
                            <span class = "error-span"></span>
                        </label>
                        <label class = input-box>
                            Вкажіть свій e-mail*
                            <input type = "email" name = "email" class = "email" placeholder = "test@mail.com" required>
                            <span class = "error-span"></span>
                        </label>
                        <label class = input-box>
                            Вкажіть свій номер телефону*
                            <input type = "tel" name = "phone" class = "phone" placeholder = "+38 (050) 123-45-67" required>
                            <span class = "error-span"></span>
                        </label>
                        <label class = input-box>
                            Вкажіть кількість товару *
                            <input type = "number"  min = "1" name = "quantity" class = "quantity" placeholder = "Кількість товару" required>
                            <span class = "error-span"></span>
                        </label>
                    </div>
                    <div class = "right-flex">
                        <label class="input-box">
                            Оберіть своє місто *
                            <select type = "select" name="city" class = "city" required>
                                <option value="none" disabled selected>Оберіть своє місто</option>
                                <option value="Київ">Київ</option>
                                <option value="Харків">Харків</option>
                                <option value="Львів">Львів</option>
                                <option value="Одеса">Одеса</option>
                            </select> 
                            <span class = "error-span"></span>                   
                        </label>
                        <label class="input-box">
                            Оберіть відділення Нової пошти *
                            <select name="newPost" class = "new-post" required disabled>
                                <option value="none" disabled selected>Оберіть відділення Нової пошти</option>
                                <option value="Відділення 1">Відділення 1</option>
                                <option value="Відділення 2">Відділення 2</option>
                                <option value="Відділення 3">Відділення 3</option>
                                <option value="Відділення 4">Відділення 4</option>
                            </select> 
                            <span class = "error-span"></span>                  
                        </label>
                        <fieldset class="input-box fieldset-radio">
                            <legend>Варіант оплати *</legend>
                                <label>
                                    <input type="radio" name="payment" value="Післяплата" class = "payment">
                                    Післяплата
                                </label>
                                <label>
                                    <input type="radio" name="payment" value="Оплата банківською картою" class = "payment">
                                    Оплата банківською картою
                                </label>
                                <span class = "error-span"></span>                                
                        </fieldset>
                        <label class="input-box textarea-box">
                            Коментар до замовлення
                            <textarea placeholder = "Коментар до замовлення" name = "comment" class = "comment-textarea"></textarea>
                            <span class = "error-span"></span> 
                        </label> 
                    </div>                
                </div>            

                <div class = "buttons">
                    <button class = "create-order" type="submit">Оформити замовлення</button>
                    <button class = "other-good" type="submit">Обрати інший товар</button>
                </div>
            </form>
        </div>
    `;export{orderTpl};
"use strict";function generateUL(e){let n=document.createElement("ul");return n.classList.add("categories-list"),e.forEach(function(e){var t=document.createElement("li"),a=(t.innerText=e.category,t.classList.add("categories-item"),e.dataId);t.setAttribute("data-dataid",a),0<e.children?.length&&t.append(generateUL(e.children)),n.append(t)}),n}export{generateUL};
const body=document.querySelector("body"),modal=document.querySelector(".popup-wrapper"),okBtn=document.querySelector(".ok-btn"),editDataBtn=document.querySelector(".edit-data-btn"),goodsWrapper=document.querySelector(".goods-wrapper"),buyWrapper=document.querySelector(".buy-wrapper"),goodCardWrapper=document.querySelector(".goods-card-wrapper"),container=document.querySelector(".container");let imgSrc="",goodNameText="",goodPriceText="";const categories=document.querySelector(".categories"),ul=generateUL(data),categoriesList=(categories.append(ul),document.querySelector(".categories-list")),goodsTpl=`      
        <div class="goods-card" data-dataid = {goodId}>
        <img src={img} alt="goods" data-dataid = {goodId} class="goods-img">
        <h3 class = "goods-name" data-dataid = {goodId}>{name}</h3>
        <p class="goods-price" data-dataid = {goodId}>{price}</p>
        </div>
    `;let goodsHeader=document.createElement("h2");goodsHeader.classList.add("goods-header"),goodsWrapper.prepend(goodsHeader),categoriesList.addEventListener("click",e=>{if(e.target.closest(".categories-item")){document.querySelector(".my-orders").removeAttribute("disabled"),goodsWrapper.classList.remove("hidden"),goodCardWrapper.classList.remove("hidden"),myOrdersWrapper.classList.add("hidden"),buyWrapper.innerHTML="",myOrders.orders.forEach(e=>{document.querySelector(".my-orders-preview")&&document.querySelector(".my-orders-preview").remove(),document.querySelector(".my-orders-full")&&document.querySelector(".my-orders-full").remove()});const r=e.target.dataset.dataid,t=data.findIndex(e=>e.dataId===r);e=data[t][r];goodsHeader.innerHTML=data[t].category,e?(goodCardWrapper.innerHTML=e.map(e=>goodsTpl.replaceAll("{img}",e.img).replaceAll("{name}",e.name).replaceAll("{price}",e.price).replaceAll("{goodId}",e.goodId)).join(""),document.querySelectorAll(".goods-card").forEach(e=>{e.setAttribute("data-dataparentid",data[t].dataId)}),document.querySelectorAll(".goods-img").forEach(e=>{e.setAttribute("data-dataparentid",data[t].dataId)}),document.querySelectorAll(".goods-name").forEach(e=>{e.setAttribute("data-dataparentid",data[t].dataId)}),document.querySelectorAll(".goods-price").forEach(e=>{e.setAttribute("data-dataparentid",data[t].dataId)})):goodCardWrapper.innerHTML='<div class = "default-text">У даній категорії наразі відсутні товари</div>'}});const buyTpl=`      
            <h3 class="buy-title">{title}</h3>
            <img src={img} alt="buy" class="buy-img">
            <p class="buy-description">{description}</p>
            <p class="goods-price">{price}</p>
            <div class="button-wrapper">
                <button class = "buy-btn">Купити</button>
            </div>
    `;function closePopup(){modal.classList.remove("active-popup"),goodCardWrapper.innerHTML="",buyWrapper.innerHTML="",goodsHeader.innerHTML="";document.querySelector(".order").remove(),body.classList.remove("under-modal"),window.scrollTo({top:0,behavior:"smooth"});var e=document.querySelector(".good-detail-name").innerText,r=document.querySelector(".full-name-text span.value").innerText,t=document.querySelector(".email-text span.value").innerText,o=document.querySelector(".phone-text span.value").innerText,d=document.querySelector(".quantity-text span.value").innerText,a=document.querySelector(".good-detail-price").innerText,c=document.querySelector(".good-detail-img img").getAttribute("src"),n=document.querySelector(".city-text span.value").innerText,s=document.querySelector(".new-post-text span.value").innerText,i=document.querySelector(".payment-text span.value").innerText,l=document.querySelector(".comment-text span.value").innerText,m=document.querySelector(".total-text span.goods-price").innerText,p=getOrderDate();myOrders.setMyOrders({myOrderDate:p,myOrderGoodName:e,myOrderFullName:r,myOrderEmail:t,myOrderPhone:o,myOrderGoodQuantity:d,myOrderPrice:a,imgSrc:c,myOrderCity:n,myOrderNewPost:s,myOrderPayment:i,myOrderComment:l,myOrderTotal:m}),showMyOrders()}goodsWrapper.addEventListener("click",e=>{if(e.target.closest(".goods-card")){const t=e.target.dataset.dataparentid,o=e.target.dataset.dataid;var e=data.findIndex(e=>e.dataId===t),e=data[e][t],r=e.findIndex(e=>e.goodId===o),e=e[r][o];buyWrapper.innerHTML=e.map(e=>buyTpl.replaceAll("{title}",e.name).replaceAll("{img}",e.img).replaceAll("{description}",e.description).replaceAll("{price}",e.price)).join(""),document.querySelector(".buy-btn").addEventListener("click",createOrder),imgSrc=document.querySelector(".buy-img").getAttribute("src"),goodNameText=e[0].name,goodPriceText=e[0].price}}),okBtn.addEventListener("click",closePopup),editDataBtn.addEventListener("click",()=>{modal.classList.remove("active-popup")});const myOrdersBtn=document.querySelector(".my-orders");myOrdersBtn.addEventListener("click",showMyOrders);export{body,modal,buyWrapper,goodCardWrapper,container,imgSrc,goodNameText,goodPriceText,goodsHeader,myOrdersBtn,myOrdersWrapper};