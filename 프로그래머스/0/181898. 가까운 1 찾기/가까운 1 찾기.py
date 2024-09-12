# 내가 푼 방식
# 메모리: 10.3 MB, 시간: 0.00 ms
'''
def solution(arr, idx):
    for i in range(idx, len(arr)):
        if(arr[i]==1):
            return i

    return -1
'''

# 다른 사람의 풀이
# try-catch 문과 index 메서드 사용

def solution(arr, idx):
    answer = 0
    try:
        answer = arr.index(1, idx)
    except:
        answer = -1 # 오류가 발생하면 -1을 반환

    return answer

# arr.index(1, idx) 
# => 1이라는 값이 처음 나타나는 인덱스를 찾는 함수, 'idx'부터 탐색