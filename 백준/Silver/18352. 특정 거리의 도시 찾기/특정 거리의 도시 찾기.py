import sys
from collections import deque
input=sys.stdin.readline
# 도시의 개수 N, 도로의 개수 M, 거리 정보 K, 출발 도시의 번호 X
n, m, k, x = map(int, input().split())

graph=[[] for _ in range(n+1)] # 노드 1~ n의 인접 노드 담는 리스트, [[], [], [], [], ...]
for _ in range(m):
    r, c = map(int, input().split())
    graph[r].append(c)
    
# bfs
dist_list = [-1 for _ in range(n+1)] # 시작노드 x와 각 노드 사이의 최단거리 저장
# visited = [0 for _ in range(n+1)] # 방문 여부
dist_list[x]=0 # 출발 도시는 거리 0

queue = deque([x]) # 시작 노드 x, 큐에 담기
while queue:
    now = queue.popleft() # 현재 위치
    for i in graph[now]: # 현재 노드와 연결된 인접 노드 리스트 순회
        if dist_list[i] == -1:  # 방문한 적 없다면
            queue.append(i) # 큐에 넣기
            dist_list[i] = dist_list[now]+1    
         # 만약, 이전에 방문한 적이 있다면, 더 최단 거리이므로 건너뛴다.

check = 0 # 만약 답이 없으면 -1 출력
# 거리가 k인 노드 출력
for i in range(1, n+1):
    if dist_list[i] == k:
        print(i)
        check += 1
if check == 0:
    print(-1)