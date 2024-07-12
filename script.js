const history={};
let count = 1 ;

function refresh(){
    let summary = document.querySelectorAll("#summaryDetail>th"); 
    summary.forEach(element => {
        element.innerText = 0;
    });   
}

function computerMove(){
    const obj = ['rock','paper','scissor'];
    const objInd = Math.floor(Math.random()*obj.length);
    return obj[objInd];
}

function mySide(id){
    
    updateSummaryTable('gamePlayed')
    let result;
    let com_choise = computerMove();

    if(com_choise == id){
        result = 'Tie';
        updateSummaryTable('gameTies')
    }

    else if((com_choise == 'rock' && id == 'scissor') ||
    (com_choise == 'paper' && id == 'rock') ||
    (com_choise == 'scissor' && id == 'paper')){
        result = 'Losse';
        updateSummaryTable('gameLosses');
    }

    else{
        result = 'win'
        updateSummaryTable('gameWin');
    }
    maintainHistory(id,com_choise,result);
}

function maintainHistory(id,com_choise,result){
    const historyArray=[id, com_choise, result];
    const tr = document.createElement('tr');

    const tag = document.createElement('td');
        tag.innerText =  tag.innerText + count
        tr.appendChild(tag);

    historyArray.forEach(ele=>{
        const tag = document.createElement('td');
        tag.innerText = ele;
        tr.appendChild(tag);
        tr.style.background = 'wheat' ;
    });

    const row = document.getElementById('history');
    row.appendChild(tr);
    
    count++;
}

function updateSummaryTable(res){
    let gameplayed = document.getElementById(res);
    let value = Number(gameplayed.innerText)+1;
    gameplayed.innerText = value;
}