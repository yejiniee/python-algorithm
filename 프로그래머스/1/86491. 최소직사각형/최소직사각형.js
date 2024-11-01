function solution(sizes) {
    const sorted = sizes.map(innerArray => innerArray.sort((a, b) => b - a));
    
    const w=Math.max(...sorted.map(arr=>arr[0]));
    const h=Math.max(...sorted.map(arr=>arr[1]));
    
    return w*h;
}