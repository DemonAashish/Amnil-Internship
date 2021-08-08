//Declaring details and salary of  a person
const details =[
    {fullName:'John Doe', grossSalary:'9500'},
    {fullName:'Jane Doe', grossSalary:'16500'},
    {fullName:'Jim Doe', grossSalary:'24999'},
    {fullName:'Josh Doe', grossSalary:'37000'}
];
//Tax Slabs
const taxSlabs = [
    { gt: 0, lte: 10000, tax: 2},
    { gt: 10000, lte: 20000, tax: 4},
    { gt: 20000, lte: 30000, tax: 7},
    { gt: 30000, lte: 9999999999, tax: 10},
];
let netSalary=[];
const grossSalary=details.grossSalary;
for(i=0;i<details.length;i++){
     const grossSalary=details[i].grossSalary;
     for(j=0;j<taxSlabs.length;j++){
        switch( taxSlabs[j]){
        case taxSlabs[0]:
            netSalary=grossSalary-grossSalary*0.02;
            break;
        case taxSlabs[1]:
            netSalary=(10000-10000*0.02)-(grossSalary-10000)*0.04+(grossSalary-10000);
            break;
        case  taxSlabs[2]:
            netSalary=(10000-10000*0.02)+(20000-10000)-(20000-10000)*0.04+(grossSalary-20000)-(grossSalary-20000)*0.07;
            break;
        default: 
            netSalary=   (10000-10000*0.02)+(20000-10000)-(20000-10000)*0.04+10000-1000*0.07+ +(grossSalary-30000)-(grossSalary-30000)*0.1;
            break;
}}
 console.log("Name: "+details[i].fullName+" Net Salary: "+netSalary);
}

