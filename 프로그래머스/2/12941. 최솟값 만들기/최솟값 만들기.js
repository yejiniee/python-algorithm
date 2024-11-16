function solution(A,B){
    // 배열의 길이만큼 반복   
    // 최솟값이란? 가장큰 숫자랑 가장 작은 숫자랑 곱하기 
 
    // 오름차순 / 내림차순 정렬
    A.sort((a, b)=>a-b);    
    B.sort((a, b)=>b-a);
    
   
    
    // reduce - 누산기, 현재값, 인덱스, 배열
    return A.reduce((acc, curr, idx, arr)=>
        acc+=curr*B[idx]
    , 0);

 
}
