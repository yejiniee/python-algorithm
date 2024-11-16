// dfs로 완전탐색
function solution(k, dungeons) {
    var answer = -1;
    const visited = Array(dungeons.length).fill(0);
    
    
    // hp: 체력, L: 현재까지 탐험한 던전의 개수
    function dfs(hp, L){
        for (let i=0;i<dungeons.length;i++){
            // 방문한 적이 없고, k가 현재 hp보다 작으면 방문 가능 
            if(!visited[i]&&dungeons[i][0]<=hp){
                visited[i]=1;
                // dfs(현재 피로도 - 방문 던전, 진행단계 + 1)
                dfs(hp-dungeons[i][1], L+1);
                
                //dfs 종료 후 방문 끝냄: 다른 경로에서 다시 탐험할 수 있도록
                visited[i]=0;
            }
        }
        answer=Math.max(answer, L);
    }
    
    
    dfs(k,0);
    return answer;
}

