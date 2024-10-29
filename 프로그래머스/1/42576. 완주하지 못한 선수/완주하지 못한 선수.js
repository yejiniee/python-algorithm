function solution(participant, completion) {
    let answer = '';
    let participantMap=new Map();
    
    // 해시 맵에 참여자 이름과 수 저장
    participant.forEach((p)=>participantMap.set(p,(participantMap.get(p)||0)+1));
                        
    // 해시맵에서 완주자 소거
    completion.forEach((c)=>participantMap.set(c, (participantMap.get(c)-1)));
    
    for([name, count] of participantMap){
        if(count>0)
            answer=name;
    }
                        
    
    return answer;
}