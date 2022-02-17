const email = document.querySelector('#email')
const password = document.querySelector('#password')
const connexionBtn = document.querySelector('button')


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePassword(password) {
    if (password.value.length >= 8) {
        return true;
    } else {
        return false
    }
    
}

connexionBtn.addEventListener('click', () => {
    if(validateEmail(email.value)){
        console.log('ok');
    } else {
        console.log('nok');
    }
    if(validatePassword(password)){
        console.log('ok');
    } else {
        console.log('nok');
    }
    // console.log(email.value)
    // console.log(password.value)
})