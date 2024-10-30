function solution(genres, plays) {
    var answer = [];
    let map = new Map();
    let playCountByGenre=new Map();
    
     // 1. 해시맵에 장르별로 곡 넣고, 동시에 총 재생 횟수 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        // 곡 정보 추가
        if (!map.has(genre)) {
            map.set(genre, [[i, play]]); // 장르에 첫 곡 추가
        } else {
            map.get(genre).push([i, play]); // 기존 배열에 곡 추가
        }
        
        // 총 재생 횟수 계산
        playCountByGenre.set(genre, (playCountByGenre.get(genre) || 0) + play);
    }

    
    // 2. 재생 횟수를 기준으로 장르 내림차순 정렬
    // entries()를 사용하여 키-값 쌍을 배열로 변환한 후 정렬해야 함
    const sortedByPlayCount = [...playCountByGenre.entries()].sort((a, b) => b[1] - a[1]);
    
    // 3. 각 장르에서 곡을 재생 횟수 순으로 정렬
    map.forEach((songs) => {
        songs.sort((a, b) => {
            if (b[1] === a[1]) {
                return a[0] - b[0]; // 재생 횟수가 같으면 인덱스 기준 오름차순
            }
            return b[1] - a[1]; // 재생 횟수 기준 내림차순
        });
    });
    
    // 4. 정렬된 장르 순서대로 상위 두 곡의 인덱스를 answer에 추가
    sortedByPlayCount.forEach(([genre]) => { // [genre]: 비구조화 할당
        const topSongs = map.get(genre).slice(0, 2); // 상위 두 곡 선택
        topSongs.forEach(song => answer.push(song[0])); // 인덱스만 추가
    });

    return answer;
}