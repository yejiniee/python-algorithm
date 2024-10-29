function solution(distance, rocks, n) {
    let answer = 0; // 최소거리 중 최대거리
    rocks.sort((a,b)=>(a-b));
    rocks.push(distance);
    
    // 거리의 최댓값과 최소값
    let left=1;
    let right=distance;
    
    while(left<=right){
        let mid=Math.trunc((left+right)/2);
        let del_cnt = 0;
        let current = 0;
        let min_dist = distance;
        
        
        for(let rock of rocks){
            let diff=rock-current;
            
            if(diff < mid) {
                del_cnt+=1;
            } else {
                current=rock;
                min_dist=Math.min(mid, min_dist);
            }
        }
        
        if(del_cnt>n) {
            right = mid-1;
        } else {
            answer=min_dist;
            left = mid+1
        }
    }
    
    return answer;
}