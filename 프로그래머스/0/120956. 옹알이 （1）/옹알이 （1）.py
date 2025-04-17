# 1. babbling 전체를 순회한다.
    # 2. valid_words 전체를 순회하며 일치하는 단어를 제거한다.
        # 2-1. 이 과정을 끝내면, 검증(빈 문자열''인지, valid_words가 최대 한번만 등장하는지)
        # 2-2. 통과하면 count 추가

def solution(babbling): 
    count = 0
    valid_words= ["aya", "ye", "woo", "ma"]
    
    for word in babbling: # ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]
        temp = word
        for v in valid_words: # "aya", "ye", "woo", "ma"
            temp = temp.replace(v, ' ')
        if (temp.strip() == '' and all(word.count(v) <=1 for v in valid_words)):
            count+=1
        
    return count