function toggleSelect(element) {
    element.classList.toggle('selected');
}

function increase(element) {
    let input = element.previousElementSibling;
    let value = parseInt(input.value);
    input.value = value + 1;
}

function decrease(element) {
    let input = element.nextElementSibling;
    let value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
}

function checkout() {
            window.location.href = "jieshuan2juan.html";
}

function goToQiuzhu() {
window.location.href = 'qiuzhu.html';
}
