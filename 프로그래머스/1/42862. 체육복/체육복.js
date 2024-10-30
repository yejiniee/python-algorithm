function solution(n, lost, reserve) {    
    // 1. lost와 reserve에 동시에 들어가있는 원소 삭제
    // 1-1. 정렬되지 않은 경우도 생각하기!
    const realLost = lost.filter(l => !reserve.includes(l)).sort((a,b)=>a-b);
    const realReserve = reserve.filter(r => !lost.includes(r)).sort((a,b)=>a-b);
    let answer = n-realLost.length; // lost 애들은 못 듣는다고 가정
    
    
    // 조심할것
    // 1. 반복문 실행 중 대상 배열 원소를 삭제하면 안됨. 인덱스 꼬임 
    /*
    reserve.forEach(r => { 
        if(lost.includes(r)){
            // reserve.splice(reserve.indexOf(r),1);
            // => reserve의 for문에서 삭제해버리면 인덱스가 깨짐
            lost.splice(lost.indexOf(r),1);
            answer+=1;
        }
    });
    */
    
    
  
    // 2. 체육복 빌리기
    realLost.forEach(l=>{
        if(realReserve.includes(l-1)){
            answer+=1;
            realReserve.splice(realReserve.indexOf(l-1),1);
        } else if(realReserve.includes(l+1)) {
            answer+=1;
            realReserve.splice(realReserve.indexOf(l+1),1);
        } 
    });
    return answer;
}