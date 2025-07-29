def solution(numbers):
    answer = ''
    # 1. 문자형으로 만든다
    '''
    numbers 리스트 안의 숫자들을
    모두 문자열(str)로 바꾸고,
    그 결과를 다시 리스트로 만든다
    '''
    numbers = list(map(str, numbers))
    
    # 2. 비교해서 정렬한다
    '''
    x*3인 이유
    숫자를 사전순으로 비교하기 위해
    3 vs 30
    3이 앞에 와야 하지만, 30이 사전순으로앞에 옴.
    그래서 안전하게 최소 3번 이상 곱해서
    333 vs 303030=> 333이 앞에 옴.
    이런식으로 배치됨.
    '''
    numbers.sort(key=lambda x: x*3, reverse=True)
    
    # 3. 정렬 후 이어붙이기
    '''
    "빈 문자열('')을 기준으로"
    numbers 리스트 안의 문자열들을
    "하나의 문자열로 이어붙인다"
    '''
    answer = ''.join(numbers)
    
    # 4. "0000" 같이 0으로만 이루어진 경우 처리
    if answer[0] == '0':
        return '0'
    
    return answer

    # return str(int(''.join(numbers)))
    # int해주면 0000을 0으로 변환, 그리고 다시 str()로 문자열로 변환