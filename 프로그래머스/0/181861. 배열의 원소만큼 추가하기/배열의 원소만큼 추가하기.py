# 내가 한 풀이
# 메모리: 10.9 MB, 시간: 0.76 ms
'''
def solution(arr):
    new_arr = []
    for i in arr:
        for j in range(i):
            new_arr.append(i)
    return new_arr
'''

# 다른 사람의 풀이 - 리스트 컴프리헨션에 이중 for문 사용하기
def solution(arr):
    return [i for i in arr for j in range(i)]

# 각 루프는 왼쪽에서 오른쪽으로 평가됨
