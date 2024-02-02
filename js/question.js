const inputs = [...document.querySelectorAll('input')];
const button = document.querySelector('button');
const answer1 = 'Суши';
const answer2 = '3 раза в день 7 дней в неделю';
const answer3 = 'Тренировка';
const answer4 = 'Снизу';
const answer5 = 'Жесткий трах сзади с окончанием внутрь';
const answer6 = 'Неудержимые';

button?.addEventListener('click', (e) => {
    const checkedInput = inputs?.filter(input => {
        return input?.checked === true
    })
    if (checkedInput.length < 6) {
        alert('Пожалуйста ответь на все вопросы!')
    } else if (answer1 === checkedInput[0].value &&
        answer2 === checkedInput[1].value &&
        answer3 === checkedInput[2].value &&
        answer4 === checkedInput[3].value &&
        answer5 === checkedInput[4].value &&
        answer6 === checkedInput[5].value) {
        window.location.href = 'file:///D:/download/leters/letter/index.html'
    } else {
        alert('Ты плохо знаешь своего будущего мужа')
    }
})