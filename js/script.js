var name = prompt('Ваше имя:');
//переменная, которая будет спрашивать ваше имя.

var myname = name;

alert('Привет ' + name);
//после того, как вы ввели имя в консоль, вас поприветствуют.

if (myname == 'Данил') {
    alert('Меня завут так же!');
} else if (myname == 'Андрей') {
    alert('Моего друга тоже так зовут!')
} else if (myname == 'Егор') {
    alert('Моего брата так завут.');
} else if (myname == 'PewDiePie') {
    alert('Это правда ты?');
} else if (myname == 'Маргарита') {
    alert('Красивое имя');
} else {
    alert('А меня зовут Данил');
}

//Некоторые имена моих знакомых.

var howreu = prompt('Как твои дела?');

if (howreu == 'Хорошо') {
    alert('У меня тоже');
} else if (howreu == 'Плохо') {
    alert('не расстраивайся')
    var htoto = prompt('Что-то случилось?');

        if (htoto == 'я получил плохую оценку') {
            alert('Я тоже их получаю. :)');
        }

} else if (howreu == 'Нармально') {
    alert('Я рад!');
} else {
    alert('У меня харошо');
}