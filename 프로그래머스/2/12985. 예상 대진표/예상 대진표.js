function solution(n,a,b){
    var answer = 1;
    
    for(let i=0;i<Math.sqrt(n,2);i++){
        let smaller=Math.min(a,b);
        // 차이가 1이면서 작은게 홀수면 만남=>리턴
        if(Math.abs(a-b)===1 && smaller%2 ===1)
            return answer;
        
        a=Math.ceil(a/2);
        b=Math.ceil(b/2);
        answer++;
    }
    
    return answer;
    
}