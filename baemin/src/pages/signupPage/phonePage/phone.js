import { _ } from '../../../js/utils/dom.js';

const switchDash = (phoneNumber) => {
  const originNumber = phoneNumber.replace(/\-/g, '');
  return (
    originNumber.substr(0, 3) + '-' + originNumber.substr(3, 4) + '-' + originNumber.substr(7, 4)
  );
};

const handleInput = ({ target, keyCode }) => {
  if (keyCode === 8 || keyCode === 46) return;

  const length = target.value.length;
  if (length === 4) target.value = target.value.slice(0, 3) + '-' + target.value[3];

  if (length === 8) target.value = target.value.slice(0, 7) + '-' + target.value[7];

  if (length === 9 && target.value[7] !== '-')
    target.value = target.value.slice(0, 7) + '-' + target.value.slice(7);

  if (length === 13) target.value = switchDash(target.value);
};

const init = () => {
  const $phoneNumberInput = _.$('#phoneNumber');
  $phoneNumberInput.addEventListener('keyup', handleInput);
};

init();
