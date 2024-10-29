function solution(nums) {
    let answer = 0;
    // 선택할 포켄몬 마리 수
    let choice = Math.trunc(nums.length/2);
    
    new_nums=nums.filter((num,index,arr)=> index === arr.indexOf(num));
    
    if(choice<=new_nums.length)
        answer=choice;
    else
        answer=new_nums.length;
    
    return answer;
}