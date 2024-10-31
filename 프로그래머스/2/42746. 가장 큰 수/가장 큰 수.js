function solution(numbers) {
    let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return answer[0] === '0' ? '0' : answer;
}

// 위의 코드가 더 성능적으로 비효율

function solution(numbers) {
    const answer = numbers
        .map(number=>String(number))
        .sort((a,b)=>(b+a)-(a+b))
        .join('');
    
    return answer[0] === '0' ? '0' : answer;
}
