# 내가 한 풀이
# 메모리: 10.1 MB, 시간: 0.01 ms
'''
def solution(num_list):
    odd = [num_list[i] for i in range(0,len(num_list),2)]
    even = [num_list[i] for i in range(1,len(num_list),2)]
    
    return max(sum(odd), sum(even)) 
'''

# 남이 한 풀이- 리스트 슬라이싱 사용
# [::2]는 리스트의 처음부터 끝까지 특정 간격(2)으로 선택함-인덱스 짝수
def solution(num_list):
    return max(sum(num_list[::2]), sum(num_list[1::2]))