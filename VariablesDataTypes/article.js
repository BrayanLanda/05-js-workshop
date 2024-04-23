'use strict'
//import {} from '../VariablesDataTypes/souvenirs'; 
// alert('Hello people')
let flag = true;

while(flag){
    const budget = Number(prompt('Enter your budget: '));
    const costs = Number(prompt('Enter your daily expenses: '));
    const umbral = Number(prompt('Enter an fixed umbral for your costs: '));
    const extraMoney = budget - costs; 
    console.log(extraMoney);
    if(!isNaN(budget) && !isNaN(costs) && !isNaN(umbral)){
        if (budget < costs){
            alert('You dont money :C');
            flag = false;
        }
        else if(umbral < extraMoney){
            alert('puedes gastar');
            if(!confirm('quiere compar algo? ')){
                alert('buen, gasta');
                flag = false;
            }else{
                
            }
        }else{
            alert('auque tienes plata es mejor que no gastes');
        }
    }else{
        alert('Date invalid');
    }
}

