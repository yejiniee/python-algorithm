function solution(n, computers) {
    let answer = 0;
    let visited=[false];
    
    function dfs(i){
        visited[i]=true;
        for(let j=0;j<computers[i].length ; j++){
            // !visited[j]: 이미 방문했으면(or 자기자신이면) 패스
            if(!visited[j] && computers[i][j]===1)
                dfs(j);
        }
    
        
    }
    
    for(let i=0 ; i<computers.length;i++){
        if(!visited[i]){
            dfs(i);
            // DFS 호출 후 새로운 네트워크가 발견되었음을 카운트
            answer++
        }
            
    }
    return answer;
}