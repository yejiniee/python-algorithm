function solution(number, k) {
    const stack=[];
    
    for (let i = 0; i < number.length; i++) {
        // 배열 마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop함
        while(stack.length>0 && stack[stack.length - 1]<number[i] && k>0 ){
            stack.pop();
            k--;
        }
        
        stack.push(number[i]);
    }

    // 제거할 개수가 남음-끝에서부터 제거
    if(k>0){
        stack.splice(stack.length-k, k);
    }

    
    
    return stack.join('');
}

