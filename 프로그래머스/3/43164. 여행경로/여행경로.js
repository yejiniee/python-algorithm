function solution(tickets) {
    // 객체로 저장
    /*
    {
    'ICN': [JFK],
    ...
    }
    
    */
    const route=[];
    
    const obj={};
    
    tickets.map(([a,b])=> {
        if(!obj[a])
            obj[a]=[];
        obj[a].push(b);
    })
    for(let key in obj){
        obj[key].sort().reverse(); // 내림차순 정렬
    }
    
    function dfs(airport){
        while(obj[airport] && obj[airport].length > 0){
            const dest = obj[airport].pop();
            dfs(dest);
        }
        route.push(airport);
    }
    
    dfs('ICN');
    
    return route.reverse();
}