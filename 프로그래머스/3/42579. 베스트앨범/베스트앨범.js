function solution(genres, plays) {
    var answer = [];
    let map = new Map();
    
    // 1. 해시맵에 장르별로 곡 넣기
    for (let i = 0; i < genres.length; i++) {
        if (!map.has(genres[i])) {
            map.set(genres[i], [[i, plays[i]]]); // 배열 형태로 곡 정보 추가
        } else {
            map.get(genres[i]).push([i, plays[i]]); // 기존 배열에 곡 추가
        }
    }
    
    // 2. 장르별로 총 재생 횟수 저장
    const genrePlayCount = new Map();
    map.forEach((songs, genre) => {
        const playCntByGenre = songs.reduce((sum, song) => sum + song[1], 0);
        genrePlayCount.set(genre, playCntByGenre);
    });
    
    // 3. 재생 횟수를 기준으로 장르 내림차순 정렬
    const sortedByPlaycnt = [...genrePlayCount.entries()].sort((a, b) => b[1] - a[1]);
    
    // 4. 각 장르에서 곡을 재생 횟수 순으로 정렬
    map.forEach((songs) => {
        songs.sort((a, b) => {
            if (b[1] === a[1]) {
                return a[0] - b[0]; // 재생 횟수가 같으면 인덱스 기준 오름차순
            }
            return b[1] - a[1]; // 재생 횟수 기준 내림차순
        });
    });
    
    // 5. 정렬된 장르 순서대로 상위 두 곡의 인덱스를 answer에 추가
    sortedByPlaycnt.forEach(([genre]) => {
        const topSongs = map.get(genre).slice(0, 2); // 상위 두 곡 선택
        topSongs.forEach(song => answer.push(song[0])); // 인덱스만 추가
    });

    return answer;
}