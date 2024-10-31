function solution(array, commands) {
    var answer = [];
    array.unshift(0);
    
    commands.forEach((command, index)=>{
        let i = command[0];
        let j = command[1];
        let k = command[2]-1;
        
        const newArray=array.slice(i, j+1).sort((a,b)=>a-b);
        answer.push(newArray[k]);
    })
    return answer;
}