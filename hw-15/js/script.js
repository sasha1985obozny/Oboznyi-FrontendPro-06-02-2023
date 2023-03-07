'use strict';

const data = [
    {
        "author": "Stacy Henry",
        "time": "10/02/2023",
        "text": "laboris irure Lorem mollit laboris fugiat Lorem veniam cupidatat cillum quis cillum nisi magna nostrud",
        "cover": "./img/cover1.jpg"
    },
    {
        "author": "Rosanne Aguilar",
        "time": "22/01/2023",
        "text": "elit dolore officia consectetur non non incididunt eu excepteur exercitation veniam aliqua fugiat sit dolore",
        "cover": "./img/cover2.jpg"
    },
    {
        "author": "Lowe Knox",
        "time": "05/01/2023",
        "text": "sunt aute in nisi duis laboris deserunt amet magna id amet incididunt nostrud eiusmod duis",
        "cover": "./img/cover3.jpg"
    },
    {
        "author": "Russo Pugh",
        "time": "13/02/2023",
        "text": "et dolor esse amet officia dolor aliquip Lorem eiusmod reprehenderit est nostrud sunt sit mollit",
        "cover": "./img/cover4.jpg"
    },
    {
        "author": "Kris Glover",
        "time": "30/01/2023",
        "text": "nostrud amet sunt quis esse aute reprehenderit laboris velit eiusmod ipsum sint pariatur dolore sit",
        "cover": "./img/cover5.jpg"
    },
    {
        "author": "Kelly Jenkins",
        "time": "12/01/2023",
        "text": "fugiat laborum dolor veniam laboris id irure laboris nulla velit consectetur sit et non Lorem",
        "cover": "./img/cover6.jpg"
    },
    {
        "author": "Oliver Frank",
        "time": "11/01/2023",
        "text": "aliquip consectetur tempor ut et laborum aute ea ullamco non in sunt laborum do consectetur",
        "cover": "./img/cover7.jpg"
    },
    {
        "author": "Sellers Ochoa",
        "time": "08/01/2023",
        "text": "nisi magna deserunt officia aliquip nulla ad nulla sint veniam qui qui laborum officia pariatur",
        "cover": "./img/cover8.jpg"
    },
    {
        "author": "Sparks Schroeder",
        "time": "12/01/2023",
        "text": "cillum veniam dolore occaecat sunt exercitation consequat id sunt culpa ea exercitation duis cupidatat in",
        "cover": "./img/cover9.jpg"
    },
    {
        "author": "Haley Smith",
        "time": "04/02/2023",
        "text": "qui occaecat exercitation do Lorem dolore tempor non amet velit non do ipsum laboris aliquip",
        "cover": "./img/cover10.jpg"
    },
    {
        "author": "Morin Harrison",
        "time": "25/01/2023",
        "text": "non quis sunt Lorem proident velit incididunt consectetur ut et do cupidatat enim dolor magna",
        "cover": "./img/cover11.jpg"
    },
    {
        "author": "Dillon Zimmerman",
        "time": "02/01/2023",
        "text": "tempor dolore sint et adipisicing incididunt enim commodo non ad dolore irure nulla velit proident",
        "cover": "./img/cover1.jpg"
    },
    {
        "author": "Addie Drake",
        "time": "01/02/2023",
        "text": "enim veniam veniam irure aliquip enim id mollit ut culpa laborum reprehenderit consectetur incididunt qui",
        "cover": "./img/cover2.jpg"
    },
    {
        "author": "Maryann Bullock",
        "time": "14/02/2023",
        "text": "irure anim voluptate id incididunt ut ullamco adipisicing deserunt do exercitation irure aliqua cillum ex",
        "cover": "./img/cover3.jpg"
    },
    {
        "author": "Mendoza Mckinney",
        "time": "01/02/2023",
        "text": "elit eiusmod mollit magna ea labore Lorem duis et ex veniam id ullamco aliquip anim",
        "cover": "./img/cover4.jpg"
    },
    {
        "author": "Cabrera Leblanc",
        "time": "06/02/2023",
        "text": "aute quis ex elit veniam do ea incididunt pariatur aliquip qui aliqua irure elit reprehenderit",
        "cover": "./img/cover5.jpg"
    },
    {
        "author": "Schroeder Steele",
        "time": "05/03/2023",
        "text": "est ad excepteur nulla anim aliqua minim culpa adipisicing duis reprehenderit adipisicing et est anim",
        "cover": "./img/cover6.jpg"
    },
    {
        "author": "Lidia Evans",
        "time": "25/02/2023",
        "text": "ea consectetur non cillum eu exercitation consectetur adipisicing qui reprehenderit aliquip magna excepteur dolore enim",
        "cover": "./img/cover7.jpg"
    },
    {
        "author": "Bobbi Sharpe",
        "time": "01/03/2023",
        "text": "ad incididunt minim id duis ut mollit consectetur nisi nulla mollit qui nostrud consectetur laborum",
        "cover": "./img/cover8.jpg"
    },
    {
        "author": "Delaney Huff",
        "time": "03/01/2023",
        "text": "sit consectetur voluptate commodo cupidatat excepteur amet aliquip est culpa duis aute ex ullamco Lorem",
        "cover": "./img/cover9.jpg"
    },
    {
        "author": "Viola Mcmahon",
        "time": "19/02/2023",
        "text": "aute deserunt culpa aliquip ipsum minim ex ipsum ad duis ipsum consequat occaecat tempor veniam",
        "cover": "./img/cover10.jpg"
    },
    {
        "author": "Berger Lewis",
        "time": "03/01/2023",
        "text": "pariatur elit mollit exercitation dolore magna non elit esse aliqua id id qui id ut",
        "cover": "./img/cover11.jpg"
    },
    {
        "author": "Mattie Sandoval",
        "time": "14/02/2023",
        "text": "magna reprehenderit mollit qui occaecat velit incididunt quis labore ex aliqua consectetur id tempor eiusmod",
        "cover": "./img/cover1.jpg"
    },
    {
        "author": "Shelly Hickman",
        "time": "01/03/2023",
        "text": "dolore aliquip pariatur excepteur aute eu amet nulla duis incididunt aliquip nostrud nisi consequat exercitation",
        "cover": "./img/cover2.jpg"
    },
    {
        "author": "Hurley Potter",
        "time": "17/02/2023",
        "text": "aliqua laboris do proident fugiat id labore aliquip ipsum nulla ullamco amet qui proident sit",
        "cover": "./img/cover3.jpg"
    }
]

