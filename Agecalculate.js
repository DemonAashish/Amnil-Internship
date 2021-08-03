//Declaring values
let name=["Aashish Upreti","Nitesh Upadhyaya", "Kiran Ghimire","Bibin Maharjan","Kushal Bajracharya", "Amresh Thakur"];
let dates=["1996,11,31","1995,11,3","2001,11,11","1996,02,02","1998,10,26","1997,03,11"]
//Age calculator
function calculate_age(dob){
    let diff_month= Date.now()-dob.getTime();
    let age_date=new Date(diff_month);
    return Math.abs(age_date.getUTCFullYear()-1970);
}
//Displaying name and age
for(i=0; i<name.length; i++){
    console.log("Full Name: " + name[i]);
    console.log("Age is: "+ calculate_age(new Date(dates[i])));
}