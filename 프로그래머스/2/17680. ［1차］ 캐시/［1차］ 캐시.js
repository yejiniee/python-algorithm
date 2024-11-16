function solution(cacheSize, cities) {
    var answer = 0;
    let queue=[]; 
    let recent;
    
    if(cacheSize===0)
        return cities.length*5;
    
    for(let city of cities){
        
        if(!queue.includes(city.toLowerCase())){
            if(queue.length===cacheSize){
                queue.shift();
            }
            queue.push(city.toLowerCase());
            answer+=5;
        }else{
            // 제일 최근에 사용한거 제거하고 push
            recent=queue.indexOf(city.toLowerCase());
            queue.splice(recent, 1); 
            queue.push(city.toLowerCase());
        
            answer+=1;
        }
            
    }
    return answer;
}