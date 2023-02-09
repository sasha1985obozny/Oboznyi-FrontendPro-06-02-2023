'use strict'

const numberOne = prompt("Введіть, будь ласка, перше число");
const numberTwo = prompt("Введіть, будь ласка, друге число");
const nextRow ='\r';
alert(`${numberOne} + ${numberTwo} = ${+numberOne + +numberTwo}${nextRow}
${numberOne} - ${numberTwo} = ${+numberOne - +numberTwo}${nextRow}
${numberOne} * ${numberTwo} = ${+numberOne * +numberTwo}${nextRow}
${numberOne} / ${numberTwo} = ${+numberOne / +numberTwo}`);