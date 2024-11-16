function solution(s){
    var answer = 0;
    let stack=[];
    let string=s.split('');

    for(let i=0;i<s.length;i++){
        if(stack.length<1){
            stack.push(s[i]);
        }else{
            if(s[i]===stack[stack.length-1]){
                stack.pop();
            }else{
                stack.push(s[i]);
            }
        }
    }
    
    // 스택으로 다시 풀기
    if(stack.length<1)
        answer=1;
  

    return answer;
}