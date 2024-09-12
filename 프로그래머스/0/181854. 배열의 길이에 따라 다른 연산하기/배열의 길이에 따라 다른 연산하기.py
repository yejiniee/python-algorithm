def solution(arr, n):
    # return [i+n if len(arr)%2!=0  for i in arr]

    if len(arr)%2!=0:
        return [arr[i]+n if i%2==0 else arr[i] for i in range(len(arr))]
    else:
        return [arr[i]+n if i%2!=0 else arr[i] for i in range(len(arr))]
        
            