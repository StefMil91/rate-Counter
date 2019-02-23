const tableRow = document.getElementsByTagName('tr');
const firstSaldo = document.querySelector('.first-saldo');
const secondSaldo = document.querySelector('.second-saldo');
const thirdSaldo = document.querySelector('.third-saldo');

var possibleSecondRate = 0;
var possibleThirdRate = 0;
var firstRateCounter = 0;
var secondRateCounter = 0;
var thirdRateCounter = 0;

for(let i = 0; tableRow.length > i; i++){
    if(tableRow[i].querySelector('.placeno') != null){
        firstRateCounter++;
    }
    
}

for(let i = 0; tableRow.length > i; i++){
    if(tableRow[i].querySelectorAll('.placeno').length == 1){
        possibleSecondRate++;
    }
}

for(let i = 0; tableRow.length > i; i++){
    if(tableRow[i].querySelectorAll('.placeno').length == 2){
        secondRateCounter++;
    }
}

for(let i = 0; tableRow.length > i; i++){
    if(tableRow[i].querySelectorAll('.placeno').length == 3){
        thirdRateCounter++;
    }
}

for(let i = 0; tableRow.length > i; i++){
    if(tableRow[i].querySelectorAll('.placeno').length > 1 && tableRow[i].querySelectorAll('.placeno').length < 3){
        possibleThirdRate++;
    }
}

firstSaldo.innerHTML = firstRateCounter;
secondSaldo.innerHTML = secondRateCounter + "<br>" + "(" + possibleSecondRate + ")";
thirdSaldo.innerHTML = thirdRateCounter+ "<br>" + "(" + possibleThirdRate + ")";