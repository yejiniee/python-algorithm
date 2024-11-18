function solution(video_len, pos, op_start, op_end, commands) {
   
    function move(currTime, command, videoLenTime, opStartTime, opEndTime){
        if(command==='next'){
            currTime+=10;
            
            if(currTime>videoLenTime)
                return videoLenTime;
            
            
            return currTime;
        }
        
        
        if(command==='prev'){
            currTime-=10;
            
            if(currTime<0)
                return 0;
            
            return currTime;
            
        }
    }
    
    let currArr=pos.split(':');
    let currTime=currArr[0]*60+Number(currArr[1]);
    
    const opStartArr=op_start.split(":");
    let opStartTime=opStartArr[0]*60+Number(opStartArr[1]);
    
    const opEndArr=op_end.split(":");
    let opEndTime=opEndArr[0]*60+Number(opEndArr[1]);
    
    const videoLenArr=video_len.split(':');
    const videoLenTime=videoLenArr[0]*60+Number(videoLenArr[1]);
    if(currTime>=opStartTime && currTime<=opEndTime)
                currTime=opEndTime;
    
    for(let command of commands){
        
        currTime = move(currTime, command, videoLenTime, opStartTime, opEndTime);
        if(currTime>=opStartTime && currTime<=opEndTime)
                currTime=opEndTime;
    }
  
    let min = Math.floor(currTime/60);
    let sec = currTime % 60;
    
    if(min<10)
        min='0'+String(min);

    if(sec<10)
        sec='0'+String(sec);
    
    return `${min}:${sec}`;
}