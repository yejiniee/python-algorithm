function solution(s) {
    var answer = [0, 0];
    let arr;

    while(s!=='1'){
        arr=s.split('').filter((num) => num ==='1'); // 0을 제거한 배열
        let c=arr.length; // 새로운 배열 길이
        //제거할 0의 갯수 더하기
        answer[1]+=s.length-arr.length;
        
        // c를 이진변환
        // toString()은 기본적으로 숫자 데이터를 문자열로 변환하지만, 
        // toString(2)와 같이 특정 진법을 지정하면 해당 진법으로 표현된 숫자를 문자열로 변환
        if(c>0)
            s=c.toString(2); 
        answer[0]++;
    }
    
    return answer;
}