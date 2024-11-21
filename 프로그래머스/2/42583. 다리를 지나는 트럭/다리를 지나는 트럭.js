
function solution(bridge_length, weight, truck_weights) {
    let sec = 0;
  
    // 다리 위에 올라간 트럭 배열
    let bridge = Array.from({length: bridge_length}, () => 0);
    // 현재 시점 다리에 걸린 하중
    let weight_sum = 0;
    let next_truck;
  
    // 1초를 증가시키고, 맨 처음 트럭을 다리에 올린다.
    sec++;
    bridge.shift();
    
    next_truck=truck_weights.shift();
    weight_sum += next_truck;
    bridge.push(next_truck);
  
    // 대기 트럭 배열이 남아있거나 다리 위에 올라간 트럭 배열이 남아있는 동안,
    while (weight_sum > 0) {
        // 우선 시간이 1초 지났을 때, 
        sec++;
      
        // 큐의 맨 앞을 꺼내고, 
        weight_sum -= bridge.shift();
      
        // 만약 현재 시점 다리 하중에 다음 트럭의 무게를 더해도 다리가 버틸 수 있다면?
        if (truck_weights.length > 0 && weight_sum + truck_weights[0] <= weight) {
            // 다음 트럭을 다리 배열에 넣는다.
            next_truck=truck_weights.shift();
            weight_sum += next_truck;
            bridge.push(next_truck);
        } else {
            bridge.push(0);
        }
    }
  
    return sec;
}