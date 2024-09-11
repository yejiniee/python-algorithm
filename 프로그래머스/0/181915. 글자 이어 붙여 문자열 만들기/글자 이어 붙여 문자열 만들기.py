#내가 한 풀이

def solution(my_string, index_list):
    answer = ''
    for i in index_list:
        answer+=my_string[i]
    return answer

'''
# 리스트 컴프리헨션 사용
def solution(my_string, index_list):
    return ''.join([my_string[idx] for idx in index_list])

# 리스트 컴프리헨션을 통해 ["p", "i", "z", "z", "a"] 리스트 생성
# join 메서드를 이용해 리스트의 각 문자를 연결하여 하나의 문자열로 만듦
'''