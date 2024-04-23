'use strict'

let flag = true;
while(flag){
    const travelDestination = prompt('Enter your destination: ');
    let daysTrip = Number(prompt('Enter travel days: '));
    let budget = Number(prompt('Enter travel budget: '));
    if(!isNaN(budget) && !isNaN(daysTrip)){
        if(confirm('Do you want to change something ?')){
            daysTrip = Number(prompt('Enter travel days: '));
            budget = Number(prompt('Enter travel budget: '));
            alert(`Your destination is ${travelDestination}, days to enjoy ${daysTrip} and your budget is ${budget}`);
            alert('Good Travel');
            flag = false;
        }else{
            alert(`Your destination is ${travelDestination}, days to enjoy ${daysTrip} and your budget is ${budget}`);
            alert('Good Travel');
            flag = false;
        }
    }else{
        alert('Verify data entered in days and expenses');
    }
}
// //Variables
// const destinationTravel = prompt('Enter travels destination: ');
// let daysTravel = prompt('How many days do you want to travel: ');
// let budget = prompt('What is your budget');
// let budgetDay = Math.trunc(budget / daysTravel);
// //let flag = 0;
// const dayExpense = 150000;

// if(dayExpense < budgetDay){
//     alert('Have a nice trip');
// }else{
//     alert('Your budget is bad');
// }

//Conditionales budget vs dayexpense
// while(flag === 0){
  
//     let daysTravel, budget;
    
//     daysTravel = prompt('How many days do you want to travel: ');
//     budget = prompt('What is your budget');
//     let budgetDay = Math.trunc(budget / daysTravel);
//     console.log(budgetDay);
//     console.log(budgetDay);  
//     if(dayExpense <= budgetDay){
//         alert('Have a nice trip');
//         flag = 1;
//     }else{
//         alert('Your budget is bad');
//     }
// }


//console.log(destinationTravel);
//console.log(daysTravel);
//console.log(budget);