const numbers = [...Array(100).keys()].map((item) => ++item);
const container = document.querySelector('.js-container');

const table = document.createElement('table');
container.append(table);

const spliceStep = 10;

const tr = generateTR(numbers, 0, spliceStep);
table.prepend(tr);

function generateTR(numbers, spliceStart, spliceStep){
    let tr = document.createElement('tr');

    let splicedNumbers = [...numbers].splice(spliceStart, spliceStep);
        
    splicedNumbers.forEach((number) => {
        let td = document.createElement('td');
        td.innerText = number; 
        
        if (spliceStep%2 !== 0 && number%2 ===0) {
            td.classList.add('dark');
        } else if (spliceStep%2 === 0 && (spliceStart/spliceStep)%2 === 0 && number%2 ===0){
            td.classList.add('dark');
        } else if (spliceStep%2 === 0 && (spliceStart/spliceStep)%2 !== 0 && number%2 !==0){
            td.classList.add('dark');
        }       

        tr.append(td);
        if (number%spliceStep === 0){
            table.prepend(generateTR(numbers, spliceStart += spliceStep, spliceStep));
        }
    });

    return tr;
}

const booksTpl = `      
        <tr>
            <td class = "author">{author}</td>
            <td class = "time">{time}</td>
            <td class = "text">{text}</td>
            <td class = "cover"><img src={cover} alt="cover"></td>
        </tr>
    `;

const booksContainer = document.querySelector('.js-books-container');
const books = document.querySelector('.js-books');

function renderDataWithParser(tmpl, data) {
    books.classList.remove('hidden');
    booksContainer.innerHTML = data.map(getParsedHtml.bind(null, tmpl)).join('');
}

renderDataWithParser(booksTpl, data);

function getParsedHtml(tmpl, data) {
    return Object.entries(data).reduce((acc, curr) => {
        return acc.replaceAll(`{${curr[0]}}`, curr[1]);
    }, tmpl);
}