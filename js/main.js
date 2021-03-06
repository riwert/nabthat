const content = document.querySelector('#content');
const pageName = document.querySelector('.page-name');
const resetSettings = document.querySelector('.reset-settings');
const showPersonalData = document.querySelector('.show-personal-data');
const replaceText = document.querySelector('.replace-text');
const appendText = document.querySelector('.append-text');
const texts = document.querySelector('.texts');
let data = [];

function readJson(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType('application/json');
    rawFile.open('GET', file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == '200') {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayAlert(msg) {
    const alert = document.createElement('div');
    alert.innerText = msg;
    alert.className = 'alert';
    content.appendChild(alert);

    let timeout = setTimeout(function() {
        alert.parentNode.removeChild(alert);
    }, 2000);

    alert.addEventListener('click', function() {
        alert.parentNode.removeChild(alert);
        clearTimeout(timeout);
    });
}

function chooseOptionFirst() {
    const msg = 'Wybierz najpierw opcję w pierwszym bloku.';
    displayAlert(msg);
}

function alreadyExists() {
    const msg = 'Ten tekst już istnieje.';
    displayAlert(msg);
}

function allAlreadyExists() {
    const msg = 'Wszystkie dostępne losowe teksty już istnieją.';
    displayAlert(msg);
}

function sortArticles() {
    const articles = document.querySelectorAll('article');
    const articlesArray = Array.from(articles);
    const articlesSorted = articlesArray.sort(function (a, b) {
        if (a.innerText.toUpperCase() < b.innerText.toUpperCase()) return -1;
        else if (a.innerText.toUpperCase() > b.innerText.toUpperCase()) return 1;
        return 0;
    });

    let articlesList = '';
    for (let i = 0, len = articlesSorted.length; i < len; i++) {
        articlesList += articlesSorted[i].outerHTML;
    }
    texts.innerHTML = articlesList;
}

readJson('store/data.json', function(content) {
    data = JSON.parse(content);
});

resetSettings.addEventListener('click', function(e) {
    e.preventDefault();

    location.reload();
});

showPersonalData.addEventListener('click', function(e) {
    e.preventDefault();

    const personalData = document.createElement('div');
    personalData.className = 'personal-data';
    personalData.innerText = 'Robert Wierzchowski';
    if ( ! pageName.querySelector('.' + personalData.className)) {
        pageName.appendChild(personalData);
    }
});

replaceText.addEventListener('click', function(e) {
    e.preventDefault();

    const selectedOption = document.querySelector('.option-form input[type="radio"]:checked');
    if (selectedOption) {
        const text = document.createElement('article');
        switch (selectedOption.value) {
            case '1':
                text.innerText = data[0].body;
                text.className = 'index-0';
                texts.innerHTML = text.outerHTML;
                break;
            case '2':
                text.innerText = data[1].body;
                text.className = 'index-1';
                texts.innerHTML = text.outerHTML;
                break;
            case '3': {
                const lastIndex = data.length - 1;
                const randomIndex = getRandomInt(2, lastIndex);
                text.innerText = data[randomIndex].body;
                text.className = 'index-' + randomIndex + ' random';
                texts.innerHTML = text.outerHTML;
                break;
            }
        }
    } else {
        chooseOptionFirst();
    }
});

appendText.addEventListener('click', function(e) {
    e.preventDefault();

    const selectedOption = document.querySelector('.option-form input[type="radio"]:checked');
    if (selectedOption) {
        const text = document.createElement('article');
        switch (selectedOption.value) {
            case '1':
                text.innerText = data[0].body;
                text.className = 'index-0';
                if ( ! texts.querySelector('.' + text.className)) {
                    texts.appendChild(text);
                } else {
                    alreadyExists();
                    return;
                }
                break;
            case '2':
                text.innerText = data[1].body;
                text.className = 'index-1';
                if ( ! texts.querySelector('.' + text.className)) {
                    texts.appendChild(text);
                } else {
                    alreadyExists();
                    return;
                }
                break;
            case '3': {
                const lastIndex = data.length - 1;
                do {
                    let randomIndex = getRandomInt(2, lastIndex);
                    text.innerText = data[randomIndex].body;
                    text.className = 'index-' + randomIndex;
                } while (texts.querySelector('.' + text.className) && texts.querySelectorAll('article.random').length < (data.length - 2));
                if ( ! texts.querySelector('.' + text.className)) {
                    text.className += ' random';
                    texts.appendChild(text);
                } else {
                    allAlreadyExists();
                    return;
                }
                break;
            }
        }
        sortArticles();
    } else {
        chooseOptionFirst();
    }
});
