const stringArray = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'],
      numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
      word1 = 'Malik', word2 = 'kilam',
      profiles = [{name: "Анна", age: 22}, {name: "Виктор", age: 45}, {name: "Сергей", age: 34},
                  {name: "Матвей", age: 24}, {name: "Дария", age: 57}, {name: "Михаил", age: 89},
                  {name: "Виктория", age: 13}, {name: "Мария", age: 75}];

//Q1
function q1 (arr) {
    reversedStringArray = [];
    for (i of arr) {
        reversedStringArray.push(i.split('').reverse().join(''));
    }
    return reversedStringArray;
}
//console.log(q1(stringArray));

//Q2
document.querySelector('.text-color').style.color = 'red';

//Q3
const q3 = (arr) => {
    evenNumbers = arr.filter(function(el) {
        return el % 2 == 0;
    })
    return evenNumbers;
}
//console.log(q3(numbersArray));

//Q4
const selection = document.getElementById('userSelection');
selection.addEventListener("change", e => {
    console.log(e.target.value);
})

//Q5
function q5(number) {
    return number % 2 == 0 ? "Четное" : "Нечетное"; 
}
//console.log(q5(4));

//Q6
const q6 = (arr) => {
    arr.pop();
    return arr;
}
//console.log(q6(stringArray));

//Q7
function q7(str1,str2) {
    return str1.toLowerCase().split('').reverse().join('') == str2.toLowerCase();
}
//console.log(q7(word1,word2));

//Q8
//document.getElementById('image').style.opacity = '0';

//Q9
const q9 = (arr) => {
    const newArr = [];
    newArr.push(arr.shift(), arr.pop());
    return newArr;
}
//console.log (q9(numbersArray));

//Q10
function q10(obj) {
    let ageSum = 0;
    obj.forEach((el) => {
        ageSum += el.age;
    })
    return ageSum;
}
//console.log(q10(profiles));

//Q11
menuList = document.querySelectorAll('li');
menuList.forEach((el) => {
    el.classList.add('list-item');
});

//Q12
btn = document.getElementById('status');
btn.addEventListener('click', () => {
    if(btn.classList.contains('active')) {
        btn.classList.remove('active');
        btn.classList.add('inactive');
    }
    else if(btn.classList.contains('inactive')) {
        btn.classList.remove('inactive');
        btn.classList.add('active');
    }
    else {
        btn.classList.add('active');
    }
});

//Q13
txt = document.querySelectorAll('.article');
txt.forEach((el) => {
    el.style.fontFamily = "Arial";
})

//Q14
const q14 = (arr) => {
    result = arr.map(function(el, i) {
        return el * i;
    })
    return result;
}
//console.log(q14(numbersArray));

//Q15
function q15 (arr) {
    result = arr.filter((el) => {
        return el.length > 3;
    })
    return result;
}
//console.log(q15(stringArray));