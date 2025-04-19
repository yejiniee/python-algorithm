import math  

def solution(n, w, num):
    # 택배 상자의 개수: n
    # 가로로 놓는 상자의 개수:w 
    # 꺼내려는 택배 상자의 번호: num
    
    # 굳이 사진처럼 할 필요없이, 그냥 위에서부터 쌓고 아래에서 꺼내면 똑같음
    '''
    1   2  3  4  5  6
    12 11 10  9  8  7
    13 14 15 16 17 18
          22 21 20 19
    '''
    answer = 0
    
    storage=[]
    box=1
    h = math.ceil(n/w)
    
    # 상자 쌓기
    for i in range(h):
        t=[]
        for j in range(w):
            if box <= n:
                t.append(box)
                box+=1
            else:
                t.append(0)
        if i % 2 == 0:  # 정방향 라인
            storage.append(t)
        else:           # 역방향 라인
            t.reverse()
            storage.append(t)
    # 원하는 상자 꺼내기 num   
    
    for i in range(len(storage)): # 높이=4
        for j in range(len(storage[0])): # 넓이=6
            if storage[i][j] == num:
                d = i
                while d < h and storage[d][j]:    # 꺼낼 박스가 있으면
                    answer += 1
                    d += 1	# 아래로 내려감
    
    return answer