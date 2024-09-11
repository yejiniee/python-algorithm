def solution(arr, delete_list):
    answer = []
    for i in delete_list:
        for j in arr:
            if i==j:
                arr.remove(j)
    return arr