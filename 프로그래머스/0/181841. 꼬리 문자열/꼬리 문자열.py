'''
def solution(str_list, ex):
    for i in str_list: # abc bbc cbc
        if(ex in i): # c
            str_list.remove(i)
    
    return ''.join(str_list)
'''
# 문제점: 요소를 삭제하면서 인덱스가 변경되어 예상대로 작동하지 않음
# 해결책: 1. 제거 할 요소를 저장하고 2. 저장한 요소들을 리스트에서 제거함

def solution(str_list, ex):
    remove_list=[i for i in str_list if ex in i]
    
    for i in remove_list: 
        str_list.remove(i)
    
    return ''.join(str_list)

'''
1. [i*k if k % 2 != 0 else i+k for i in arr]

2. [i for i in str_list if ex in i]

Q. 둘 다 리스트 컴프리헨션 안에서 조건문을 사용하는데,
   조건문의 위치가 다른 이유는?

A. 리스트 컴프리헨션에서 조건문의 위치에 따라 다른 방식으로 조건이 적용됨
  1번은 if-else 조건이 결과표현식(i*k)에 적용됨
  2번은 if 조건이 요소를 선택하는데(str_list) 적용됨
  즉, 어디에 적용되냐에 따라 조건식이 가까운 곳에 배치됨

'''