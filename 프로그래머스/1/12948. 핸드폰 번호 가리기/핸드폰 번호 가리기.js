function solution(phone_number) {
    var answer = '';
    const starLen = phone_number.length-4;
    const starStr = Array(starLen).fill('*').join('');
    answer = starStr + phone_number.slice(starLen);
        
    return answer;
}