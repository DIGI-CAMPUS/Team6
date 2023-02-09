// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
/* var x = 15;
if (10 <= x <= 20) {
  console.log(x);
} */

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
/* for (var i = 0; i < 10; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
} */

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
/* var result = "";
for (var i = 0; i < 10; i++) {
  if (i % 2 == 1) continue;
  result += i;
}
console.log(result); */

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
/* for (var i = 9; i >= 0; i--) {
  if (i % 2 == 0) continue;
  console.log(i);
} */

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
/* var i = 0;
while (i < 10) {
  if (i % 2 == 0) console.log(i);
  i++;
} */

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
/* var i = 9;
while (i >= 0) {
  if (i % 2 == 1) console.log(i);
  i--;
} */

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
/* let sum = 0;

for (var i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum); */

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
/* let sum = 0;

for (var i = 1; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) continue;
  sum += i;
}
console.log(sum); */

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let sum = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    sum += i;
  }
}
console.log(sum);
