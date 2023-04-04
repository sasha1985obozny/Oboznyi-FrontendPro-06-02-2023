'use strict';

new WOW().init();

const alertStyles = [
    'alert-primary', 
    'alert-secondary', 
    'alert-success',
    'alert-danger',
    'alert-warning',
    'alert-info',
    'alert-light',
    'alert-dark'];

const animations = [
    'wow slideInLeft',
    'wow bounceInUp',
    'wow fadeInDown',
    'wow flipInX',
    'wow slideInDown',
    'wow fadeInLeft',
    'wow rotateInDownRight',
    'wow flipInY',
    'wow fadeInUp'
]

$('.js-btn').on('click', () => {
       
    if($('.js-input').val().trim()===''){
        alert('Необхідно ввести текст для елемента');
        return;
    }
    const min = 0;
    const max = 7;
    const max2 = 8;
    let random = Math.floor(Math.random()*(max-min)+min);
    let random2 = Math.floor(Math.random()*(max2-min)+min);
    
    $('<div class="alert" role="alert"></div>')
    .addClass(alertStyles[random])
    .addClass(animations[random2])
    .attr('data-wow-duration', '1s')
    .text($('.js-input').val())
    .appendTo($('body'))
    .on('click', function(e){
        $(this).fadeOut();
        setTimeout(() => {$(this).remove()}, 1000)
    })
    
    $('.js-input').val('');
})