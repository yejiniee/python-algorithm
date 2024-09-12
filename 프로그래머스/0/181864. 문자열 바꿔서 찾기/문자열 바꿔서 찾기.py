def solution(myString, pat):
    newString = ''.join(['B' if s=='A' else 'A' for s in myString])
    
    return int(pat in newString)

