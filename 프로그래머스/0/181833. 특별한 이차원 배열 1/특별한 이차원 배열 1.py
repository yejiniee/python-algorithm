# 내가 한 풀이
# 배열의 초기화 필수
def solution(n):
    answer = [[] for _ in range(n)]
    for i in range(n): 
        for j in range(n): 
            if(j==i): 
                answer[i].append(1) 
            else:
                answer[i].append(0)
        
    return answer

# gpt - 이중 리스트 컴프리헨션
def solution(n):
    return [[1 if i == j else 0 for j in range(n)] for i in range(n)]

# 바깥쪽 리스트 컴프리헨션 [ ... for i in range(n)]는 n개의 행을 생성
# [1 if i == j else 0 for j in range(n)]는 현재 행에 대한 n개의 열을 생성
