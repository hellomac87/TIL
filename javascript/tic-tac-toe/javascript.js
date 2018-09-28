// 필요한 함수, 변수, 조건 생각해보기

// 변수
const boxes = document.querySelectorAll('.box');
console.log(boxes);
function setBoxAttr() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].setAttribute("data", i + 1);
  }
}
setBoxAttr();
// 1. 진행 상태(?)를 저장할 배열(?) 객체(?)
// 2. 플레이어 순서(?)
// 3. 
const state = {
  start: false,
  user: "O",
  table: [
    [
		boxes[0].getAttribute("data"),
		boxes[1].getAttribute("data"),
		boxes[2].getAttribute("data")
    ],
    [
		boxes[3].getAttribute("data"),
		boxes[4].getAttribute("data"),
		boxes[5].getAttribute("data")
    ],
	[
		boxes[6].getAttribute("data"),
		boxes[7].getAttribute("data"),
		boxes[8].getAttribute("data")
	]
  ]
};
// 조건
// 1. 게임 승리 조건
//  1) ??
// 가로
//  table[0][0] === table[0][1] && table[0][0] === table[0][2]
//  table[1][0] === table[1][1] && table[1][0] === table[1][2]
//  table[2][0] === table[2][1] && table[2][0] === table[2][2]
// 세로
//  table[0][0] === table[1][0] && table[0][0] === table[2][0]
//  table[0][1] === table[1][1] && table[0][1] === table[2][1]
//  table[0][2] === table[1][2] && table[0][2] === table[2][2]
// 대각선
//  table[0][0] === table[1][1] && table[0][0] === table[2][2]
//  table[0][2] === table[1][1] && table[0][2] === table[2][0]

function winState(){
	for (let i = 0; i < 3; i++) {
		// 가로 승리조건
		if (state.table[i][0] === state.table[i][1] && state.table[i][0] === state.table[i][2]) {
			alert('가로 승리조건');
			break;
		}
		// 세로 승리조건
		if (state.table[0][i] === state.table[1][i] && state.table[0][i] === state.table[2][i]) {
			alert('세로 승리조건');
			break;
		}
		// 대각선 승리조건
		if (state.table[0][0] === state.table[1][1] && state.table[0][0] === state.table[2][2]) {
			alert('대각선 승리조건');
			break;
		}
		if (state.table[0][2] === state.table[1][1] && state.table[0][2] === state.table[2][0]) {
			alert('대각선 승리조건');
			break;
		}
		alert('무승부');
		break;
	}
}


// 2. 게임 무승부 조건
//	1) ??

// 함수
function startGame(){
	// 문서 로딩 후 게임이 사작될때 실행되어야 할 함수
	// 초기 상태값을 설정
	
	state.start = true; // 게임 시작
	// 게임 시작을 알림
	// alert('게임이 시작되었습니다.');
}
function toggleUser(){
	if (state.user === 'O') {
		state.user = "X";
	} else {
		state.user = "O";
	}
	console.log('현재 유저는 : ', state.user);
}
function printUserOnBox(){

}

function clickBox(){
	// 박스 클릭시 실행되어야 할 함수

	// 클릭 될 떄마다 유저의 상태가 바뀌어야 함
	toggleUser();
	winState();
}
function endGame(){
	// 게임이 끝났을 때 실행되어야 할 함수
	// 승패를 알려준다.
}
startGame();
console.log(state);
