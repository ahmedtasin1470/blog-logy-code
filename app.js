var errorMsg = document.querySelector('.errorText');


// ########## START FACEBOOK LOGY BLOG VARIABLE ########## //

const fbLogyPage = '<a href="https://itz-tasin.blogspot.com/" target="_blank">Click me for blog😀</a>'

    // BLOG SINGLE POST //
    const fbHacking = '<a href="https://itz-tasin.blogspot.com/2021/08/facebook-hack-possible-facebook.html" target="_blank">Click me for Hacking!!😀</a>'

// ########## END FACEBOOK LOGY BLOG VARIABLE ########## //




document.querySelector('#type-area').addEventListener('keyup' , function(){

    var x = document.querySelector('#type-area').value;

    if(x == 'fb-logy-blog'){
        document.querySelector('.result-area').innerHTML = fbLogyPage
    }
    else if(x == 'fb-hacking'){
        document.querySelector('.result-area').innerHTML = fbHacking
    }
    else{
        document.querySelector('.errorText').classList.add ('show')
    }
})
