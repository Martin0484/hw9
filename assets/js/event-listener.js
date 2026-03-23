// JavaScript Document
var elUsername = document.getElementById('username');
var elPassword = document.getElementById('password');

function checkInput(minLength, intputEl, FBDiv, groupEl)
{
    var elInput = document.getElementById(intputEl);
    var elFB = document.getElementById(FBDiv);
    var elGroup = document.getElementById(groupEl);
    if (elInput.value.length < minLength)
    {
        elFB.innerHTML = intputEl + ' must be ' + minLength + ' characters or more';
        elGroup.classList.remove('has-success');
        elGroup.classList.add('has-error');
    }
    else
    {
        elFB.innerHTML = '';
        elGroup.classList.remove('has-error');
        elGroup.classList.add('has-success');
    }
}
elUsername.addEventListener('blur', function() {
    checkInput(5, 'username', 'usernameFB', 'unGroup');
    },false);

elPassword.addEventListener('blur', function() {
    checkInput(8, 'password', 'passwordFB', 'pwGroup');
    },false);
