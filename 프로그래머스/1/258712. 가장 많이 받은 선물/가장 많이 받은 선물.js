function solution(friends, gifts) {
    const hashMap = new Map();
    const friends_length=friends.length;
    const nextGiftsCount=Array(friends_length).fill(0); // 다음 달 받을 선물 배열
    const giftsScore=Array(friends_length).fill(0); // 선물지수 배열
    
    // 검색속도 향상하기 위해 친구의 이름과 인덱스를 매핑
    const friendsIndex = new Map();
    for (let i = 0; i < friends_length; i++) {
        friendsIndex.set(friends[i], i);
    }
    
    // 해시맵 저장하고 선물지수 저장함
    for(let i=0 ; i< gifts.length ; i++){
        const [giver, receiver] = gifts[i].split(' ');
        
        hashMap.set(gifts[i], (hashMap.get(gifts[i]) ?? 0) + 1);
        
        // 선물지수: 준 선물-받은 선물
        giftsScore[friends.indexOf(giver)]+=1; 
        giftsScore[friends.indexOf(receiver)]-=1; 
    }
    
    // 다음 달 받을 선물 수 저장
    for(let i=0 ; i<friends_length-1 ; i++){
        for(let j=i+1 ; j<friends_length; j++){
            let a = friends[i];
            let b = friends[j];
            
            let aToB = a+' '+b; 
            let bToA = b+' '+a; 
            
            const aToBValue=hashMap.get(aToB) ?? 0;
            const bToAValue=hashMap.get(bToA) ?? 0;
            
            // 선물을 주고받은 경우
            if(hashMap.has(aToB)||hashMap.has(bToA)){
                if(aToBValue>bToAValue) { // 2> 1
                    // a의 다음달 선물 수 +1
                    nextGiftsCount[i] += 1; 
                } else if(aToBValue<bToAValue){
                    // b의 다음달 선물 수 +1
                    nextGiftsCount[j] += 1;
                } else {
                    // 선물 지수 비교
                    if(giftsScore[i]>giftsScore[j]){
                        // a의 다음달 선물 수 +1
                        nextGiftsCount[i] += 1;
                    }
                    if(giftsScore[i]<giftsScore[j]){
                        // b의 다음달 선물 수 +1
                        nextGiftsCount[j] += 1;
                    }
                }
            }else { // 선물을 주고받지 않은 경우
                // 선물 지수 비교
                if(giftsScore[i]>giftsScore[j]){
                    // a의 다음달 선물 수 +1
                    nextGiftsCount[i] += 1;
                }
                if(giftsScore[i]<giftsScore[j]){
                    // b의 다음달 선물 수 +1
                    nextGiftsCount[j] += 1; 
                }
            }
            
        }
    }
        
    // giftScore에서 가장 큰 값을 찾아줘
    answer=Math.max(...nextGiftsCount);
    console.log('다음달 받을 선물 배열: ', nextGiftsCount);
    console.log('선물지수 배열: ', giftsScore);
    console.log('해시맵: ', hashMap);
    
    
    
    return answer; // 선물을 가장 많이 받을 친구의 받을 선물 수 
}
