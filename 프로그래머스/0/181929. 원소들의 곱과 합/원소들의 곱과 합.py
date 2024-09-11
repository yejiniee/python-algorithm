def solution(num_list):
    mul=1
    add=0
    for i in num_list:
        mul*=i
        add+=i
        
    return int(mul<add**2)

# sum(num_list) ** 2 으로 사용할 수 있다.