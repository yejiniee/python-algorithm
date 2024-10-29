function solution(n, times) {
    let answer = 0;
    
    // right 는 가장 비효율적으로 심사했을 때 걸리는 시간
    // 가장 긴 심사시간이 소요되는 심사관에게 n 명 모두 심사받는 경우
    let left = Math.min(...times);
    let right = Math.max(...times)*n;
    
    
    while(left<=right){
        let mid=Math.trunc((left+right)/2);
        // checked 은 모든 심사관들이 mid분 동안 심사한 사람의 수
        let checked=0; 
        
        for(let time of times){
            checked += Math.trunc(mid/time);
            
            if(checked >= n)
                break;
        }
        
        if(checked >= n){
            answer=mid;
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return answer;
}
