function solution(numbers) {
    // 만약 00000이면 0으로 출력
    
    // 문자로 만들기
    // 내림차순으로 정렬
    // ba가 ab보다 크면(결과값 양수)=> ba 정렬
    // 결과값이 음수면 ab 정렬
    let answer=numbers.map(v=>v+'').sort((a,b)=>(b+a)-(a+b)).join('');

    return answer[0] === '0' ? '0' : answer;
}