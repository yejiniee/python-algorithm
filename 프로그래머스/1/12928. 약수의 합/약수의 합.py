def solution(n):
    answer = 1+n
    
    if n==0:
        return 0
    if n==1:
        return 1

    for i in range(2, n): # 2 3 4
        if n%i == 0:
            answer+=i
            print(i, answer)
            
    return answer