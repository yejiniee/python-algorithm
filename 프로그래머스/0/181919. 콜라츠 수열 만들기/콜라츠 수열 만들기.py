def solution(n):
    arr=[n]
    while(n != 1):
        if n % 2 == 0:
            n /= 2
        else:
            n = 3 * n + 1
        arr.append(n)
            
    return arr