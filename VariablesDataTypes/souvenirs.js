const souvenirs = [];

while(flag){
    const nameSouvenir = prompt('Enter souvenir name: ');
    const priceSouvenir = Number(prompt('Enter souvenir price: '));
    const isAvailable = confirm('Is available? ');

    if(/^[a-zA-Z]+$/.test(nameSouvenir.trim()) && !isNaN(priceSouvenir) && isAvailable ===true){
        const souvenir = {
            name: nameSouvenir,
            price: priceSouvenir,
            available: isAvailable
        };
        souvenirs.push(souvenir);
        if(!confirm('Do you want to add other souvenir ? ')){
            console.log(souvenirs);
            flag = false;
        }
    }else{
        alert('Validate Data');
    }
}