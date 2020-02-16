let scoreX = document.querySelector('#score-x');
let scoreO = document.querySelector('#score-o');
let winner = document.querySelector('#winner');
let content = document.querySelectorAll('.content');

const c_arr = Array.from(content);

const checkWinner = () =>{

    for(let i = 0; i< c_arr.length; i += 3){
        if(c_arr[i].innerHTML === c_arr[i+1].innerHTML && c_arr[i].innerHTML=== c_arr[i+2].innerHTML){
            console.log('ok')
            if(c_arr[i].innerHTML === 'X' || c_arr[i].innerHTML === 'O'){
                // winner.innerHTML = `${c_arr[i].innerHTML} won 0`;
                return c_arr[i].innerHTML;
            }
        }
    }

    for(let i = 0; i< c_arr.length / 3; i += 1){
        if(c_arr[i].innerHTML === c_arr[i+3].innerHTML && c_arr[i].innerHTML=== c_arr[i+6].innerHTML){
            console.log('ok 1')
            if(c_arr[i].innerHTML === 'X' || c_arr[i].innerHTML === 'O'){
                // winner.innerHTML = `${c_arr[i].innerHTML} won 1`;
                return c_arr[i].innerHTML;
            }    
        }
    }

    if((c_arr[0].innerHTML === c_arr[4].innerHTML && c_arr[0].innerHTML=== c_arr[8].innerHTML) ||
       (c_arr[2].innerHTML === c_arr[4].innerHTML && c_arr[2].innerHTML=== c_arr[6].innerHTML)){
        console.log('ok 2')
        if(c_arr[4].innerHTML == 'X' || c_arr[4].innerHTML == 'O'){
            // winner.innerHTML = `${c_arr[4].innerHTML} won 2`;
            return c_arr[4].innerHTML;
        }    
    }

    let sum = 0;
    for(let i = 0; i< c_arr.length; i++){
        if(c_arr[i].innerHTML !== ''){
            sum += 1;
        }
    }

    if(sum === 9) {
        restart();
    }

    return null;
}

const restart = () => { 
    c_arr.forEach(field => field.innerHTML = '')
    winner.innerHTML = '';}

document.querySelector('#start').addEventListener('click', () => restart())


const choice = ['X', 'O'];
let choice_index = 0;
c_arr.forEach(field => field.parentElement.addEventListener('click', e =>{ 
    if(e.currentTarget.children[0].innerHTML === ''){
        e.currentTarget.children[0].innerHTML = choice[choice_index];

        choice_index++;
        choice_index = choice_index%2; 

        if(choice_index === 0) {
            document.getElementById('cross').style.border = '3px solid green';
            document.getElementById('circle').style.border = '1px solid black';
        }else{
            document.getElementById('circle').style.border = '3px solid green';
            document.getElementById('cross').style.border = '1px solid black';
        }
        countScore();
    } 
    
}))

const countScore = () =>{
    const who_won = checkWinner();
    if(who_won === 'X' || who_won === 'O'){
        let scoreChoice;
        if(who_won === 'X') {
            scoreChoice = scoreX;
        }else{
            scoreChoice = scoreO;
        }
        let score = parseInt(scoreChoice.innerHTML);
        if(isNaN(score)){
            score = 0;
        }
        score += 1;
        scoreChoice.innerHTML = score;
        if(score <3){
            restart();
        }else if(score === 3){
            winner.innerHTML = `${who_won} won the game`;
            document.querySelector('#start').innerHTML = 'PLAY AGAIN';
            c_arr.forEach(field => field.innerHTML = 'X');
            
            scoreX.innerHTML = '-';
            scoreO.innerHTML = '-';
        }
    }
}