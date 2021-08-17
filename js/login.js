document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userEmailInput = userEmail.value;
    userEmail.value = '';
    console.log(userEmailInput);

    const userPassword = document.getElementById('user-password');
    const userPasswordInput = userPassword.value;
    userPassword.value = '';
    console.log(userPasswordInput);

    if (userEmailInput == 'jakaria@gmail.com' && userPasswordInput == 'shirin') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Email or password mismatch');
    }
})