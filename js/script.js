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
    alert('Не расстраивайся')

    var htoto = prompt('Что-то случилось?');

        if (htoto == 'Я получил плохую оценку') {
            alert('Я тоже их получаю. :)');
        } else if (htoto == 'У меня горе') {
            alert('Я сожалею');
        } else {
            var vop = prompt('Я могу чем-нибудь помочь?');

                if (vop == 'Да') {
                    alert('Тогда я помогу!');
                } else if (vop == 'Нет') {
                    alert('Мне правдо жаль');
                } else {
                    alert('Извини, пока ' + name);
                }
        }

//Диолог

} else if (howreu == 'Нармально') {
    alert('Я рад!');
} else {
    alert('У меня харошо');
}

var sport = prompt('Какой ты любишь спорт?');

//вопрос

if (sport == 'Футбол') {
    alert('Мне тоже он нравится');
} else if (sport == 'Баскетболл') {
    alert('Я не умею в него играть');
} else if (sport == 'Терпеть его не могу') {
    alert('Извини, я не знал.');
} else if (sport == 'Хоккей') {
    alert('А я не люблю хоккей.');
} else if (sport == 'Бокс') {
    alert('Это больно.');
} else if (sport == 'Киберспорт') {
    alert('Хахах!');
} else {
    alert('непомню такого');
}

//о спорте

var ohenki = prompt('А ты хорошо учишься?');

//сново вопрос.

if (ohenki == 'Плохо') {
    alert('Тогда берись за ум!');
} else if (ohenki == 'Хорошист') {
    alert('Я недавно им стал');
} else if (ohenki == 'Троечник') {
    alert('Понятно');
} else if (ohenki == 'Отличник') {
    alert('Молодец');
} else {
    alert('У меня одна четвёрка!');
}

//Об учёбе

var programming = prompt('Ты программируешь?');

if (prompt == 'Да') {
    alert('Я тоже');

    var language = prompt('какой твой любимый язык программирования?');

    if (language == 'JavaScript') {
        alert('Я тоже его люблю');
    } else if (language == 'HTML') {
        alert('Я на нём пишу');
    } else if (language == 'CSS') {
        alert('Я начал на нём писать');
    } else {
        alert('Интересно');
        alert('До встречи');
    }
} else if (programming == 'Нет') {
    alert('Жалко');
} else {
    alert('хорошо');
}

//о программировании

var music = prompt('Ты любишь музыку');

if (music == 'Да') {
    var grup = prompt('Какая музыка твоя любимая?');

    if (grup == 'Beliver') {
        alert('Immages Dragons моя любимая группа');
    } else {
        alert('Буду занать');
        alert('Выключение.....');
    }
} else if (music == 'Нет') {
    alert('Я тоже релко слушаю');
} else {
    alert('ОК');
}

//о музыке

var videogame = prompt('Ты играешь в видеоигры?');

if (videogame == 'Да') {
    alert('Я тоже');

    var favegame = prompt('какая твоя любимая видеоигра?');

    if (favegame == 'Undertale') {
        alert('Мне нравилась эта игра.');
    } else if (favegame == 'SkyRim') {
        alert('У тебя отличный вкус!');
    } else if (favegame == 'Minecraft') {
        alert('Хаха. Я не кдивлён.');
    } else {
        alert('Я не играл');
        alert('Пока ' + name);
    }
} else if (videogame == 'Нет') {
    alert('Молодец')
} else {
    alert('Ладно')
} 

//о играх

var cinema = prompt('А какой твой любимый жанр?: Ужасы, Камедия или Фантастика.');

if (cinema == 'Ужасы') {
    alert('Я просто обажаю ужасы!');

    var yjas = prompt('А какой твой любимый ужастик?');

    if (yjas == 'Оно') {
        alert('Этот фильм один из моих самых любимых фильмов(обе части). когда я его смотрел я плакал. как по мне ниодин фильм не перадал бы радости и печали детей, чем этот фильм!')
    } else {
        alert('Неплохо');
    }
} else if (cinema == 'Камедия') {
    alert('Я тоже смотрю коммедии');

    var comedu = prompt('Какая коммедия любимая?');

    if (comedu == 'Мистер бин') {
        alert('Это моя самая любимая коммедия!');
        alert('С табой было очень весело. Пока ' + name);
    } else {
        alert('А моя о Мистере бине.');
        alert('С табой было очень весело. Пока ' + name);
    }
} else if (cinema == 'Фантастика') {
    alert('Я просто обажаю Гарри Поттера!');
    alert('С табой было очень весело. Пока ' + name);
} else {
    alert('Я редко такое смотрю.');
    alert('С табой было очень весело. Пока ' + name);
}
//о фильмах
//Заключение.
//Спасибо тем кто доиграл до конца.
//Надеюсь вам было интересно.