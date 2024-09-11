def solution(my_string, is_prefix):
    answer = 0
    if(my_string[0:len(is_prefix)]==is_prefix):
        return 1
    else:
        return 0