function solution(s) {
    var answer = [];
    let numbers=s.split(' ').map(s=>Number(s));
    
    let min=Math.min(...numbers);
    let max=Math.max(...numbers);
    answer.push(min);
    answer.push(' ');
    answer.push(max);
    
    return answer.join('')
}