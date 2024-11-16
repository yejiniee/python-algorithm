function solution(s) {
    return s
        .split(' ') // 공백으로 단어 분리
        .map(word => {
            // 단어의 첫 글자가 소문자 알파벳이면 대문자로 변환
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' '); // 공백으로 다시 합침
}