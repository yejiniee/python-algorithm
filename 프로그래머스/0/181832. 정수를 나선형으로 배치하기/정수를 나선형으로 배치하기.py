def solution(n):
    
    if n==1:
        return [[1]]
    
    # answer를 n*n으로 채우기
    answer = [[0] * n for _ in range(n)]
    x = 0
    y = 0
    dir = 'r' # 오른쪽 먼저 시작
    
    # if문으로 방향을 기준으로 채워넣기
    # right='r', down='d', left='l', up='u'
    
    for i in range(1, n*n+1):
        answer[x][y] = i
        if dir == 'r':
            y += 1
            # 맨 끝에 도달했거나 가려는 곳에 이미 값이 있으면 방향 전환
            if y == n-1 or answer[x][y+1] != 0:
                dir='d'
        elif dir == 'd':
            x += 1
            if x==n-1 or answer[x+1][y] != 0:
                dir='l'
        elif dir == 'l':
            y -= 1
            if y == 0 or answer[x][y-1] != 0:
                dir='u'
        elif dir == 'u':
            x -= 1
            if x == 0 or answer[x-1][y] != 0:
                dir='r'
    
    return answer