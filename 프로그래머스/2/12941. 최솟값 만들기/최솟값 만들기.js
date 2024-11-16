function solution(A,B){
    let answer = 0;
    // 배열의 길이만큼 반복   
    // 최솟값이란? 가장큰 숫자랑 가장 작은 숫자랑 곱하기 
  
 
    // 오름차순 / 내림차순 정렬
    A.sort((a, b)=>a-b);    
    B.sort((a, b)=>b-a);
    
    let i=0;
    while(i<A.length){
        let sum=A[i]*B[i];
        answer+=sum;
        i++;
    }
    

 

    return answer;
}
