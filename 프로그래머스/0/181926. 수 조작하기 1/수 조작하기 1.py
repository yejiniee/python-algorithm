# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 9.38 ms
'''
def solution(n, control):

    for i in control:
        if(i=='w'):
            n+=1
        elif (i=='s'):
            n-=1
        elif (i=='d'):
            n+=10
        elif (i=='a'):
            n-=10
    return n
'''

# 딕셔너리, zip 사용

def solution(n, control):
    key = dict(zip(['w','s','d','a'], [1,-1,10,-10]))
    return n + sum([key[c] for c in control])

# zip()은 두 개의 리스트를 병렬로 묶어 튜플의 리스트를 생성함
# -> [('w', 1), ('s', -1), ('d', 10), ('a', -10)]

#dict(...)는 이러한 튜플 리스트를 딕셔너리로 변환
# -> key는 {'w': 1, 's': -1, 'd': 10, 'a': -10}이라는 딕셔너리가 됨

# 리스트 컴프리헨션 [key[c] for c in control]
# key[c]로 해당 문자의 값을 딕셔너리에서 조회하여 리스트를 생성합니다.
# -> [0 , 1 , 0 , 10 , 0 , 1 , 0 , 10 , 0 , -1 , -2 , -1]

# sum() 함수는 리스트에 있는 모든 숫자의 합을 계산
# -> -1