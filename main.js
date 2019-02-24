const tableRow = document.getElementsByTagName('tr');
const firstSaldo = document.querySelector('.first-saldo');
const secondSaldo = document.querySelector('.second-saldo');
const thirdSaldo = document.querySelector('.third-saldo');

var possibleSecondSum = 0;
var possibleThirdSum = 0;
var firstRateSum = 0;
var secondRateSum = 0;
var thirdRateSum = 0;

for(let i = 0; tableRow.length > i; i++){
    if(tableRow[i].querySelector('.placeno') != null){
        firstRateSum += Number(tableRow[i].querySelector('.placeno').innerText);
    }
    
}

for(let i = 0; tableRow.length > i; i++){
    
    if(tableRow[i].querySelectorAll('.placeno').length == 1){
        possibleSecondSum += Number(tableRow[i].querySelector('.neplaceno').innerText);
        
    }
    
    if(tableRow[i].querySelectorAll('.placeno').length > 1){
        secondRateSum += Number(tableRow[i].querySelectorAll('.placeno')[1].innerText);
        
    }
    
    if(tableRow[i].querySelectorAll('.placeno').length == 3){
        thirdRateSum += Number(tableRow[i].querySelectorAll('.placeno')[2].innerText);
        
    }
    
    if(tableRow[i].querySelectorAll('.placeno').length > 1 && tableRow[i].querySelectorAll('.placeno').length < 3){
        possibleThirdSum += Number(tableRow[i].querySelector('.neplaceno').innerText);
    }
}



firstSaldo.innerHTML = firstRateSum;
secondSaldo.innerHTML = secondRateSum + "<br>" + "(" + possibleSecondSum + ")";
thirdSaldo.innerHTML = thirdRateSum + "<br>" + "(" + possibleThirdSum + ")";