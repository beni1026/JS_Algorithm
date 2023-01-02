// 앞으로 넣다 뺏다하는 구조를 보고 덱을 생각했어야 했다.
function solution(food) {
  let answer = [0];
  for (let i = food.length - 1; i > 0; i--) {
    const cnt = parseInt(food[i] / 2);
    for (let j = 0; j < cnt; j++) {
      answer.push('' + i);
      answer.unshift('' + i);
    }
  }
  return answer.join('');
}

// 이 방법 말고도 repeat 함수 이용 가능하다.
// 아래 코드가 시간 복잡도가 더 유리하다.
// reverse함수가 원본을 바꿔서 사용을 못할 줄 알았는데 구조분해할당으로 복사할 수 있다는 사실
for (let i = 1; i < food.length; i++) {
  res += String(i).repeat(Math.floor(food[i] / 2));
}

return res + '0' + [...res].reverse().join('');
