function TicTacToe(){
    this.state = {
        user: 'O',
        boxes:
            [
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
    };
}

TicTacToe.prototype.init = function(){
    // 게임 상태를 초기 상태로
    alert("게임을 시작합니다.");
    this.state = {
        user: 'O',
        boxes:[[0, 0, 0],[0, 0, 0],[0, 0, 0]]
    };
}

TicTacToe.prototype.toggleUser = function(){
    // 호출 할 때마다 유저 스테이트 O ore X 로 변환
    this.state.user === 'O' ? state.user = 'X' : state.user = 'O';
}
    