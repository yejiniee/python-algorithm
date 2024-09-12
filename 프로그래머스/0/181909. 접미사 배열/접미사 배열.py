# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 2.14 ms

def solution(my_string):
    answer = [my_string[i:len(my_string)] for i in range(len(my_string))]
    answer.sort()
    return answer

'''
# 다른 사람의 풀이
def solution(my_string):
    return sorted(my_string[i:] for i in range(len(my_string)))
    
    '''