function solution(phone_book) {
    var answer = true;
    // 있으면 false 없으면 true
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i+1].startsWith(phone_book[i]))
            return false;
    }
    return answer;
}