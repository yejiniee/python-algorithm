def solution(arr):
    new_arr = []
    for i in arr:
        for j in range(i):
            new_arr.append(i)
    return new_arr