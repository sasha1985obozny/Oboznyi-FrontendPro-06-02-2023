'use strict';

export const input = document.querySelector('input');
export const values = [];

export function addInputValue(value){
    input.value += value;
}

export function clearInputValue(){
    input.value = '';
}

export function enterDot(){
    if (input.value === ''){
        input.value += '0.'
    } else if (input.value !== '' && !input.value.includes('.')) {
        input.value += '.'
    }
}

export function sliceInputValue(){
    input.value = input.value.slice(0,-1);
}

export function checkInputValue(){
    if(input.value.length > 11){
        input.value = input.value.slice(0,12)
    } else {
        input.value = input.value;
    }
    for (let i = input.value.length-1; i >= 0; i--){
        if(input.value[i] !== '0'){
            break;
        } else if(input.value[i] === '0' && input.value.includes('.')){
            input.value = input.value.slice(0,-1);
        }
    }
    if (input.value[input.value.length-1] === '.'){
        input.value = input.value.slice(0,-1);
    }
}

export function calculate(arr, action){
    let result = 0;
    switch(action){
        case ('plus'): {
            result = ((arr[0]*10 + arr[2]*10)/10)+Number.EPSILON*1000;
            if (result < 0){
                result -= Number.EPSILON*1000;
            }
            values.length = 0;
            break;
        }
        case ('minus'): {
            if (arr[0] < 1 && arr[2] < 1){
                console.log('<0');
                result = ((arr[0]*10 - arr[2]*10)/10);
                if (result < 0){
                    result -= Number.EPSILON*1000;
                }
                values.length = 0;
                break;
            }
            result = ((arr[0]*10 - arr[2]*10)/10);
            if (result < 0){
                result -= Number.EPSILON*1000;
            }
            values.length = 0;
            break;
        }
        case ('multiply'): {
            result = ((arr[0]*10 * arr[2]*10)/100)+Number.EPSILON*1000;
            if (result < 0){
                result -= Number.EPSILON*1000;
            }
            values.length = 0;
            break;
        }
        case ('divide'): {
            if(arr[2] === 0){
                result = 'infinity';
                break;
            }
            result = (((arr[0]*100)+Number.EPSILON)  / (((arr[2]*100)+Number.EPSILON)))+Number.EPSILON*1000;
            if (result < 0){
                result -= Number.EPSILON*1000;
            }
            values.length = 0;
            break;
        }
    }
    return input.value = result;
}