function solution(numbers, target) {
    let answer = 0;
    dfs(0, 0);
    
    function dfs(index, sum){
        if(index===numbers.length){
            if(sum===target){
                answer++;
            }
            return ;
        }
        
        dfs(index+1, sum+numbers[index]); // 더하는 경우
        dfs(index+1, sum-numbers[index]); // 빼는 경우
    }    
    
    return answer;
}