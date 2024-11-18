function solution(h1, m1, s1, h2, m2, s2) {
  
    function getCount(h, m, s){
        let [mCount, hCount] = [0, 0];

        // 누적된 값을 저장하는 변수
        mCount += h * 59;
        hCount += h * 60;

        let result = 0;

        mCount += m;
        hCount += m;
        result -= 1;

        const curMDegree = m * 6; // 분침의 현재 각도.
        const curHDegree = 30 * (h % 12) + 0.5 * m;
        // 초침이 분침과 겹친 것으로 간주하고 mCount를 증가
        const condition1 = curMDegree <= 5.9 * s; //5.9 * s: 초침이 현재까지 이동한 거리.
        const condition2 = curHDegree <= (6 - 1 / 120) * s;

        if (condition1) mCount += 1;
        if (condition2) hCount += 1;

        if (h >= 12) {
            hCount -= 1;
            result -= 1;
        }

        result += mCount + hCount;

        return result;
    };

    let result = getCount(h2, m2, s2) - getCount(h1, m1, s1);
    if (s1 === 0 && m1 === 0) result += 1;

    return result;
}