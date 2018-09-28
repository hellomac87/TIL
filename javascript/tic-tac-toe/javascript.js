const box = document.querySelectorAll(".box");

let toggleUser = true;

function user(toggle) {
  return toggle ? "O" : "X";
}

function clickBox() {
  	// active 클래스를 갖고 있다면 이벤트 ㄴㄴ
	if (this.classList.contains("active")) {
		return false;
	}

  	this.classList.add("active"); // 클래스 추가하기
	this.textContent += toggleUser ? "O" : "X"; // toggle 텍스츠 찍기
	  toggleUser = !toggleUser;
	  

	// 엘리먼트 모두가 class를 갖고 있다면 게임 종료
	
	// 연속되는 세 박스가 있으면 게임 종료
	
}

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", clickBox);
}
