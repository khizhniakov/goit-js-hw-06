const inputEl = document.querySelector("#validation-input");
const inputMaxLength = parseInt(inputEl.dataset.length);

const onInputBlur = (event) => {
  if (event.currentTarget.value.length === inputMaxLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);
