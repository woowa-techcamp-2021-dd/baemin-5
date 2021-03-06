export const _ = {
  $: (selector, target = document) => target.querySelector(selector),
  $$: (selector, target = document) => target.querySelectorAll(selector),
};

export const setDisabledOfButton = ($button, isDisabled) => ($button.disabled = isDisabled);
