let words = [];
document.querySelector('#add_BTN').addEventListener('click', function () {
    let newWord = document.querySelector('#input_world').value;
    words.push(newWord);
    renderBadWords();
    document.querySelector('#input_world').value = '';
});
document.querySelector('#reset_BTN').addEventListener('click', function () {
    document.querySelector('.bad').textContent = '';
    words = [];
    document.querySelector('#text_cenzor').value = '';
});
function renderBadWords() {
    document.querySelector('.bad').textContent = '';
    for (let i = 0; i < words.length; i++) {
        if (i == 0) {
            document.querySelector('.bad').textContent = words[i];
        }
        else {
            document.querySelector('.bad').textContent += `,${words[i]}`;
        }
    }
}
document.querySelector('#cenzor').addEventListener('click', function () {
    for (let i = 0; i < words.length; i++) {
        let text = document.querySelector('#text_cenzor').value;
        replaceAll(text, words[i]);
    }
});
function replaceAll(str, find) {
    let replace = '';
    for (let i = 0; i < find.length; i++) {
        replace += '*';
    }
    str = str.replace(new RegExp(find, 'g'), replace);
    document.querySelector('#text_cenzor').value = str;
}
//# sourceMappingURL=main.js.map