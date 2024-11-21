function solution(triangle) { 
    // 삼각형에서 상향식 방법으로 dp 진행
    let dp=[...triangle];
    let i=triangle.length-2; // 3
    
    for(i;i>=0;i--){
        for(let j=0;j<triangle[i].length;j++)
            dp[i][j]+=Math.max(dp[i+1][j], dp[i+1][j+1]);
    }
    return dp[0][0];
}