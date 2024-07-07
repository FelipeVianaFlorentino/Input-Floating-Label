const input = document.querySelector('input');
const label = document.querySelector('label');

input.addEventListener('focus', () => {
    label.classList.add('label-active');
});

input.addEventListener('blur', () => {
    if (input.value === '') {
        label.classList.remove('label-active');
    }
})