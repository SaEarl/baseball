// 랜덤 수 3개 뽑기 (문제)
document.write("Dsf")
let rdArray = []

// 다 채워질때까지 반복

// 랜덤수가 채워질 배열의 길이가 3보다 작을 동안
while(rdArray.length < 3){
  // 1~9 수 한 개 뽑기
  let num = Math.floor( (Math.random() * 9) + 1)

  // rdArray에서 num의 위치가 없다면
  if (rdArray.indexOf(num) == -1){
    rdArray.push(num)
  
  }

}

document.write("<br>")

//랜덤으로 뽑은 배열을 문자열로 만들기!
let com = rdArray.join("")
document.write("컴퓨터가 만든 문제 : ", com)

// 정답확인

let btn = document.querySelector("button")

let appendTemplete = "<br> <input type='number' min='1' max='9' class = 'target'> <input type='number' min='1' max='9' class = 'target'>  <input type='number' min='1' max='9' class = 'target'>"

//inputs[0].style.backgroundColor = "red"

// 버튼을 누르면


btn.addEventListener("click", function(){

  let inputs = document.querySelectorAll(".target")
  // input에 적힌 숫자 한개씩 확인
  for (let i = 0; i < inputs.length; i++){

    // 스트라이크?
    if (inputs[i].value == rdArray[i]){
      inputs[i].style.backgroundColor = "green"

    // 볼??
    }else if (rdArray.indexOf( parseInt(inputs[i].value)) != -1){
      inputs[i].style.backgroundColor = "yellow"

    // 아웃??
    }else{
      inputs[i].style.backgroundColor = "gray"
    }

    inputs[i].classList.remove("target")
  }


  
  // let new_input = document.createElement("input")

  // document.querySelector("#container").appendChild(new_input)

  document.querySelector("#container").insertAdjacentHTML("beforeend", appendTemplete)

})




// 이중for문
// let rdArray2 = new Array(3)

// for (let i = 0; i < rdArray2.length; i++){
//   rdArray2[i] = Math.floor( (Math.random() * 3) + 1)

//   for (let j = 0; j < i; j++){
//     if (rdArray2[j] == rdArray2[i]){
//       i--
//     }
//   }

// }

// document.write(rdArray2)

// document.write("<br>")


// // 무작정... 할래요...
// let rdArray3 = new Array(3)  

// while(rdArray3[0] == rdArray3[1] && 
//   rdArray3[1] == rdArray3[2] &&
//   rdArray3[2] == rdArray3[0]){
//     rdArray3[0] = Math.floor((Math.random() * 9) +1)    
    
//     rdArray3[1] = Math.floor((Math.random() * 9) +1)    
    
//     rdArray3[2] = Math.floor((Math.random() * 9) +1)    
//   }

//   document.write(rdArray3)

// let array = ["A", "B", "C", "D", "E"] 

// document.write("A의 위치 : ", array.indexOf("A"))
// document.write("<br>")

// document.write("E의 위치 : ", array.indexOf("E"))
// document.write("<br>")

// document.write("Z의 위치 : ", array.indexOf("Z"))
// document.write("<br>")

