function solution(citations) {
    /*
    내림차순으로 정렬한 뒤

    앞에서부터 i번째 논문이 i+1번 이상 인용됐는지 확인하고

    조건이 처음 깨질 때의 i가 H-Index
    */
    
    citations.sort((a,b)=>b-a);
    let i=0
  
    while(i+1 <= citations[i])
        i++;
    
    return i;
}