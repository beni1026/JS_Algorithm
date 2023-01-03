// 하나의 반복문 안에서 k에 따라 분기를 처리하는 문제였다.
function solution(k, score) {
  let answer = [];
  let honer = [];
  for (let i = 0; i < score.length; i++) {
    honer.push(score[i]);
    honer.sort((a, b) => b - a);
    if (i < k) {
      answer.push(honer[i]);
    } else {
      answer.push(honer[k - 1]);
    }
  }
  return answer;
}
