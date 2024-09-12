def solution(a, b):
    if (a%2!=0 and b%2!=0):
        return a**2 + b**2
    elif (a%2==0 and b%2==0):
        if(a>b):
            return a-b
        else:
            return b-a
    else:
        return 2*(a+b)
            


