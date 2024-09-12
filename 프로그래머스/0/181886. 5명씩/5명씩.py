# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 0.00 ms
'''
def solution(names):
    return [names[n] for n in range(0,len(names),5)]
'''

# 다른 사람의 풀이
def solution(names):
    return names[::5]