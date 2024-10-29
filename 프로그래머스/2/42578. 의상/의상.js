function solution(clothes) {
    // A의 종류가 N개, B의 종류가 M개 일 때 
    // 가능한 모든 경우의 수 (N+1)(M+1)
    var answer = 1;
    
    const map = new Map();
    for (let [cloth, kind] of clothes){
        if(!map.has(kind))
            map.set(kind, [cloth]);
        else
            map.get(kind).push(cloth);
    }
    
     // 각 의상을 종류별로 Map에 추가
    /*
    clothes.forEach(([cloth, kind]) => {
        if (map.has(kind)) {
            map.get(kind).push(cloth);
        } else {
            map.set(kind, [cloth]);
        }
    });
    */
    
    for(let value of map.values())
        answer*=(value.length+1);
    
    return answer - 1; // 아무것도 입지 않은 경우 제외
}