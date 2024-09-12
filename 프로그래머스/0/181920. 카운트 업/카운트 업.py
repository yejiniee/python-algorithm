# 내가 한 풀이 - 리스트 컴프리헨션 사용
# 메모리: 10.2 MB, 시간: 0.01 ms
'''
def solution(start_num, end_num):
    return [i for i in range(start_num, end_num+1)]
'''


#  다른 사람의 풀이 - 리스트 내장함수 사용
def solution(start, end):
    return list(range(start, end + 1))