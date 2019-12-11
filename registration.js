const showPassword = () =>
{
  const pwd = document.getElementById('password');
  if (pwd.type === "password") {
    pwd.type = "text";
  } else {
    pwd.type = "password";
  }
}

const currentError = {
  userName: false,
  mail: false,
  userType: false,
  password: false
};

let errors = currentError;


const validation = input =>
{
  const elem = document.getElementById(input);
  const spanElement = document.getElementById(`${input}_span`);
  const value = document.getElementById(input).value;

  switch (input) {

    case 'userName':
      if (value === '') {
        spanElement.innerHTML = 'Please enter name';
        elem.classList.add("validation-err");
        elem.classList.remove("input-color");
        errors[input] = 'Please enter name';
      } else {
        errors[input] = null;
      }
      break;

    case 'mail':
      const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!pattern.test(String(value).toLowerCase())) {
        spanElement.innerHTML = 'Please enter a valid email address';
        elem.classList.add("validation-err");
        elem.classList.remove("input-color");
        errors[input] = 'Please enter a valid email address';
      } else {
        errors[input] = null;
      }
      break;

    case 'password':
      if (value.length < 8) {
        spanElement.innerHTML = 'Please enter valid password';
        elem.classList.add("validation-err");
        elem.classList.remove("input-color");
        errors[input] = 'Please enter valid password';
      } else {
        errors[input] = null;
      }
      break;

    case 'userType':
      if (!value) {
        spanElement.innerHTML = 'Please select user type';
        elem.classList.add("validation-err");
        elem.classList.remove("input-color-select");
        errors[input] = 'Please select user type';
      } else {
        errors[input] = null;
      }
      break;

    default:
      errors = currentError
      break;
  }

  const btn = document.getElementById('button');

  if (Object.values(errors).every(error => error === null))
  {
    btn.classList.add('enabled');
  }
  else
  {
    btn.classList.remove('enabled');
  }
}

const removeErr = id =>
{
  const spanElem = document.getElementById(`${id}_span`);
  const elem = document.getElementById(id);
  spanElem.innerHTML = '';
  elem.parentElement.classList.remove("validation-err");
  if (id === 'userType')
    elem.classList.add("input-color-select");
  else
    elem.classList.add("input-color");

}


