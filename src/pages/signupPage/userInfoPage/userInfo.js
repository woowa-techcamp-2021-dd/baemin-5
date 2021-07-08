import { _, setDisabledOfButton } from '../../../js/utils/dom.js';
const $signupBtn = _.$('#userinfo_form .submitBtn');

const isBackSpace = (keyCode) => keyCode === 8;

const toogleConfirm = ($input) => {
  const $targetDIV = $input.closest('div');
  if (!$targetDIV || !$targetDIV.classList.contains('mark')) return;

  $targetDIV.classList.toggle('confirmed');
  isAllConfirmed($signupBtn);
};

const setConfirm = ($input, isConfirm) => {
  const $targetDIV = $input.closest('div');
  if (!$targetDIV || !$targetDIV.classList.contains('mark')) return;

  isConfirm ? $targetDIV.classList.add('confirmed') : $targetDIV.classList.remove('confirmed');
  isAllConfirmed($signupBtn);
};

const isAllConfirmed = ($signupBtn) => {
  const $$confirmes = _.$$('.confirmed');
  if ($$confirmes.length === 4) {
    setDisabledOfButton($signupBtn, false);
  } else {
    setDisabledOfButton($signupBtn, true);
  }
};
const handleClickConfirmBtn = ({ $userinfoDetail, $emailInput }, e) => {
  //   e.preventDefault();
  setDisabledOfButton(e.target, true);
  toogleConfirm($emailInput);
  $userinfoDetail.classList.remove('hidden');
};
const handleInputNickname = ({ target, keyCode }) => {
  const lenght = target.value.length;
  if (isBackSpace(keyCode)) {
    if (lenght === 4) toogleConfirm(target);
    return;
  }
  if (lenght === 5) toogleConfirm(target);
};

const handleInputPassword = ({ target }) => {
  if (isVaildPassword(target.value)) setConfirm(target, true);
  else setConfirm(target, false);
};

const isVaildPassword = (password) => {
  const VALID_CHECK_REGEX = [/[A-Z]/, /[a-z]/, /[~!@#$%^&*()_+|<>?:{}]/, /[0-9]/];
  const SERIAL_REGEX =
    /012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210|([0-9])\1\1/;

  const validCheckCount = VALID_CHECK_REGEX.reduce((acc, regex) => {
    if (password.match(regex)) return (acc += 1);
    return acc;
  }, 0);
  if (password.length < 10) return false;
  if (validCheckCount < 2) return false;
  if (password.match(SERIAL_REGEX)) return false;
  return true;
};

const getInsertedDotBirth = (birth) => {
  birth = birth.replace(/\./g, '');
  if (birth.length < 5) return birth;
  if (birth.length < 7) return birth.slice(0, 4) + '.' + birth.slice(4);
  return birth.slice(0, 4) + '.' + birth.slice(4, 6) + '.' + birth.slice(6);
};

const handleInputBirth = ({ target }) => {
  const birth = target.value;

  target.value = getInsertedDotBirth(birth);
  if (target.value.length === 10) {
    const date = new Date(target.value);
    const isVaild = Date.parse(target.value);
    if (isNaN(isVaild)) setConfirm(target, false);
    else if (date.getMonth() + 1 !== +target.value.slice(5, 7)) setConfirm(target, false);
    else setConfirm(target, true);
  }
};

const init = () => {
  const $userInfoForm = _.$('#userinfo_form');
  //이메일 관련 돔
  const $emailInput = _.$('#userinfo_email');
  const $confirmEmailBtn = _.$('#confirm_email_btn');
  const $userinfoDetail = _.$('#userinfo_detail');

  const $nicknameInput = _.$('#userinfo_nickname');
  const $passwordInput = _.$('#userinfo_password');
  const $birthInput = _.$('#userinfo_birth');

  $confirmEmailBtn.addEventListener(
    'click',
    handleClickConfirmBtn.bind(null, { $userinfoDetail, $emailInput }),
  );

  $nicknameInput.addEventListener('keyup', handleInputNickname);

  $passwordInput.addEventListener('keyup', handleInputPassword);

  $birthInput.addEventListener('keyup', handleInputBirth);
};

init();
