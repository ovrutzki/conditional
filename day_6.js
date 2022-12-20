// EXE 1
// 1
function oddOrEven(num){
    if (num % 2 === 0){
       console.log('even');
        return true;
    } else if (num % 2 === 1){
        console.log('odd');
        return false;
    }
}
oddOrEven(12345)
// 2
function greaterNum(a, b, c){
    if (a > b && a > c){
        console.log(`the greater num of ${a}, ${b}, ${c} is ${a}`);
    } else if (b > a && b > c) {
        console.log(`the greater num of ${a}, ${b}, ${c} is ${b}`);
    } else if (c > a && c > b) {
        console.log(`the greater num of ${a}, ${b}, ${c} is ${c}`);
    } else {
        console.log('there is two greter num.');
    }
}
greaterNum(5, 3, 4);
greaterNum(3, 6, 4);
greaterNum(3, 6, 6);

// 3
function helloworld(lang){
    if (lang === 'fre'){
        console.log('urvua shushana');
    } else if (lang === 'es'){
        console.log('olla amigus');
    } else if (lang === 'heb'){
        console.log('shalom alichem');
    } else {
        console.log('helloo world');
    }
}
helloworld('heb');
helloworld('fre');
helloworld('porto');

// 4
function assignGrade(numScore){
    if (numScore >= 90 && numScore <= 100){
        console.log('Your score grade is A');
    } else if (numScore >= 80 && numScore <= 89){
        console.log('Your score grade is B');  
    } else if (numScore >= 70 && numScore <= 79){
        console.log('Your score grade is C');  
    }else if (numScore >= 60 && numScore <= 69){
    console.log('Your score grade is D');
    } else if (numScore <= 59) {
        console.log('Your score grade is F');
    }}
    assignGrade(100)

    // 5
    function pluralize(noun, num){
        if (num > 1 && noun === 'sheep'){
            console.log(`${num} geese`);
        } else if (num > 1){
            console.log(`${num} ${noun}s`);
        } else if (num = 1){
            console.log(`${num} ${noun}`);
    }}
    pluralize('cat', 2);
    pluralize('dog', 1);

    // 6
    //  (strawberry && chooclate) || stracciatella || anny flavor !== caramel 
//  7
let demo=document.getElementById('demo').innerHTML;
function writeName(){
    let person = prompt('please enter your name:','friend');
    demo = document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
    // demo = document.write(`hello ${person}`);
    }
writeName()

// // 8
// Write a function that takes in a number and prints a message based on the following conditions: 
// If the number is positive and odd, print "Positive and odd"If the number is positive and even, print "Positive and even"
//  If the number is negative and odd, print "Negative and odd"
// If the number is negative and even, print "Negative and even"
//  If the number is zero, print "Zero"
function numInfo(num){
    if (num % 2 === 0 && num > 0){
        console.log('positive and even');
    } else if (num % 2 === 0 && num < 0) {
        console.log('negative and even');
    } else if (num % 2 !== 0 && num > 0) {
        console.log('positive and odd');
    } else if (num % 2 !== 0 && num < 0) {
        console.log('negative and odd');
    } else if (num === 0){
        console.log('zero');
    }}
    numInfo(4); 
    numInfo(-6); 
    numInfo(-5); 
    numInfo(5); 
    numInfo(0); 
// 9
function primeNum(num){
    if (num === 2 || num === 3 || num ===5){
        console.log('true');
    }
    else if (num % 2 === 0 || num % 3 === 0 || num % 5 ===0) {
        console.log('false')
    } else {
        console.log('true');
    }
} 
primeNum(3);
primeNum(11);
primeNum(12);
// 10
function calculator(num1, num2, operand){
    if (operand === '+'){
        return num1 + num2;
    } else if (operand === '-'){
        return num1 - num2;
    } else if (operand === '*'){
        return num1 * num2;
    } else if (operand === '%'){
        return num1 % num2;
    } else if (operand === '/' && num2 === 0){
        return 'Cannot divide by zero';
    } else if (operand === '/' ){
        return num1 / num2;
    } else {
        return 'Invalid operator';
    }}

    console.log(calculator(2,4,'*'));
    console.log(calculator(5,0,'/'));
    console.log(calculator(8,10,'-'));

    // 11
    function  isLeapYear(year){
        if (year % 4 === 0){
            if(year % 100 === 0 && year % 400 === 0)
                return true;
            } if (year < 100) {
                return true;
            }
        return false;
    }
    console.log(isLeapYear(1900))

    // 13
    function sortNum(a, b, c){
        if(a > b && a > c && b > c){
            return `${a}, ${b}, ${c}`;
    } else if (a > b && a > c && c > b){
        return `${a}, ${c}, ${b}`;
    } else if (b > a && b > c && a > c){
        return `${b}, ${a}, ${c}`;
    } else if (b > a && b > c && c > a){
        return `${b}, ${c}, ${a}`;
    } else if (c > a && c > b && b > a){
        return `${c}, ${b}, ${a}`;
    } else if (c > a && c > b && a > b){
        return `${c}, ${a}, ${b}`
    }
    }
    console.log(sortNum(5, 500, 67));

    // 14
    function saftyRules(crewStatus, computerStatusCode, shuttleSpeed){

    }



