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

function handleDoubleClick1(element) {
    element.addEventListener('dblclick', function() {
        window.location.href = 'shangpinxiangqing1.html';
    });
}

function handleDoubleClick2(element) {
    element.addEventListener('dblclick', function() {
        window.location.href = 'shangpinxiangqing2.html';
    });
}

function handleDoubleClick3(element) {
    element.addEventListener('dblclick', function() {
        window.location.href = 'shangpinxiangqing3.html';
    });
}

function handleDoubleClick4(element) {
    element.addEventListener('dblclick', function() {
        window.location.href = 'shangpinxiangqing4.html';
    });
}

function handleDoubleClick5(element) {
    element.addEventListener('dblclick', function() {
        window.location.href = 'shangpinxiangqing5.html';
    });
}

function handleDoubleClick6(element) {
    element.addEventListener('dblclick', function() {
        window.location.href = 'shangpinxiangqing6.html';
    });
}

function checkout() {
            window.location.href = "jieshuan1.html";
}

function goToDitu() {
window.location.href = 'juanzhuditu.html';
}

function goToQiuzhu() {
window.location.href = 'qiuzhu.html';
}
