// common 공통된

/*
    공통함수들을 모아놓음
*/

// dw함수(매개변수)
// 매개변수 출력
// dw도큐먼트 라이트 함수를 줄인거임
// ex) documet.write"고양이""
function dw(str){    // var str; var str = "고양이";
    // var str = "유저:가위"; // << 삽입
    // 자바 스크립트 내장 함수 (매개함수);
    document.write(str);
}
// dw("고양이") 1.
// str박스 함수에 들어간다 2.
// 고양이가 호출이 된다 3.


// br함수 br실행
// 도큐먼트 br은 너무 크기에 br을 넣음
function br(){
    document.write("<br>");
}

// hr함수 hr 실행
// 밑줄긋는 행위도 hr로 만듬
function hr(){
    document.write("<hr>");
}
