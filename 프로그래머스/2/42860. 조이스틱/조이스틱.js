function solution(name) {
  var answer = 0;
  // 뒤로 돌아가지 않고 조작했을 때의 최소 횟수는 [문자 length - 1]
  // 처음 알파벳부터 다음 알파벳으로 넘어가는 조작 횟수부터 시작하니 length - 1
  // 예를 들어 길이가 3인 문자면 1->2로 이동하는 할 때 +1, 2->3으로 이동할때 +1이기 떄문에 length - 1을 해줘야 함.
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let currentAlPhabet = name.charCodeAt(i);

    if (currentAlPhabet < 78) {
      answer += currentAlPhabet % 65;
    } else {
      answer += 91 - currentAlPhabet;
    }

    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1;
    }

    min = Math.min(
      min,
      i * 2 + name.length - nextIndex, 
      i + (name.length - nextIndex) * 2
    );
  }
  answer += min;
  return answer;
}