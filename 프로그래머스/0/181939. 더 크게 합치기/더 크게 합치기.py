def solution(a, b):
    aToB=int(str(a)+str(b))
    bToA=int(str(b)+str(a))
    return max(aToB, bToA)