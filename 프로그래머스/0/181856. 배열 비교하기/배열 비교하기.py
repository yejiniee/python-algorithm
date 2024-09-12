# 내가 한 풀이
# 메모리: 10.2 MB, 시간: 0.01 ms
'''
def solution(arr1, arr2):
    if len(arr1)>len(arr2):
        return 1
    elif len(arr1)==len(arr2):
        if(sum(arr1)>sum(arr2)):
            return 1
        elif (sum(arr1)<sum(arr2)) :
            return -1
        return 0
    else:
        return -1
'''

    
# 남이 한 풀이

def solution(arr1, arr2):
    return (len(arr1) > len(arr2)) - (len(arr2) > len(arr1)) or (sum(arr1) > sum(arr2)) - (sum(arr2) > sum(arr1))

# len(arr1) > len(arr2)) - (len(arr2) > len(arr1))
# -> arr1의 길이가 arr2의 길이보다 크면 true(1)-false(0) => 'return 1'
#    arr2의 길이가 arr1의 길이보다 크면 0 - 1 => 'return -1'
#    같으면 0 - 0 => 'return 0'

# (sum(arr1) > sum(arr2)) - (sum(arr2) > sum(arr1))
# -> arr1의 합이 arr2의 합보다 크면 1 - 0 => 'return 1'
#    arr2의 합이 arr1의 합보다 크면 0 - 1 => 'return -1'
#    같으면 0 - 0 => 'return 0'

