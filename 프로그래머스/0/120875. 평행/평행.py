def solution(dots):
    # 평행이 되는 경우
    # 1. 기울기가 같은 경우-> (y2-y1)/(x2-x1)
    
    # 총 조합 수: 4C2/2(순서가 바뀐 경우 나누기) = 3가지
        
    for i in range(4):
        for j in range(i+1, 4):
            temp_dots = dots[:]
            
            x1 = dots[i][0]
            y1 = dots[i][1]
            x2 = dots[j][0]
            y2 = dots[j][1]
            
            # 추출 후 i번째와 j번째 원소 제거하기
            # i와 j 중 큰 값을 먼저 제거해야 인덱스 오류 방지
            for idx in sorted([i, j], reverse=True):
                temp_dots.pop(idx)
            
            
            x3 = temp_dots[0][0]
            y3 = temp_dots[0][1]
            x4 = temp_dots[1][0]
            y4 = temp_dots[1][1]
            
            
            s1 = (y2-y1) / (x2-x1)
            s2 = (y4-y3) / (x4-x3)
            
            # 해당 쌍의 기울기가 같다면
            if(s1 == s2):
                return 1
        
            
    return 0




