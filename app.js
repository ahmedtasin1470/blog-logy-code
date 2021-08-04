var errorMsg = document.querySelector('.errorText');

document.querySelector('#type-area').addEventListener('keyup' , function(){

    var x = document.querySelector('#type-area').value;
    const fbHack = '<a target="_blank" href="https://its-tasin-fbl.blogspot.com">Click me for blog😀</a>'

    if(x == 'fb-hack'){
        document.querySelector('.result-area').innerHTML = fbHack
    }
    else{
        document.querySelector('.errorText').classList.add ('show')
    }
})