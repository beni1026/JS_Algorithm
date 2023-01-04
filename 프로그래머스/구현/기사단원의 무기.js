//각 기사는 자신의 기사번호의 "약수 개수"에 해당하는 공격력을 가진 무기를 구매..
// 약수개수 구하는 건 외워두는 게 좋을 듯

function getDivisorCnt(number) {
  let cnt = 0;
  for (let i = 1; i * i <= number; i++) {
    if (i * i === number) cnt++;
    else if (number % i === 0) cnt += 2;
  }
  return cnt;
}

function solution(number, limit, power) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    const cnt = getDivisorCnt(i);
    if (cnt > limit) {
      answer += power;
    } else answer += cnt;
  }
  return answer;
}
