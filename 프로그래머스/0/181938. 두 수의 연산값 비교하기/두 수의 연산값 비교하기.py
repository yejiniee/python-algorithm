# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 0.03 ms
'''
def solution(a, b):
    addStr=str(a)+str(b)
    mul=2*a*b
    return (int(addStr) if int(addStr)>=mul else mul) 
'''


# 다른 사람의 풀이-max 함수 사용
def solution(a, b):
    return max(int(str(a) + str(b)), 2 * a * b)
# 만약 둘의 값이 같은 경우 앞의 수를 리턴함