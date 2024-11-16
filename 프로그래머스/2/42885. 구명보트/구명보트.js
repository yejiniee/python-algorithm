function solution(people, limit) {
    var answer = 0;
    /*
    people.sort((a,b)=>b-a);
    while(people.length>0){
        if(people[0]+people[people.length-1]<=limit){
            people.pop();
        }
        people.shift();
        answer++;
        
    }*/
  
    people.sort((a, b) => b - a);

    let left = 0; // 가장 무거운 사람의 인덱스
    let right = people.length - 1; // 가장 가벼운 사람의 인덱스

    while (left <= right) {
        // 가장 무거운 사람과 가장 가벼운 사람이 함께 탈 수 있는 경우
        if (people[left] + people[right] <= limit) {
            right--; // 가벼운 사람도 태움
        }
        // 무거운 사람은 항상 태움
        left++;
        answer++; // 보트 하나 사용
    }

   
    return answer;
}