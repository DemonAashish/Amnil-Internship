//Ex.1: Palindrome Number
String.prototype.isPalindrome = function (String)  {  
// convert the string into an array using the string.split() function  
const arrValue = string.split (""); //     
// use reverse() method to reverse the array values  
const reveArrVal = arrValue.reverse();    
// use join() method to group the array values into the string  
const revString = reveArrVal.join(""); 
if (string == revString) // if string condition is equal to the revString  
{  
console.log(`${string} is palindrome`)   
}  
else {  
console.log(`${string} is not palindrome`)
}   
}  
let word1='level';
let word2='shovel';
String.prototype.isPalindrome(string=word1);
String.prototype.isPalindrome(string=word2);

//Ex.1: End

//Ex.2: Cube 
Number.prototype.cube=function(num){
    return Math.pow(num,3)
}
console.log(Number.prototype.cube(2));
//Ex.2: End

//Ex.3: Flatening Array 
let providedArray = [{id: 1, fullName:'John Doe'}, {id: 2, fullName:'Jim Doe'}, {id: 3, fullName:'Jane Doe'}];
let flattened={};
providedArray.map(m=>{
    const key=m.id, value={fullName:m.fullName}
    flattened[key]=value;
})
console.log(flattened);

//Ex.3: End


//Ex.6: Constructor
function Person () {
     this.firstName = 'ram',
     this.lastName = 'kumar',
     this.dob = '2000/02/20'
 }
 const person1 = new Person('John', 'Doe', '1996/03/27');
 function calculateYear(dob){
    let timeMs=Date.now()-dob.getTime();
    let year=new Date(timeMs);
    return Math.abs(year.getUTCFullYear()-1970);
}
//calculating day
function calculateDay(dob){
    let diffMonth= Date.now()-dob.getTime();
    let monthDate= new Date(diffMonth);
    return Math.abs(monthDate.getUTCMonth()*30+monthDate.getUTCDate());
}
//display
 console.log(person1.firstName+person1.lastName+calculateYear(new Date(person1.dob))+" year" +" "+ calculateDay(new Date(person1.dob))+" Day");
       

//Ex.7 Recursive
function recursive(num){
console.log(num);
if(num!=0){  
    if(num<0){
        recursive(num=num+1);
    }else
        recursive(num=num-1);      
};
}
recursive(-5)
recursive(5);
//Ex.7 : End