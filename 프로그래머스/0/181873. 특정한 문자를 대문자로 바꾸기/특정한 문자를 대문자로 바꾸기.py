# 내가 한 풀이
# 메모리: 10.1 MB, 시간: 0.11 ms
'''
def solution(my_string, alp):
    return ''.join([i.upper() if i==alp else i for i in my_string])
'''

# 다른 사람의 풀이

def solution(my_string, alp):
    return my_string.replace(alp, alp.upper())