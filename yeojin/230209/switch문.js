/* let food = "melon"; // 답은 멜론으로 정해져있음
switch (
  food // 푸드라는 바구니에
) {
  case "melon": // 멜론이라는 물건을 담았다
    console.log("fruit"); // 멜론이 입력되면 fruit라고 출력
    break;
  case "apple":
    console.log("fruit");
    break;
  case "banana":
    console.log("fruit");
    break;
  case "carrot":
    console.log("vegetable");
    break;
  default:
    console.log("It's not fruits and vegetables.");
    break;
} */

let score = 80;
switch (score) {
  case 90:
  case 91:
  case 92:
  case 93:
  case 94:
  case 95:
  case 96:
  case 97:
  case 98:
  case 99:
    console.log("A++ 학점");
    break;
  default:
    console.log("A++ 학점이 아닙니다");
    break;
}
