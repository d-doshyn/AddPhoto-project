let toOpen = document.querySelector('.invisible-text');
let openTrigger = document.querySelector('.more-about');
let rotated = document.querySelector('.fa-angle-down');
let changeText = document.querySelector('.more-about p');

openTrigger.onclick = () => {
    if (toOpen.classList.contains('none')) {
        toOpen.classList.remove('none');
        changeText.innerHTML = 'Скрыть &nbsp'
        rotated.classList.add('turned');
    } else {
        toOpen.classList.add('none');
        rotated.classList.remove('turned');
        changeText.innerHTML = 'Подробнее &nbsp'
    }
}

let toOpen1 = document.querySelector('.inv-text1');
let openTrigger1 = document.querySelector('.more1');
let rotated1 = document.querySelector('.angle1');
let changeText1 = document.querySelector('.more1 p');

openTrigger1.onclick = () => {
    if (toOpen1.classList.contains('none')) {
        toOpen1.classList.remove('none');
        changeText1.innerHTML = 'Скрыть &nbsp'
        rotated1.classList.add('turned');
    } else {
        toOpen1.classList.add('none');
        rotated1.classList.remove('turned');
        changeText1.innerHTML = 'Подробнее &nbsp'
    }
}