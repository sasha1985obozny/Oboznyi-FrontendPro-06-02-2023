const numbers = [...Array(100).keys()].map((item) => ++item);
const container = document.querySelector('.container');

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

console.log(numbers);


