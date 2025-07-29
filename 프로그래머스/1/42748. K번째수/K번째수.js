function solution(array, commands) {
    const answer=[];
    
    for(let idx = 0; idx < commands.length ; idx++){
        const [i,j,k] = commands[idx];
        const newArray = array.slice(i-1,j); // i번째부터 j번째까지 슬라이스
        newArray.sort((a,b)=>a-b); // 오름차순 정렬
        answer.push(newArray[k-1]);
    }
    
    
    return answer;
}