function solution(begin, target, words) {
    // 가장 짧은 변환 과정 => 최단거리?
    if (!words.includes(target)) return 0;

    function isSimilar(wordA, wordB) {
        let count = 0;
        for(let i=0;i<wordA.length;i++){
             if (wordA[i] === wordB[i]) count++;
        }
       
        if (count === wordA.length - 1) return true;
        return false;
    }

    const queue = [];
    const visited = new Array(words.length).fill(false);

    queue.push([begin, 0]); // [단어, 현재 단계 수]

    while (queue.length > 0) {
        const [currentWord, count] = queue.shift();

        if (currentWord === target) return count;

        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && isSimilar(currentWord, words[i])) {
                visited[i] = true;
                queue.push([words[i], count + 1]);
            }
        }
    }

    return 0;
}
