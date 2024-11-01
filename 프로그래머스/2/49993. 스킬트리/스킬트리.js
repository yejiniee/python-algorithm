function solution(skill, skill_trees) {
    var answer = 0;
    // [^CBD]가 아닌 모든 문자열 찾기
    var regex = new RegExp(`[^${skill}]`, 'g');
 
    return skill_trees
        .map((x) => x.replace(regex, ''))
        .filter((x) => {
            return skill.indexOf(x) === 0 || x === "";
        })
        .length
}