def solution(my_string):
    answer = []
    for i in my_string:
        answer = [my_string[i:len(my_string)] for i in range(len(my_string))]
    answer.sort()
    return answer