//Declaring values
const person = [    {firstName: 'Aayush', lastName: 'Shrestha', dob: '1986/09/23' },
                    { firstName: 'Amresh', lastName: 'Thakur', dob: '1997/03/11' },
                    { firstName: 'Bibin ', lastName: 'Maharjan', dob: '1996/02/02' },
                    { firstName: 'Kiran ', lastName: 'Ghimire ', dob: '2001/11/11' },
                    { firstName: 'Kushal', lastName: 'Bajracharya ', dob: '1998/10/26' },
                    { firstName: 'Aashish', lastName: 'Upreti', dob: '1996/10/31' },
                    { firstName: 'Nitesh', lastName: 'Upadhyaya', dob: '1997/11/02' }
]; 
//calculating year
function today_date(dob){
    let time_ms=Date.now()-dob.getTime();
    let year=new Date(time_ms);
    return Math.abs(year.getUTCFullYear()-1970);
}
//calculating day
function calculate_day(dob){
    let diff_month= Date.now()-dob.getTime();
    let month_date= new Date(diff_month);
    return Math.abs(month_date.getUTCMonth()*30+month_date.getUTCDate());
}
//display
for(i=0; i<person.length; i++){
    console.log(person[i].firstName +" "+person[i].lastName);
    console.log("Your age is "+today_date(new Date(person[i].dob))+" year");
    console.log(" "+ calculate_day(new Date(person[i].dob))+" Day" )
}         
