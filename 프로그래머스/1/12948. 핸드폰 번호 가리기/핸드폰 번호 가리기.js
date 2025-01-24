function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}

function solution(phone_number) {
    var answer = '';
    const starLen = phone_number.length-4;
    const starStr = Array(starLen).fill('*').join('');
    answer = starStr + phone_number.slice(starLen);
        
    return answer;
}


function hide_numbers(phone_number){
    return phone_number.split('').fill('*', 0, phoneNumber.length - 4).join('');
}

function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
}
