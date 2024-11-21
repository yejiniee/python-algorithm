function solution(m, n, puddles) {
    let dp=Array.from({length: n+1}, () => Array(m+1).fill(0));
    
    dp[1][1] = 1;

    // puddles를 빠르게 확인하기 위해 Set 사용
    const puddleSet = new Set(puddles.map(([x, y]) => `${x},${y}`));
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(i === 1 && j === 1 || puddleSet.has(`${j},${i}`)) 
                continue;
            dp[i][j]=(dp[i][j-1]+dp[i-1][j])%1000000007;
        }
    }
    
    
    return dp[n][m];
}