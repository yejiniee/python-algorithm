function solution(land) {
    const N = land.length; //행
    const M = land[0].length; //열
    
    // 몇 번 열에서 석유를 뽑았는지 확인해줄 배열
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    
    // 상하좌우 움직일 방향 
    const directions = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ];

    // 열 당 시추 가능한 석유량을 저장할 배열
    const oils = Array(M).fill(0);

    // 이동 가능한지 판별하는 함수
    function isValid(x, y) {
        return x >= 0 && x < N && y >= 0 && y < M;
    }
    
    // i,j 위치에서 석유 덩어리를 발견하면 bfs를 이용해서 석유를 끝까지 탐색
    function bfs(i, j) {
        const queue = [[i, j]];
        visited[i][j] = true;
        let size = 0;
        // 현재 석유 덩어리가 차지하는 열들의 집합
        const columnSet = new Set();

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            size++;
            // 현재 열 번호를 집합에 추가
            columnSet.add(y);

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (!isValid(nx, ny)) continue;
                if (land[nx][ny] === 1 && !visited[nx][ny]) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }

      // 이 석유 덩어리가 차지하는 모든 열에 대해
        for (const column of columnSet) {
            // 해당 열의 석유량에 현재 덩어리의 크기를 더함
            oils[column] += size;
        }
    }

    // land 전체 탐색하며 시추 시작
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                bfs(i, j);
            }
        }
    }

   
    
    
    
    /*
    let max = 0;
    for (let i = 0; i < M; i++) {
        if (oils[i] > max) {
        max = oils[i];
        }
    }
    */
     // 최댓값 리턴
    let max = Math.max(...oils);
    return max;
}