const state = {
    user: 'O',
    boxes: [],
};

const boxes = document.querySelectorAll('.box'); // box dom node array

state.boxes = [...boxes].map(function(box, index){
    return box.getAttribute('data');
}); 
// save state boxes array;
// 쿼리 셀렉터 올은 반환값이 NodeList임
// NodeList는 Array 객체가 아님
// 따라서 위에처럼 변환해줘야 map 메서드를 쓸 수 있음
function changeStateBoxes(){
    state.boxes = [...boxes].map(function(box, index) {
      return box.getAttribute("data");
    }); 
}
function clickBox() {
    if(this.classList.contains('active')){
        return;
    }
    console.log(this);
    this.classList.add("active"); // add class list
    this.setAttribute('data', state.user); 
    this.textContent = state.user; // add text 
    toggleUser(); // user toggle
    changeStateBoxes();
    checkWinCondition(); // check winner
    console.log(state.boxes);
};

for(let i=0; i<boxes.length; i++){
    boxes[i].setAttribute("data", null);
    boxes[i].addEventListener('click', clickBox);
};

const toggleUser = function(){
    state.user === 'O' ? state.user = 'X' : state.user = 'O';
}
const checkWinCondition = function(){
    console.log('check win condition');
}
console.log(state);