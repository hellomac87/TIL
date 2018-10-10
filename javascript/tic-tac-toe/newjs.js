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

    this.boxes = document.querySelectorAll('box');
    console.log(this.boxes);    
}
TicTacToe.prototype.init = function(){
    this.state = {
        user: 'O',
        boxes:[[0, 0, 0],[0, 0, 0],[0, 0, 0]]
    };
}
TicTacToe.prototype.toggleUser = function(){
    this.state.user === 'O' ? state.user = 'X' : state.user = 'O';
}
TicTacToe.prototype.bindDom = function(){
    
};
const game = new TicTacToe();

console.log(game.state);


const initBtn = document.getElementById("init");
initBtn.addEventListener("click", function () {
    game.init();
});