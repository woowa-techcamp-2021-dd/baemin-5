import { _, setDisabledOfButton } from '../../../js/utils/dom.js';

const getInsertedDashNumber = (phoneNumber, keyCode) => {
  const length = phoneNumber.length;
  const originNumber = phoneNumber.replace(/\-/g, '');

  if (keyCode === 8) {
    if (length === 12)
      return (
        originNumber.slice(0, 3) + '-' + originNumber.slice(3, 6) + '-' + originNumber.slice(6)
      );
    return phoneNumber;
  }

  if (length === 4) return phoneNumber.slice(0, 3) + '-' + phoneNumber[3];

  if (length === 8) return phoneNumber.slice(0, 7) + '-' + phoneNumber[7];

  if (length === 9 && phoneNumber[7] !== '-')
    return (phoneNumber = phoneNumber.slice(0, 7) + '-' + phoneNumber.slice(7));

  if (length === 13)
    return originNumber.slice(0, 3) + '-' + originNumber.slice(3, 7) + '-' + originNumber.slice(7);

  return phoneNumber;
};

const handleInput = ({ $requestCertificationBtn }, { target, keyCode }) => {
  target.value = getInsertedDashNumber(target.value, keyCode);

  if (target.value.length === 11) setDisabledOfButton($requestCertificationBtn, true);
  if (target.value.length >= 12) setDisabledOfButton($requestCertificationBtn, false);
};

const init = () => {
  const $phoneNumberInput = _.$('#phoneNumber');
  const $requestCertificationBtn = _.$('#request_certification_btn');
  const $nextBtn = _.$('#next_btn');
  $phoneNumberInput.addEventListener(
    'keyup',
    handleInput.bind(null, { $requestCertificationBtn, $nextBtn }),
  );
};

init();
