function solution(n, words) {
    // 1. 끝말잇기 규칙: 마지막 단어로 시작할 것
    // 2. 같은 단어를 반복하지 말것
    
    let wordStack=[]; // 여기에서 단어가 있는지 확인할 것
    
    for(let i=0;i < words.length;i++){
        // 스택에 있는지 확인
        if(wordStack.includes(words[i])){
           return [ i%n+1, Math.floor(i/n)+1 ];
        }else{
            wordStack.push(words[i]);
        }
        // 끝말잇기 실수
        if(i>0 && words[i][0]!==wordStack[i-1][wordStack[i-1].length-1]){
            return [ i%n+1, Math.floor(i/n)+1 ];
        }
        
    }



    return [0, 0]; 
}