export const timeFormatText = (seconds) => {

    if(Math.floor(seconds / 60) < 10 && (seconds % 60) < 10){
        return (Math.floor(seconds / 60)) + ':0' + (seconds % 60)
    }
    else if(Math.floor(seconds / 60) < 10 && (seconds % 60) >= 10){
        return (Math.floor(seconds / 60)) + ':' + (seconds % 60)
    }
    else if(Math.floor(seconds / 60) >= 10 && (seconds % 60) >= 10){
        return (Math.floor(seconds / 60)) + ':' + (seconds % 60)
    }
    else if(Math.floor(seconds / 60) >= 10 && (seconds % 60) < 10){
        return (Math.floor(seconds / 60)) + ':0' + (seconds % 60)
    }
    else{
        return "0:00"
    }

}