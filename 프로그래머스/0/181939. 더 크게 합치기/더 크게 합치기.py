# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 0.03 ms
'''
def solution(a, b):
    aToB=int(str(a)+str(b))
    bToA=int(str(b)+str(a))
    return max(aToB, bToA)
'''
# 다른 사람의 풀이- 포맷스트링 사용
def solution(a, b):
    return max(int(f"{a}{b}"), int(f"{b}{a}"))