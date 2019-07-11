let email = document.querySelector('.input'),
    button = document.querySelector('.btn'),
    error = document.querySelector('.error'),
    input = document.querySelector('.input');

    // const email = document.querySelector('#email');
    // const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function validateEmail () {
  const email = document.querySelector('.input');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    error.style.transform = "scale(1)";
    input.style.border = '1px solid var(--light-red)';
  } else {
    error.style.transform = "scale(0)";
    input.style.border = '1px solid var(--light-blue)'
  }
}


button.addEventListener('click', (e) => {

  validateEmail();


  e.preventDefault();
})