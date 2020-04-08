// equals to


let numValue1 = 10;
let numValue2 = 20;
let message = undefined;

if (numValue1<=numValue2){

    message = "numvalue2 is greater than numvalue1";
}
else {
    message = "numvalue2 is grater than numvalue1";
}
console.log(message);


if (numValue1>=numValue2){

    message = "numvalue1 is not less than numvalue2";
}
else {
    message = "numvalue1 is less than numvalue2";
}
console.log(message);

// not equals to 


if(numValue1 != numValue2)
{
    message= "numvalue1 is not equals to numvalue2 : true part";
}
else{
    message = "numvalue1 is equals to numvalue2 : false part";
}

console.log(message);

// && operator

let numValue3 = 10;
let numValue4 = 20;

if ((numValue1==numValue3) && (numValue2==numValue4))
{
    message= "both conditions are match : && condition true part";
}
else {
    message = "both conditions are not match : && condition false part";
}

console.log (message);

if ((numValue1==numValue4) && (numValue2==numValue4))
{
    message= "both conditions are match : && condition true part";
}
else {
    message = "both conditions are not match : && condition false part";
}

console.log (message);

// || operator

if ((numValue1==numValue3) || (numValue2==numValue3))
{
    message= "one of the condition is true : || condition true part";
}
else {
    message = "no one condition is true : || condition false part";
}

console.log (message);


