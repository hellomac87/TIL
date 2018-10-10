const game = new TicTacToe();

const initBtn = document.getElementById("init"); // 시작버튼

initBtn.addEventListener("click", function() {
    game.init();
});
