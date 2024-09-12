# 내가 한 풀이
# 메모리: 10.2 MB, 시간: 0.03 ms
'''
def solution(my_string):
    answer = [my_string[i:len(my_string)] for i in range(len(my_string))]
    answer.sort()
    
    return answer
'''

# 다른 사람의 풀이 - 제너레이터 표현식 + sorted 내장 함수 사용
def solution(my_string):
    return sorted(my_string[i:] for i in range(len(my_string)))

# 제너레이터 표현식(메모리 효율적)
# my_string[i:] for i in range(len(my_string))는 제너레이터를 생성함
# sorted(정렬할 리스트, reverse=True) * False:오름차순
# sorted() 함수는 제너레이터를 받아도 최종적으로 정렬된 리스트를 반환함

# 리스트 컴프리헨션
# [my_string[i:] for i in range(len(my_string))]

# 제너레이터 표현식은 메모리 효율이 높지만, 
# 리스트 컴프리헨션은 미리 리스트를 만들어 메모리를 더 많이 사용합니다.