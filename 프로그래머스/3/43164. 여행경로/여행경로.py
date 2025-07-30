def solution(tickets):
    # 키가 없을 경우, 자동으로 빈 리스트([])를 넣어주는 딕셔너리
    from collections import defaultdict

    # 1. 그래프 만들기
    graph = defaultdict(list)
    for a, b in tickets:
        graph[a].append(b)
    '''
    {
        "ICN": ["JFK", "ATL"],
        "ATL": ["SFO"]
    }
    '''

    # 2. 도착지를 알파벳 순으로 정렬
    for key in graph:
        graph[key].sort(reverse=True)  # 나중에 pop() 쓸 거라서 역순 정렬

    route = []  # 최종 경로를 담는 리스트

    def dfs(airport):
        while graph[airport]:
            next_airport = graph[airport].pop()
            dfs(next_airport)
        route.append(airport)

    # 3. DFS 시작 (ICN에서)
    dfs("ICN")

    # 4. 역순으로 되어 있으니 뒤집기
    return route[::-1]
