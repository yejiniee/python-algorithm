# 내가 한 풀이
# 메모리: 10.3 MB, 시간: 0.04 ms
'''
def solution(num_str):
    new_list=list(num_str)
    
    return sum([int(s) for s in new_list])
'''

# 다른 사람의 풀이- 내장함수 map 사용
# 메모리: 10.2 MB, 시간: 0.04 ms
def solution(num_str):
    return sum(map(int, num_str))

# map 함수
# 반복 가능한 객체(ex. 리스트)의 각 요소에 대해 주어진 함수를 적용하고, 
# 그 결과를 새로운 반복 가능한 객체로 반환하는 함수

# map(int, num_str)
# -> num_str 리스트의 각 요소에 대해 int 함수를 적용하고 **이터레이터를 반환

# 이터레이터 vs 리스트
# 리스트는 메모리에 모든 요소를 저장하므로 즉시 모든 값을 사용할 수 있음
# 이터레이터는 메모리를 절약하며, 요청할 때마다 값을 생성하거나 제공하는 방식으로 동작

# **제너레이터는 이터레이터를 쉽게 만들 수 있는 강력한 도구이며, 
# 대규모 데이터 처리에서 메모리 효율성을 높일 수 있음