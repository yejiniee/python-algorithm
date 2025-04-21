def solution(n):
    digits = list(map(int, str(n)))  # 숫자를 문자열로 → 각 글자를 정수로
    return sum(digits)