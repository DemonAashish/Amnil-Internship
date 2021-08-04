const details =[
    {fullName:'John Doe', grossSalary:'9500'},
    {fullName:'Jane Doe', grossSalary:'16500'},
    {fullName:'Jim Doe', grossSalary:'24999'},
    {fullName:'Josh Doe', grossSalary:'37000'}
];
let netSalary=[];
for(i=0;i<details.length;i++){
const grossSalary=details[i].grossSalary;
if (grossSalary<=10000){
netSalary=(grossSalary-0.02*grossSalary);
}   else if(grossSalary<=20000 && grossSalary>=10000){
netSalary=(10000-10000*0.02)-(grossSalary-10000)*0.04+(grossSalary-10000);
}   else if(grossSalary>20000 &&grossSalary<=30000){
netSalary=(10000-10000*0.02)+(20000-10000)-(20000-10000)*0.04+(grossSalary-20000)-(grossSalary-20000)*0.07;
}else if(grossSalary>30000){
netSalary=(10000-10000*0.02)+(20000-10000)-(20000-10000)*0.04+(30000-20000)-10000*0.7+(grossSalary-30000)-(grossSalary-30000)*0.1;
}

console.log("Name: "+details[i].fullName+" Net Salary: "+netSalary);
}
