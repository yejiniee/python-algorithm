# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 0.04 ms
'''
def solution(num_str):
    new_list=list(num_str)
    
    return sum([int(s) for s in new_list])
'''

# 다른 사람의 풀이- 내장함수 map 사용
def solution(num_str):
    return sum(map(int, num_str))