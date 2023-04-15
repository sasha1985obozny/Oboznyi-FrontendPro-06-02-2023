'use strict';

import { 
    input, 
    values,
    addInputValue,
    clearInputValue,
    enterDot,
    sliceInputValue,
    checkInputValue,
    calculate
 } from "./calculator.js";

let memo = [];
let isMemo = false;
const calculator = document.querySelector('.calculator');

calculator.addEventListener('click', (e) => {

    e.preventDefault();

    if (e.target.closest('.num')){
        addInputValue(e.target.innerHTML);
    }

    if (e.target.closest('.clear')){
        clearInputValue();
    }

    if (e.target.closest('.slice')){
        sliceInputValue();
    }

    if (e.target.closest('.plus')){
        if(!values[0]){
            values[0] = +input.value;
        }
        values[1] = 'plus';
        isMemo = false;
        clearInputValue();
    }

    if (e.target.closest('.minus')){
        if(!values[0]){
            values[0] = +input.value;
        }
        values[1] = 'minus';
        isMemo = false;
        clearInputValue();
    }

    if (e.target.closest('.multiply')){
        if(!values[0]){
            values[0] = +input.value;
        }        
        values[1] = 'multiply';
        isMemo = false;
        clearInputValue();
    }

    if (e.target.closest('.divide')){
        if(!values[0]){
            values[0] = +input.value;
        } 
        values[1] = 'divide';
        isMemo = false;
        clearInputValue();
    }

    if (e.target.closest('.dot')){
        enterDot();
    }

    if (e.target.closest('.equal')){

        if (isMemo === true) {
            memo[0] = +input.value;
            calculate(memo, memo[1]);
            checkInputValue();
            return;
        }
        
        values.push(+input.value);
        memo = [...values];        
        clearInputValue();
        isMemo = true;
        calculate(values, values[1]);
        checkInputValue();
    }
});