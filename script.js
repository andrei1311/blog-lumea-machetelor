
console.log(document.getElementById('show-image'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('welcome-p'))
console.log(document.querySelector('li'));
console.log(document.querySelector('.welcome-p'));
console.log(document.querySelector('#show-image'));
console.log(document.querySelectorAll('li'));
console.log(document.querySelector('.welcome-p'));

let firstMenuElement = document.querySelector('li');

firstMenuElement.innerHTML = 'Acasa'

let imageButton = document.querySelector('#show-image');

imageButton.addEventListener('click', function(){
  let surprise = document.querySelector('#surprise');
  surprise.innerHTML = '<img src="https://images.unsplash.com/photo-1588502732596-37eef6e85b41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80">';
});
