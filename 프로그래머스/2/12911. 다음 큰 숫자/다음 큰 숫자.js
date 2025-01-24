function countNumberOfOne(n){
    // return n.toString(2).split('').filter((number)=>number==='1').length;
    return n.toString(2).match(/1/g).length;
    
}

function solution(n) {
    // 1. n을 2진수 배열로 변환
    // 2. numberOfOne: 1의 개수 세기
    // 3. 반복문 78+i로 nextN에 1,2 적용해서 numberOfOne이랑 같으면 break하고 리턴
    const numberOfOne=countNumberOfOne(n);
    let i=1;
    
    while(true){
        if(countNumberOfOne(n+i)===numberOfOne){
            return n+i;
        }
        i++;
    }
}
    


