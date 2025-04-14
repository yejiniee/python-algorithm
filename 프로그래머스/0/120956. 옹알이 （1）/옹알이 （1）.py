def solution(babbling):
    count = 0
    valid_words=["aya", "ye", "woo", "ma"]
    
    for word in babbling:
        temp = word # ayaye 
        for v in valid_words: # aya ye woo ma
            temp=temp.replace(v," ") 
        if(temp.strip()=="" and all(word.count(v)<=1 for v in valid_words )):
            count+=1;
            
    return count
   