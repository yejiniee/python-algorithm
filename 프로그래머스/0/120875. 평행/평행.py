def solution(dots):
    answer = 0
    [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    answer1 = (y2-y1)/(x2-x1) == (y4-y3)/(x4-x3)
    answer2 = (y3-y1)/(x3-x1) == (y4-y2)/(x4-x2)        
    answer3 = (y4-y1)/(x4-x1) == (y3-y2)/(x3-x2)
    
    if(answer1 or answer2 or answer3): 
        answer=1
    
    return answer