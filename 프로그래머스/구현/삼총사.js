// 단순하게 풀면 삼중 반복문이지만 조합형태로 풀 수 있다.
function solution(number) {
  let answer = 0;
  const len = number.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len && j !== i; j++) {
      for (let k = 0; k < len && k !== i && k !== j; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }
  return answer;
}

const combination = (current, start) => {
  if (current.length === 3) {
    result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
    return;
  }

  for (let i = start; i < number.length; i++) {
    combination([...current, number[i]], i + 1);
  }
};
combination([], 0);
