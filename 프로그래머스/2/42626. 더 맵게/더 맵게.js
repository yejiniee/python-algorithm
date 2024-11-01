function solution(scoville, K) {
    let answer = 0; // 섞은 횟수
    const heap=new minHeap();
    for(let s of scoville){
      heap.insert(s);  
    }
    
    if (heap.peak() >= K) return 0; 

    while(heap.peak()<K){
        if (heap.size() < 2) return -1; // 힙에 원소가 2개 미만이면 -1 반환
        
        let s1=heap.remove();
        let s2=heap.remove();
        heap.insert(calNewScoville(s1, s2));
        answer++;
    }
   
    
    return answer;
}

function calNewScoville(s1, s2){
    return s1 + s2*2;
}


class minHeap{
    constructor(){
        this.heap=[];
    }
    
    getLeftIndex(index){
        return index*2+1;
    }
    
    getRightIndex(index){
        return index*2+2;
    }
    
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    
    
    heapifyUp(){
        let index=this.heap.length-1;
        while(index>0){
            let parentIndex=this.getParentIndex(index);
            
            // 부모랑 비교해서 부모보다 작으면 자리 바꿈
            // 인덱스는 부모인덱스로 바꿈
            if(this.heap[parentIndex]> this.heap[index]){
                
                [this.heap[index], this.heap[parentIndex]]=[this.heap[parentIndex], this.heap[index]];
                index=parentIndex;                                                                       
            } else{ // 부모보다 크면 바꿀 필요x 끝냄
                break;
            }
        }
    }
    
    heapifyDown(){
        // 인덱스 0부터 시작
        let index=0;
        // 리프노드에 도달하면 반복문 탈출
        while(this.getLeftIndex(index)<this.heap.length){
            let leftChildIndex=this.getLeftIndex(index);
            let rightChildIndex=this.getRightIndex(index);
            
            // 왼쪽 값이 더 작다고 가정
            let smallerChildIndex=leftChildIndex;
            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex])
                // 만약 오른쪽 자식의 값이 더 작다면 smaller 바꿔줌
                smallerChildIndex=rightChildIndex;
            
            // 부모와 자식 비교
            if(this.heap[index]>this.heap[smallerChildIndex]){
                [this.heap[index], this.heap[smallerChildIndex]]=[this.heap[smallerChildIndex], this.heap[index]];
                index=smallerChildIndex;
            } else{
                break;
            }
        }
        
    }
    
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    
    remove() {
        if(this.heap.length===0)
            return null;
        if(this.heap.length===1)
            return this.heap.pop();
        
        let top=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown();
        return top;
    }
    
    peak(){
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    size(){
        return this.heap.length;
    }
}


