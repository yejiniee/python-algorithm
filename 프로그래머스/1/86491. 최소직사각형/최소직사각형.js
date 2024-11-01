function solution(sizes) {
    const sorted = sizes.map(innerArray => innerArray.sort((a, b) => b - a));
    
    const x=Math.max(...sorted.map(arr=>arr[0]));
    const y=Math.max(...sorted.map(arr=>arr[1]));
    
    return x*y;
}