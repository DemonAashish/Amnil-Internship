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
netSalaryCalculator=(grossSalary)=>{
    let remainderGrossSalary=grossSalary;
    let totalTaxAmount=0;
    taxSlabs.forEach(slab =>{
        const range=slab.lte-slab.gt;
        let taxableAmt=0;
        let taxAmount=0;
        if(remainderGrossSalary<=range){
            taxableAmt=remainderGrossSalary;
            remainderGrossSalary=0;
        } 
        else{
            taxableAmt=range;
            remainderGrossSalary=remainderGrossSalary-range;
        }
        taxAmount=taxableAmt*(slab.tax/100);
        totalTaxAmount =taxAmount+totalTaxAmount;
    })
    return Math.ceil(totalTaxAmount);
}
details.map(m=>{
    console.log(`${m.fullName} ${m.grossSalary-netSalaryCalculator(m.grossSalary)}`)
})


