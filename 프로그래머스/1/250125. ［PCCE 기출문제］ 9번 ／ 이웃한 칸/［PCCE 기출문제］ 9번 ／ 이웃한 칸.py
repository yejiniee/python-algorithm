def solution(board, h, w):
    count = 0 # 같은 색깔로 칠해진 칸 개수
    n = len(board)
    dh = [0, 1, -1, 0]
    dw = [1, 0, 0, -1]
    for i in range(4):
        h_check = h + dh[i]
        w_check = w + dw[i]
        
        if((h_check >= 0 and h_check < n) and (w_check >= 0 and w_check < n)):
            if(board[h][w]==board[h_check][w_check]):
                count+=1
        
    return count