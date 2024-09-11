def solution(a, b):
    addStr=str(a)+str(b)
    mul=2*a*b
    return (int(addStr) if int(addStr)>=mul else mul) 