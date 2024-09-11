# 내가 한 풀이-라이브러리사용
# 메모리: 10.3 MB, 시간: 0.00 ms
'''
def solution(my_string, is_suffix):
    return int(my_string.endswith(is_suffix))
'''

# 남이 한 풀이
def solution(my_string, is_suffix):
    return int(my_string[-len(is_suffix):]==is_suffix)