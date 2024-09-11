# 리스트 컴프리헨션 사용
def solution(n, k):
    return [i for i in range(k,n+1,k)]

# 내가 한 방식
# 메모리: 10.5 MB, 시간: 0.62 ms
'''
def solution(n, k): 
    answer = []
    i=1
    while (k * i <= n):
        answer.append(k*i)
        i+=1; 
        
    return answer
'''

