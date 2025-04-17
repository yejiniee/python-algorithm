def solution(lines):
    points = [0]*201 
    
    # 암묵적 구조 분해 할당
    for x, y in lines:
        for i in range(x,y):
            points[i+100]+=1
    
    return sum(1 for p in points if p>=2)