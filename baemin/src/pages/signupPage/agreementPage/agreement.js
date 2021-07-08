import { _, setDisabledOfButton } from '../../../js/dom.js';

// 필수 체크 3개 다 되어야만 버튼 가능

// 필수 체크 풀리면 다시 버튼 disabled

const isCheckedNecssary = (necessaryList) => {
  for (const necessaryItem of necessaryList) {
    if (!necessaryItem.checked) return false;
  }
  return true;
};

const handleClickAllAgreement = (isAllCheck, checkList, $nextButton) => {
  checkList.forEach((checkItem) => (checkItem.checked = isAllCheck));
  setDisabledOfButton($nextButton, !isAllCheck);
};

const handleClickNecssary = (necessaryList, $nextButton) =>
  setDisabledOfButton($nextButton, !isCheckedNecssary(necessaryList));

const handleFormClick = ({ $nextButton, checkList, necessaryList }, { target }) => {
  if (target.type !== 'checkbox' || target.name === 'optional') return;

  if (target.name === 'all') handleClickAllAgreement(target.checked, checkList, $nextButton);

  if (target.name === 'necessary') handleClickNecssary(necessaryList, $nextButton);
};

const init = () => {
  const $nextButton = _.$('#agreement_submit_btn');
  const agreementForm = _.$('#agreement_form');
  const checkList = _.$$('.check_list input');
  const necessaryList = _.$$('.check_list input[name=necessary]');
  agreementForm.addEventListener(
    'click',
    handleFormClick.bind(null, { $nextButton, checkList, necessaryList }),
  );
};

init();
