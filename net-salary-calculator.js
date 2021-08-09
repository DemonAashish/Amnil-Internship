//Declaring details and salary of  a person
const details =[
    {fullName:'John Doe', grossSalary:'9500'},
    {fullName:'Jane Doe', grossSalary:'16500'},
    {fullName:'Jim Doe', grossSalary:'24999'},
    {fullName:'Josh Doe', grossSalary:'37000'},
    {fullName:'Josh Doe', grossSalary:'32424'}
];
//Tax Slabs
const taxSlabs = [
    { gt: 0, lte: 10000, tax: 2},
    { gt: 10000, lte: 20000, tax: 4},
    { gt: 20000, lte: 30000, tax: 7},
    { gt: 30000, lte: 9999999999, tax: 10},
];
let netSalary=[];
let gt=[];
let lte=[];
let tax=[];
const grossSalary=details.grossSalary;
for (j=0;j<taxSlabs.length;j++){
    gt[j]=taxSlabs[j].gt;
    lte[j]=taxSlabs[j].lte;
    tax[j]=taxSlabs[j].tax; 
}
for(i=0;i<details.length;i++){
const grossSalary=details[i].grossSalary; 

        if (taxSlabs[0]){
            netSalary=grossSalary-grossSalary*tax[0]/100;
        }
        else if(taxSlabs[1]){
            netSalary=(lte[0]-gt[0])-(lte[0]-gt[0])*tax[0]/100-(grossSalary-lte)*tax/100+(grossSalary-lte);
        }
        else if(taxSlabs[2]){
            netSalary=(lte[0]-gt[0])-(lte[0]-gt[0])*tax[0]/100+(lte[1]-gt[1])-(lte[1]-gt[1])*tax[1]/100+(grossSalary-lte)-(grossSalary-lte)*0.07;
        }
        else {
            netSalary=(lte[0]-gt[0])-(lte[0]-gt[0])*tax[0]/100+(lte[1]-gt[1])-(lte[1]-gt[1])*tax[1]/100+(lte[2]-gt[2])-(lte[2]-gt[2])*tax[2]/100 +(grossSalary-lte)-(grossSalary-lte)*0.1;
        }
    
        console.log("Name: "+details[i].fullName+" Net Salary: "+netSalary);
}
