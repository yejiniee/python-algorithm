function solution(n){
    var ans = 0;

    while(n>1){
        // n이 홀수면 점프 횟수 더하기
        if(n%2>0)
            ans++;
        n=Math.floor(n/2); 
        
    }

    return ans+1;
}



