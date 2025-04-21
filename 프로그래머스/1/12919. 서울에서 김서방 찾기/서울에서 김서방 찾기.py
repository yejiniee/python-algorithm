def solution(seoul):
    index = [ i for i in range(len(seoul)) if seoul[i] == 'Kim'][0]
    
    return '김서방은 '+str(index)+"에 있다"