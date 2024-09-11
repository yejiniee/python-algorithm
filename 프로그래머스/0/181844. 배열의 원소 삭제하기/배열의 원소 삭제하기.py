# 내가 한 풀이
# 메모리: 10.1 MB, 시간: 0.35 ms
'''
def solution(arr, delete_list):
    answer = []
    for i in delete_list:
        for j in arr:
            if i==j:
                arr.remove(j)
    return arr
'''

# 조건부 표현식, 리스트 컴프리헨션, 포함, 불포함을 확인할 수 있는 in, not in 연산 사용

def solution(arr, delete_list):
    return [i for i in arr if i not in delete_list]