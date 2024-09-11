# 내가 한 풀이
# 메모리: 10.2 MB, 시간: 0.00 ms
'''
def solution(num_list):
    if (num_list[-1]>num_list[-2]):
        num_list.append(num_list[-1]-num_list[-2])
    else:
        num_list.append(num_list[-1]*2)
    
    return num_list
'''

# 다른 사람의 풀이
def solution(num_list):
    num_list.append(num_list[-1]-num_list[-2] if num_list[-1]>num_list[-2] else num_list[-1]*2)
    return num_list