function solution(elements) {
    let set = new Set();
    let len=elements.length;
    
    for(let i=1;i<len+1;i++){
        let sum=0;
        let left = 0;
        let right = i-1;
        
        // 초기 윈도우 계산        
        for(let j=0;j<i;j++){
            sum+=elements[j];
        }
        
        if(!set.has(sum))
                set.add(sum);
        
        // 슬라이딩 윈도우
        for(let j=0;j<len;j++){
            right=(right+1)%len;
            sum=sum-elements[left]+elements[right];
            left=(left+1)%len;
            if(!set.has(sum))
                set.add(sum);
        }
        
    }
    return set.size;
}