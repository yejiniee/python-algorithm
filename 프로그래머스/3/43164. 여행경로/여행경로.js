function solution(tickets) {
    const route = [];
    const obj = {};

    // 1. 그래프 만들기
    tickets.forEach(([from, to]) => {
        if (!obj[from]) obj[from] = [];
        obj[from].push(to);
    });

    // 2. 알파벳 역순 정렬 (pop()으로 쓰기 위해)
    for (let key in obj) {
        obj[key].sort().reverse();
    }

    // 3. DFS 정의
    function dfs(airport) {
        while (obj[airport] && obj[airport].length > 0) {
            const next = obj[airport].pop();
            dfs(next);
        }
        route.push(airport);
    }

    dfs("ICN");

    // 4. 역순 결과 반환
    return route.reverse();
}
