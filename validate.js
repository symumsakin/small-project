function validation() {

    const nameReg = /[a-zA-z._]/g;
    const passReg = /.*[0-9].*/g;
    const emailReg = /(cse|eee|cee|law|bangla|thm|eng|arch)_\d{10}@lus\.ac\.bd/g;

    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;

    let pass = document.getElementById("pass").value;

    if (!fname.match(nameReg)) {
        alert('Your first name should not contain any digits');
    }
    if (!email.match(emailReg)) {
        alert('Enter valid email');
    }

    if (!pass.match(passReg)) {
        alert('Your password must contain a digit and it should be 10 character long');
    }
}

function loginValidation() {


    const passReg = /.*[0-9].*/g;
    const emailReg = /(cse|eee|cee|law|bangla|thm|eng|arch)_\d{10}@lus\.ac\.bd/g;

    let email = document.getElementById("email").value;

    let pass = document.getElementById("pass").value;
    if (!email.match(emailReg)) {
        alert('Enter valid email');
    }

    if (!pass.match(passReg)) {
        alert('Your password must contain a digit and it should be 10 character long');
    }
}