function solution(maps) {
    let n=maps.length; // 행 길이
    let m=maps[0].length; // 열 길이
    let dir=[[-1,0], [1, 0], [0,-1], [0,1]]; //상하좌우
    
    function bfs(){ // 최단거리 찾는 알고리즘
        // 초기값
        let queue=[[0, 0, 1]]; // [row, col, dist]현재 0,0 에서 1번 이동
        maps[0][0]=0; // 거쳐간 거리는 0으로 바꿈
        
        while(queue.length>0){
            let [row, col, distance] = queue.shift();
            // 만약 끝에 도달하면 계산한 거리 리턴
            if(row===n-1 && col===m-1)
                return distance;
            
            // 상하좌우 이동 여부 확인
            for(let [r,c] of dir){
                let newRow=row+r; 
                let newCol=col+c;
                
                // 맵 내에 있고 벽이 아니면 이동가능
                if(newRow>=0 && newRow<n && newCol>=0 && newCol<m && maps[newRow][newCol]===1){
                    queue.push([newRow, newCol, distance+1]);
                    maps[newRow][newCol]=0; // 방문처리
                }
            }
        }
        return -1;
    }

    return bfs();
}