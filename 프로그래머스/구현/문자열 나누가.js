// 너무 복잡하게 생각하기 보단 문제 분기에 따라 순서대로 작성하는 것이 좋은 것 같다.
// 문자열의 길이가 10000이하이므로 시간복잡도는  N^2까지 가능
// 내 코드는 순차적으로 다 탐색하므로 N이다.
function solution(s) {
  let answer = 0;
  let x = '',
    cntX = 0,
    cntNotX = 0;
  let chk = false;
  for (let c of s) {
    if (x === '') {
      x = c;
      cntX++;
    } else {
      if (x === c) {
        cntX++;
      } else {
        cntNotX++;
      }

      if (cntX === cntNotX) {
        answer++;
        x = '';
        (cntX = 0), (cntNotX = 0);
      }
    }
  }

  if (x !== '') answer++; // notX가 나오지 않을 때 예외처리
  return answer;
}
