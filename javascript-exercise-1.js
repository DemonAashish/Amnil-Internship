//Ex.1: Palindrome Number
String.prototype.isPalindrome = function ()  {   
    if(this.length<=1){
        return false
    };
    const arrValue = this.split ("");     
    const reveArrVal = arrValue.reverse();    
    const revString = reveArrVal.join(""); 
    if (this == revString)
        {  
          return true; 
        }  
    else {  
        return false;
}}  
let word1='level';
let word2='shovel';
console.log(word1.isPalindrome());
console.log(word2.isPalindrome());

//Ex.1: End

//Ex.2: Cube 
Number.prototype.cube=function(){
    return Math.pow(this,3)
}
let num=2;
console.log(num.cube());
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

//Ex.4: Objects
let providedObject = {1: { fullName:'John Doe'}, 2: {fullName:'Jim Doe'}, 3: {fullName:'Jane Doe'} };
let result =Object.keys(providedObject).map((key) => {{return{id:Number(key), fullName:providedObject[key].fullName}}});
console.log(result);

//Ex.4 End

//Ex.5: Displacement 
let diff=0;
const points = {  p1: [2, 3],p2: [6, 7],
    get displacement(){
        diff=(points.p2[0]-points.p1[0])**2+(points.p2[1]-points.p1[1])**2;
        return Math.sqrt(diff);;
      }
  };
  console.log(points.displacement);
//Ex.5: End


//Ex.6: Constructor
function Person (first_name,last_name,dob) {
     this.firstName = first_name,
     this.lastName = last_name,
     this.dob = dob,
     this.fullName=function(){
         return first_name+last_name;
     }
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