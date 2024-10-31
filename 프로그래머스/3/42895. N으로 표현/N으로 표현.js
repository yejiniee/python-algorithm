function solution(N, number) {
    const list = Array.from({length:9}).map((me, index) => new Set ([Number(String(N).repeat(index))]))
    for(let i=0;i<list.length;i++)if(list[i].has(number)) return i
    for (let i =1;i<9;i++){
        for(let j=1;j<i;j++){
            for(let x of list[j]){
                for(let y of list[i-j]){
                    const calc = [a,b,c,d] = [x+y, x-y, x*y, x/y]
                    for(component of calc)list[i].add(component)
                    if(a===number)return i
                    if(b===number)return i
                    if(c===number)return i
                    if(d===number)return i
                }
            }
        }
    }
    return -1
}