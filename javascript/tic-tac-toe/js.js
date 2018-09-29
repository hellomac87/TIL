const state = {
    user: 'O',
    boxes: [],
};

const boxes = document.querySelectorAll('.box'); // box dom node array

state.boxes = boxes; // save state boxes array;

function clickBox() {
    if(this.classList.contains('active')){
        return;
    }
    console.log(this);
    this.classList.add("active"); // add class list
    this.setAttribute('data', state.user); 
    this.textContent = state.user; // add text 
    toggleUser(); // user toggle
    checkWinCondition(); // check winner
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