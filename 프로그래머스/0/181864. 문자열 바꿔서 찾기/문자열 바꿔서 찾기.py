# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 0.01 ms
'''
def solution(myString, pat):
    newString = ''.join(['B' if s=='A' else 'A' for s in myString])
    
    return int(pat in newString)
'''


# 다른 사람의 풀이- replace 메서드 사용
def solution(myString, pat):
    return int(pat in myString.replace('A', 'C').replace('B', 'A').replace('C', 'B'))
