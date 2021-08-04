//Declaring values
const persons = [    {firstName: 'Aayush', lastName: 'Shrestha', dob: '1986/09/23' },
                    { firstName: 'Amresh', lastName: 'Thakur', dob: '1997/03/11' },
                    { firstName: 'Bibin ', lastName: 'Maharjan', dob: '1996/02/02' },
                    { firstName: 'Kiran ', lastName: 'Ghimire ', dob: '2001/11/11' },
                    { firstName: 'Kushal', lastName: 'Bajracharya ', dob: '1998/10/26' },
                    { firstName: 'Aashish', lastName: 'Upreti', dob: '1996/10/31' },
                    { firstName: 'Nitesh', lastName: 'Upadhyaya', dob: '1997/11/02' }
]; 
//calculating year
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
for(i=0; i<persons.length; i++){
    console.log(persons[i].firstName +" "+persons[i].lastName);
    console.log("Your age is "+calculateYear(new Date(persons[i].dob))+" year" +" "+ calculateDay(new Date(persons[i].dob))+" Day");
}         
