/*let js='Amazing';
if(js==='Amazing') alert("Javacript is a fun");
console.log(72+12+32+45-56)
console.log('maruf')
let firstName= "Maruf";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let job1='Programmer';
let job2 ='Teacher';
console.log(job1)
let namew ='maruf'
// Variable Name convention  Comment
hkgghg
// console.log(true)
console.log(typeof false);
console.log(typeof 23);
 console.log(typeof 'maruf');
let marufbadboy =true;
console.log(marufbadboy);
console.log(typeof marufbadboy);
marufbadboy ='YES!';
console.log(typeof marufbadboy);
let year;
console.log(year);
console.log(typeof year);
year=1998;
console.log(typeof year);
year= 'Anan';
console.log(typeof year);
year = true;
console.log(typeof year);
console.log(typeof null);
*/

/*let age = 30;
age =31;
const birthYear= 1999;
//birthYear =1999;
//const birth;
// math operator
var job ='youarebadboy';
job = 'goodboy';
lname ="MarufHossain";
console.log(lname);*/

/*const now=2023; 
const agemaruf = now-2000;
const ageritu = now - 2002;
console.log(agemaruf,ageritu);
console.log(agemaruf/2,agemaruf*2,2**4);
// 2**4 means @ to the power 4
const firstname='Maruf', lastname= 'Ritu';
console.log(firstname+lastname);
console.log(firstname+'     '+lastname);
//assignment operator
let x = 3+5;
x += 10;
x **=2;
x++;
console.log(x);
// comparison operators
console.log(agemaruf>ageritu);
//>,<,>=,<=
console.log(ageritu>=18);
console.log(now-2000>now-2002);*/

/*const now=2023; 
const agemaruf = now-2000;
const ageritu = now - 2002;
console.log(now-2000>now-2002);//Math operator excute before than comparision operator
const averageAge =(agemaruf+ageritu)/2
console.log(agemaruf,ageritu,averageAge)
*/


//challenge=====1


/*let marksmass=78;
let marksheight=1.69;
let johnmass=92;
let johnheight=1.95;*//*
let marksmass=95;
let marksheight=1.88;
let johnmass=85;
let johnheight=1.76;
let markbmi= marksmass/(marksheight**2);
console.log(markbmi);
let johnbmi= johnmass/(johnheight**2);
console.log(johnbmi);
console.log(johnbmi>markbmi);*/


/*const firstName ='Maruf';
const job='programmer';
const birthyear=2002;
const cyear=2022;
const Maruf="I'm " + firstName +', a ' + ( cyear-birthyear ) + ' years old ' + job + '!';
console.log(Maruf);
const Marufnew = `I'm ${firstName}, a ${cyear-birthyear} years old ${job}!`;
console.log(Marufnew);
console.log(`ajgdj uhusid syausy`);
console.log(' String with \n\ multiple \n\ lines');
console.log(`String 
with
line`);*/

/*const age = 19;
const isoldenough = age>=29;
if(isoldenough) {
    console.log("Ritu can drive 🚗");
}
else
{
    const yearsLeft=29-age ;
    console.log(`Ritu is too young. wait another ${yearsLeft} years :`);
}
let century;
const birthyear = 2001;
if(birthyear<=2000)
{
    century=20;
}
else{
    century=21;
}
console.log(century);*/


// let marksmass=95;
// let marksheight=1.88;
// let johnmass=85;
// let johnheight=1.76;

// let markbmi= marksmass/(marksheight**2);


// let johnbmi= johnmass/(johnheight**2);
// console.log(markbmi, johnbmi);

// if (markbmi>johnbmi){
//     console.log("Mark's bmi is higher than john's bmi");
// }
// else
// {
//     console.log("John's bmi is higher than marks bmi");

// }
// if (markbmi>johnbmi){
//     console.log(`Mark's bmi is ${markbmi} higher than john's bmi ${johnbmi}`);
// }
// else
// {
//     console.log(`John's bmi ${johnbmi} is higher than marks bmi  ${markbmi}`);

// }

// const inputYear= '1991';
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear)+18);
// console.log(Number('Maruf'));
// console.log(String(23),23);

// console.log('I am' + 23 + 'years old');
// console.log('23' + '10' - 3);
// console.log('23' - '10' - 3);
// console.log('23' / '3');
// console.log('23' + 3);

// let n= '1' + 1;
// n= n-1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Maruf'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money=100;
// if(money){
//     console.log("sob khoroc koiro na");
// }
// else{
//     console.log("ekta chakri khujo");
// }
// let height=0;
// if(height){
//     console.log('heght is defined');

// }
// else{
//     console.log('is not defined');
// }


// const age='18';
// if(age===18) console.log('an adult: (strict)');
// if(age==18)console.log('become an adult (loose)');
// const favourite =Number(prompt("What is your favourite number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite===23){
//     console.log('Cool! 23 is an amazing number!');
// }
// if (favourite===7){
//     console.log('Cool! 7 is an amazing number!');
// }
// else{
//     console.log('number is not 23 or 7')
// }
// if(favourite !==23) console.log('Why not 23');
//  CHLLANGE 1
const hasDriverL = true;
const hasDriver = true
const hasGoodV = false;
console.log (hasDriverL && hasGoodV);
console.log (hasDriverL || hasGoodV);

const shouldDrive = hasDriverL && hasGoodV;
if(shouldDrive) {
    console.log("Sarah can drive");
}else {
    console.log("cant drive");
}

//Coding Challenge#3:
const DolphineAvg = (96 + 108 + 89) / 3;
const KoalasAvg = (88 + 91 + 110) / 3;

console.log(DolphineAvg);
console.log(KoalasAvg);

if(DolphineAvg > KoalasAvg) {
    console.log("Dolphine win");
} else if(KoalasAvg > DolphineAvg){
    console.log("Koalas win");
}else {
    console.log("Draw");
}

//coding Challenge#4:
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip, bill + tip);


// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);


// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win  (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win  (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins ');
//   }
// }


// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);

// CHALLENGE 2

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
//   ];
//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
//   mark.calcBMI();
//   john.calcBMI();
//   console.log(mark.bmi, john.bmi);

//   if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
//   }



