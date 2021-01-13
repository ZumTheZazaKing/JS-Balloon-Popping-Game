let balloonContainer = document.getElementById('container');

let text = document.getElementById('text');

let button = document.getElementById('button');

let popped = 0;

function pop(balloon){

    balloon.style.backgroundColor = 'transparent';

    balloon.innerHTML = 'POP!';

}

function removePop(balloon){

    balloon.style.visibility = 'hidden';

    popped++;

    if(popped == 32){

        balloonContainer.innerHTML = 'Congratulations! <br>You popped all 32 balloons!';

        button.classList.remove('hide');

        text.innerHTML = '';

    }

}




