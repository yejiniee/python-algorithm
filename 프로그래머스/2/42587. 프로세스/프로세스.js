function solution(priorities, location) {
    var answer = 0;
    let queue=priorities.map((el, index)=>[index, el]);

    while(true){
        let cmp=queue.shift(); 
        // 큐에 우선순위 높은거 있으면 다시 넣음
        if(queue.find((el)=> cmp[1]<el[1])){
            queue.push(cmp);
        }
        else{ // 우선순위 높은거 없으면 실행시키고 answer+1 
            answer++;
            if(location===cmp[0]){
                break;
            }
        }
    
    }
    
    return answer;
}
