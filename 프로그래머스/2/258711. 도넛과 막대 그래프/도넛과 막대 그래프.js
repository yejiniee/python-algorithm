// 맵 형태로 만들기
//=> 노드: {give, receive} 
const getInfo = (edges) => { 
    const info = edges.reduce((map, edge)=>{ // edge: [2, 3]
        // give 계산
        if (!map.has(edge[0])) { // key인 2가 맵에 없으면 
            map.set(edge[0], [1, 0]); // key: 2, value: [give, receive] 새로 추가해줌
        } else { // 이미 있으면 
            const [give, receive] = map.get(edge[0]); // key인 2로 가져옴.
            map.set(edge[0], [give+1, receive]); // give+1 해줌
        }
        
        // receive 계산
        if(!map.has(edge[1])){ // key인 3이 맵에 없으면 
            map.set(edge[1], [0, 1]); // key: 3, value: [give, receive] 새로 추가해줌
        } else { // 이미 있으면 
            const [give, receive] = map.get(edge[1]); // key인 3으로 가져옴.
            map.set(edge[1], [give, receive+1]); // receive+1 해줌
        }

        return map; // 리턴해서 저장하고 다음 단계로 이어서...
        
    }, new Map()); // 계산한 결과가 map에 저장됨.
    
    return info;
    
/*
    info 결과
    map = Map {
          2 => [2, 0], 
          3 => [0, 2], 
          4 => [1, 0], 
          1 => [1, 2]  
    }
    
    => give>=2 && receive===0인 노드가 범인!
*/
}

// 맵으로 정리된 그래프 결과를 받아서 범인 색출
const chkInfo = (info) => {
    // [생성한 정점의 번호, 도넛 모양 그래프의 수, 막대 모양 그래프의 수, 8자 모양 그래프의 수]
    const res = new Array(4).fill(0); 
    
    for(const [key, value] of info){ 
        const [give, receive] = value;  
        if( give >= 2 && receive === 0) { 
            res[0] = key; // 생성한 정점의 번호
        } else if(give == 0) {
            //막대그래프 맨끝은 give === 0
            res[2]++; // 막대 모양 그래프의 수
        } else if(give >= 2 && receive >= 2){
            res[3]++; // 8자 모양 그래프의 수
        }  
    }       
    // 도넛은 사이클이 이루어진다는 것 밖에 없기 때문에 개수 계산으로 판별할 수 없다. 
    // 생성 정점은 기존에 존재하던 모든 그래프에 간선을 하나 씩 연결한다.
    // 따라서, 생성 정점의 give 간선 개수에서 막대, 8자 그래프 개수를 빼면 도넛 그래프 개수.
    res[1] = info.get(res[0])[0] - res[2] - res[3];
    
    return res;
}

const solution = (edges) => {
    const mapInfo = getInfo(edges);
    const answer = chkInfo(mapInfo);
    return answer;
}