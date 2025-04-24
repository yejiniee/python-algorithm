import sys
sys.setrecursionlimit(10000)  # 또는 100000까지도 가능

# 입력 값
test_num = int(input())

for t in range(test_num):
    m, n ,k = map(int, input().split())
    graph=[[0]*m for _ in range(n)]
    
    # 배추가 심어져있는 곳은 값이 1
    for i in range(k):
        x, y = map(int, input().split())
        graph[y][x]= 1 
        
    # dfs 함수    
    def dfs(x, y):
        # 범위를 넘어가면 무시
        if x<0 or y<0 or x>=m or y>=n:
            return False
        
        if graph[y][x] == 1:
            # 재방문하지 않게 방문 처리!!!
            graph[y][x] = 0
            
            # 상하좌우 탐색
            dfs(x, y-1)
            dfs(x, y+1)
            dfs(x-1, y)
            dfs(x+1, y)
            return True
        
        return False

    # 배추 뭉치 세기
    count = 0
    for i in range(n):
        for j in range(m):
            if dfs(j,i):
                count += 1
    # 출력
    print(count)