import { _ } from './utils/dom.js';
import { MESSAGE } from './constant.js';

const handleSubmit = ({ $inputEmail, $inputPw, $errEmailBox, $errPwBox }, e) => {
  const inputedEmail = $inputEmail.value;
  const inputedPw = $inputPw.value;

  if (!inputedEmail) {
    e.preventDefault();
    $errEmailBox.innerText = MESSAGE.EMPTY_EMAIL;
    $errPwBox.innerText = '';
    return;
  }

  if (!inputedPw) {
    e.preventDefault();
    $errEmailBox.innerText = '';
    $errPwBox.innerText = MESSAGE.EMPTY_PW;
    return;
  }
};

const init = () => {
  const $loginForm = _.$('#login_form');
  const $inputEmail = _.$('#login_email');
  const $inputPw = _.$('#login_pw');

  const $errEmailBox = _.$('#login_email_err');
  const $errPwBox = _.$('#login_pw_err');

  $loginForm.addEventListener(
    'submit',
    handleSubmit.bind(null, { $inputEmail, $inputPw, $errEmailBox, $errPwBox }),
  );
};

init();
