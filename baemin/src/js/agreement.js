import { _ } from './utils/dom.js';

// 필수 체크 3개 다 되어야만 버튼 가능

// 필수 체크 풀리면 다시 버튼 disabled

const handleClickCheckBox = (checkItems, { target }) => {
  console.log(target.name);
  if (target.name === 'optional') return;
  // if(target.id === all ) handleClickAllAgreement(checkItems)
  // if(target.necess && isSelectNecssary) 3개 체크됐나?
  // if 선택이면 그냥 return
  // if 전체 동의 체크박스면, 나머지 체크박스도 체크 / 해제
  // if 필수면 나머지 필수도 다 체크 됐나?
};

const handleClickAllAgreement = (allCheck, checkList) => {
  checkList.forEach((checkItem) => (checkItem.checked = allCheck));
};

const isSelectNecssary = () => {
  for (const necessaryItem of necessaryItems) {
    if (!necessaryItem.checked) return false;
  }
  return true;
};

const switchNextButton = () => {};

const handleFormClick = ({ checkList }, { target }) => {
  if (target.type !== 'checkbox' || target.name === 'optional') return;

  if (target.name === 'all') handleClickAllAgreement(target.checked, checkList);

  if (target.name === 'necessary') console.log('necess');
};

const init = () => {
  const $nextButton = _.$('agreement_submit_btn');
  const agreementForm = _.$('#agreement_form');
  const checkList = _.$$('.check_list input');
  const necessaryItems = _.$$('.check_list input[name=necessary]');
  agreementForm.addEventListener('click', handleFormClick.bind(null, { checkList }));
};

init();
