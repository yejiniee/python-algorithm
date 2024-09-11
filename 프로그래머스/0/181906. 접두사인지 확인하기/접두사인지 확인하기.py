# 파이썬 라이브러리 startswith 사용
def solution(my_string, is_prefix):
    return int(my_string.startswith(is_prefix))

# 내가 한 풀이
# 메모리: 10 MB, 시간: 0.00 ms
'''
def solution(my_string, is_prefix):
    if(my_string[0:len(is_prefix)]==is_prefix):
        return 1
    else:
        return 0
'''
    
    