// t의 부분 문자열이 p보다 큰 수인 걸 세는 문제
// 완전 탐색
// 10000-18 +1 = 9982
function solution(t, p) {
  let answer = 0;
  let len = p.length;
  for (let i = 0; i <= t.length - len; i++) {
    let num = t.substr(i, len);
    if (num <= p) answer++;
  }
  return answer;
}
