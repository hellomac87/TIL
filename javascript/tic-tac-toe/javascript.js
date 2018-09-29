// 상수, 변수

const boxes = document.querySelectorAll(".box");

// 각 box에 data attr 추가
for (var i = 0; i < boxes.length; i++) {
	boxes[i].setAttribute("data", i + 1);
}

const state = {
	start: false,
	user: "O",
	table: [
		[
			NaN,
			NaN,
			NaN
		],
		[
			NaN,
			NaN,
			NaN
		],
		[
			NaN,
			NaN,
			NaN
		]
	]
};


// 조건
// 1. 게임 승리 조건

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

function checkWinCondition(){
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
		// 나머지 무승부
		alert('무승부');
		break;
	}
}

// 함수
function startGame() { // 문서 로딩 후 게임이 사작될때 실행되어야 할 함수
	
	state.start = true; // 게임 사작 상태 변경

	// 3. 게임 시작을 알림
	// alert('게임이 시작되었습니다.');
}

function toggleUser(){ // 유저 상태를 토글하는 함수 (박스 클릭시 실행되어야 함)
	if (state.user === 'O') {
		state.user = "X";
	} else {
		state.user = "O";
	}
	console.log('현재 유저는 : ', state.user);
}

function changeBoxState(e){

}

function clickBox(){
	// 박스 클릭시 실행되어야 할 함수
	changeBoxState();
	// 클릭 될 떄마다 유저의 상태가 바뀌어야 함
	toggleUser();
	// 클릭시마다 승리 조건 체크
	checkWinCondition();
	console.log(this);
}
function endGame(){
	// 게임이 끝났을 때 실행되어야 할 함수
	// 승패를 알려준다.
}

for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", clickBox);
}

startGame();
console.log(state);
