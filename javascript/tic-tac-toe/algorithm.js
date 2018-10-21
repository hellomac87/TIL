// Tic-Tac-Toe 게임은 3*3 게임판 위에서
// 먼저 "가로줄 또는 세로줄 또는 대각선"을 채우는 플레이어가 이기는 게임입니다.
// 단순화된 오목이라고 생각하시면 쉽습니다.
// Tic-Tac-Toe 게임의 승자를 판별하는 함수를 만들어주세요.

// 조건: 플레이어 1이 이겼을 경우 1, 플레이어 2가 이겼을 경우 2,
//       이도저도 아닐 경우 0을 반환

// 과제를 제출하실 때는

// 1. 먼저 **우측 상단의 Submit 버튼**을 눌러 제출해주세요.
// 2. 그 후 **이 페이지의 URL**을 복사해서 문제의 입력필드에 붙여넣어 주세요.

// 함수 이름을 그대로 사용해주셔야 숨겨진 테스트코드가 제대로 동작합니다.
function ticTacToe(arr) {
    /// 가로
    for (let i = 0; i < arr.length; i++) {
        let memory = [];
        for (let j = 0; j < arr.length; j++) {
            memory.push(arr[i][j]);
        }
        if (memory.every(item => item === 1)) {
            return 1;
        }
        if (memory.every(item => item === 2)) {
            return 2;
        }
    }

    /// 세로
    for (let i = 0; i < arr.length; i++) {
        let memory = [];
        for (let j = 0; j < arr.length; j++) {
            memory.push(arr[j][i]);
        }
        if (memory.every(item => item === 1)) {
            return 1;
        }
        if (memory.every(item => item === 2)) {
            return 2;
        }

    }

    /// 대각선
    {
        let memory = [];
        for (let i = 0; i < arr.length; i++) {
            memory.push(arr[i][2 - i]);
        }
        if (memory.every(item => item === 1)) {
            return 1;
        }
        if (memory.every(item => item === 2)) {
            return 2;
        }
    }
    {
        let memory = [];
        for (let i = 0; i < arr.length; i++) {
            memory.push(arr[i][i]);
        }
        if (memory.every(item => item === 1)) {
            return 1;
        }
        if (memory.every(item => item === 2)) {
            return 2;
        }
    }
    return 0;
}

ticTacToe([
    [1, 0, 1],
    [2, 0, 1],
    [1, 0, 2]
]) // 1
