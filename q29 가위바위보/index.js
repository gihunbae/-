/**********************************************************************
가위 바위 보 게임 (v0.1.0)

[구현 기능]
- 가위바위보 기능
**********************************************************************/
// Rock Paper Scissors

// var userRpc = prompt("가위,바위,보 중에 하나를 입력하세요:"); 입력창
var userRpc = prompt("가위,바위,보 중에 하나를 입력하세요:"); // 유저 입력창 생성
// var userRpc = prompt("가위,바위,보 중에 하나를 입력하세요:");

// var comRpcNumber = Math.floor(Math.random()*3+1); // 1~3 랜덤값 뽑아서 저장
var comRpcNumber = Math.floor(Math.random()*3+1);   // 1~3 랜덤값 뽑아서 저장
// var comRpcNumber = Math.floor(Math.random()*3+1); 


var comRpcStr = ""; // 컴퓨터가 낸 가위,바위,보 중 하나 텍스트로 저장할 변수.
// var comRpcStr = ""; // 텍스트로 저장 변수

// if 조건문 (컴퓨터 랜덤값 == 1이다){ 내용 컴퓨터1은 "가위"; }
// if(comRpcNumber == 1){ comRpcStr = "가위"; }
if(comRpcNumber == 1){
    comRpcStr = "가위";
}

//  if 조건문 (컴퓨터 랜덤값이 == 2이다){내용 컴퓨터2는 "바위";}
// if(comRpcNumber == 2){comRpcStr = "바위";}
if(comRpcNumber == 2){
    comRpcStr = "바위";
}

// if 조건문(컴퓨터 랜덤값이 == 3이다){내용 컴퓨터 3은 "보";}
// if(comRpcNumber == 3){comRpcStr = "보";}
if(comRpcNumber == 3){
    comRpcStr = "보";
}
// 컴퓨터 랜덤 숫자 값을 가위 바위보 문자열로 설정 완료

// dw 유저:유저가 낸 값
dw("유저:"+userRpc);
// br common에서 설정한 엔터 값
br();
// hr common에서 설정한 엔터 값
hr();
// dw(매개변수 컴:+컴퓨터가 낸 랜덤값);
dw("컴:"+comRpcStr);
br();
hr();

// 선언문 이김비김짐 = 문자열;
// var winDrawLose = "";
var winDrawLose = "";

// 스위치 조건문 (유저가 낸 값){
// switch(userRpc){
switch(userRpc){

    // 유저가 가위라면
    // case "가위":
    case "가위":
        // 스위치 (컴퓨터가 낸 값)
        // switch(comRpcStr){
            // if else도 사용가능하나 숫자가 3이상이면 스위치가 편함
        switch(comRpcStr){

            // 컴퓨터가 가위일 경우: 
                // 선언문 = 비김;
                // 위가 실행될 경우 빠져나오는 브레이크 아닐 경우 다음 값을 실행한다.
            // case "가위":
                // winDrawLose = "DRAW"
                // break;
            case "가위":
                winDrawLose = "비김";
                break;

            // 컴퓨터가 바위일 경우:
                // 선언문(이김비김짐) = 컴퓨터에게 짐 패배;
                // break;
            // case "바위":
                // winDrawLose = "패배";
                // break;
            case "바위":
                winDrawLose = "졌음";
                break;
            // 컴퓨터가 보 일 경우:
                // 선언문 = "이김";
                // 브레이크;
            // case "보":
                // winDrawLose = "이김";
                // break;
            case "보":
                winDrawLose = "이김";
                break;
                // }
        }
        // break;
        break;

    // case "바위":
    case "바위":
        // 
        switch(comRpcStr){
            case "가위":
                winDrawLose = "이김";
                break;
            case "바위":
                winDrawLose = "비김";
                break;
            case "보":
                winDrawLose = "졌음";
                break;
        }        
        break;
    case "보":
        switch(comRpcStr){
            case "가위":
                winDrawLose = "졌음";
                break;
            case "바위":
                winDrawLose = "이김";
                break;
            case "보":
                winDrawLose = "비김";
                break;
        }        
        break;
}

// DW(매개변수); 출력
dw(winDrawLose);