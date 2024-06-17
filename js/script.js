document.getElementById('startGameForm').addEventListener('submit', function(event) { 
    event.preventDefault(); 
    const name = document.getElementById('typingName').value; 
    document.getElementById('popup').style.display = 'none'; 
    document.getElementById('backgroundBox').style.display = 'none'; 
    localStorage.setItem('playerName', name); 
    document.getElementById('playerName').textContent = name; 
});

let mySelect = 0;
let pS = 0;
let cS = 0;

document.getElementById('computerScore').innerText = cS;
document.getElementById('playerScore').innerText = pS;

//가위바위보 연산
function RSP() {
    const computerimg = document.getElementById("computerSelect");
    const pcSelect = getrandom();

    switch(pcSelect) {
        case 0: // 가위
            computerimg.src = "./img/scissorsImg.png";
            break;
        case 1: // 바위
            computerimg.src = "./img/rockImg.png";
            break;
        case 2: // 보
            computerimg.src = "./img/paperImg.png";
            break;
        };

    checkMatchResult(mySelect, pcSelect);
}

function checkMatchResult(mySelect, pcSelect) {
    let result = mySelect - pcSelect;

    if (result === 0) {                 
        alert("무승부입니다.");          // 무승부인 경우
    } 
    else if (result === -2 || result === 1) {       // 사용자가 승리한 경우
        pS++;
        document.getElementById('playerScore').innerText = pS;
        alert("승리했습니다.")
    } 
    else if (result === -1 || result === 2) {       // 사용자가 패배한 경우
        cS++;
        document.getElementById('computerScore').innerText = cS;
        alert("패배했습니다.")
    }
}

//유저 선택지
document.getElementById('scissors').addEventListener('click', function() {
    mySelect = 0;
    document.getElementById('playerSelect').src = "./img/scissorsImg.png";
    RSP();
});

document.getElementById('rock').addEventListener('click', function() {
    mySelect = 1;
    document.getElementById('playerSelect').src = "./img/rockImg.png";
    RSP();
});

document.getElementById('paper').addEventListener('click', function() {
    mySelect = 2;
    document.getElementById('playerSelect').src = "./img/paperImg.png";
    RSP();
});

//랜덤값
function getrandom() {
    return Math.floor(Math.random() * 3);
}

const computerimg = document.getElementById("computerSelect");

const reset = document.getElementById("resetBtn");
const Result = document.getElementById("ResultBtn");

reset.addEventListener("click", function(){
    let ResetCheck = confirm("다시 시작하시겠습니까?");

    if(ResetCheck == true){
        resetGame();
    } 
});

Result.addEventListener("click",function(){
    let ResultCheck = confirm("결과를 확인하시겠습니까?");

    if(ResultCheck == true){
        if(pS > cS){
            alert("게임 승리\n" + "플레이어 : " + pS + " 컴퓨터 : " + cS);
            location.reload();
        }
        else if (pS < cS){
            alert("게임 패배\n" + "플레이어 : " + pS + " 컴퓨터 : " + cS);
            location.reload();
        }
        else
            alert("무승부\n" + "플레이어 : " + pS + " 컴퓨터 : " + cS);   
            location.reload();
    }
});




function resetGame() {
    pS = 0;
    cS = 0;
    document.getElementById('playerScore').innerText = pS;
    document.getElementById('computerScore').innerText = cS;
}