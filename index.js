var display = document.querySelector('.display');
var left = document.querySelectorAll('.row-unit-left');
var right = document.querySelectorAll('.row-unit-right');
var flag;
var result;

left.forEach(function(item, index) {
    item.addEventListener("click",function(){
        if(flag == 1){
            display.innerText = '';
            flag=0;
        }


        if(item.innerText != 'AC' && item.innerText != '=' ) {
            display.innerText += item.innerText;
        }else if(item.innerText == 'AC'){
            display.innerText = '';
        }else if(item.innerText == '=') {
            flag = 1;
            result = eval(display.innerText);
            display.innerText +=  '=' + result;
        }
    })
})

right.forEach(function(item, index) {
    item.addEventListener("click",function(){
        if(flag == 1){
            display.innerText = result + item.innerText;
            flag=0;
        }else if(display.innerText != "")
            display.innerText += item.innerText;
    })
})

