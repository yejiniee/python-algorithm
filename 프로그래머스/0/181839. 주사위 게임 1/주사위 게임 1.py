# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 0.00 ms
'''
def solution(a, b):
    if (a%2!=0 and b%2!=0):
        return a**2 + b**2
    elif (a%2==0 and b%2==0):
        if(a>b):
            return a-b
        else:
            return b-a
    else:
        return 2*(a+b)
'''

# 다른 사람의 풀이- abs() 내장 함수 사용
def solution(a, b):
    if a%2 and b%2: 
        return a*a+b*b
    elif a%2 or b%2: 
        return 2*(a+b)
    return abs(a-b)        

