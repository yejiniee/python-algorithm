function solution(brown, yellow) {
    var answer = [];
    // brown = (노랑 가로+2)*2+노랑세로*2=(노랑가로+노랑세로+2)*2
    // 노랑 가로 + 노랑 세로=brown/2-2
    // yellow 의 약수 모음 배열
    let yellowArr=[];
    for(let i=0;i<=Math.floor(yellow/2);i++){
        if(yellow<2){
            yellowArr.push([1,1]);
            break;
        }
        if(yellow%i===0){
            yellowArr.push([i, yellow/i]); // 약수 짝 넣음
        }
    }
    for(let [a, b] of yellowArr)
    if((a+b) === (brown/2-2)){
        answer=[a+2,b+2];
    }
    
    return answer.sort((a,b)=>b-a);
}