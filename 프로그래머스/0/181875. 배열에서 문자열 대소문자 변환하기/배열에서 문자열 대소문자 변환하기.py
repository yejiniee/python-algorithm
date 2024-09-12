# 내가 한 풀이
# 메모리: 10.1 MB, 시간: 0.01 ms
'''
def solution(strArr):
    answer=[]
    
    for i in range(len(strArr)):
        if i%2:
            answer.append(strArr[i].upper())
        else:
            answer.append(strArr[i].lower())

    return answer
'''


# 남이 한 풀이 - enumerate 사용

def solution(strArr):
    return [s.lower() if i % 2 == 0 else s.upper() for i, s in enumerate(strArr)]

# enumerate(strArr):
# strArr의 각 요소와 그 요소의 인덱스를 함께 반환하는 이터레이터를 생성
# -> (0, "AAA"), (1, "BBB"), (2, "CCC"), (3, "DDD") 튜플 반환

# [s.lower() if i % 2 == 0 else s.upper() for i, s in enumerate(strArr)]
# enumerate 함수에서 반환된 튜플 - (i, s)에 대해 조건문을 적용
# 만약 인덱스가 짝수라면 문자열을 소문자로, 반대라면 대문자로 변환한 리스트 반환