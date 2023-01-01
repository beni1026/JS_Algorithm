// s의 "각 위치"보다 앞에 나왔으면서 가장 가까운 같은 글자.

function solution(s) {
  let alp = {};
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (alp[c] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - alp[c]);
    }
    alp[c] = i;
  }
  return answer;
}
