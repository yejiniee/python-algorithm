from collections import deque

# n, m 입력받기
n, m = map(int, input().split())

# 그래프 입력 받기
graph=[]
for i in range(n):
    graph.append(list(map(int, input())))

# 이동(상, 하, 좌, 우)
dx=[-1, 1, 0, 0]
dy=[0, 0, -1, 1]
        
#bfs
def bfs(x, y):
    # 큐
    queue= deque()
    queue.append((x,y))
    
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx= x + dx[i]
            ny= y + dy[i]
            
            # 그래프 범위 넘어가면 무시
            if nx<0 or ny<0 or nx>=n or ny>=m:
                continue
            # 갈 수 없는 길이면 무시
            if graph[nx][ny]==0:
                continue
            if graph[nx][ny]==1:
                # 갈 수 있는 길이면, 이전 위치 값에서 +1해줌
                graph[nx][ny]=graph[x][y]+1
                # 이동한 위치를 큐에 갱신
                queue.append((nx, ny))
    
    # 최단 거리 반환!!!!
    return graph[n-1][m-1]    


print(bfs(0,0))