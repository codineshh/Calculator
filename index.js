console.log("This is calculator website")

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let btn = document.getElementsByClassName('btn');
let screenValue = 0;
// let result = screenValue;
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // console.log('you pressed' ,buttonText)

        if(buttonText=='X'){
            buttonText = '*'
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText=='='){
        screen.value = eval(screenValue)
        
    }
    else if(buttonText=='Back'){
        screenValue = screenValue.toString().slice(0,-1);
        screen.value = screenValue;
    }
    else{
        screenValue += buttonText;
        screen.value = screenValue;
    }
    })

  
}



