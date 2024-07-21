export const useThrottling = (callBack,delay)=>{

    let flag = true
    return function(...args){
        if(flag){
            flag = false
            callBack(...args)
            setTimeout(()=>flag = true,delay)
        }
    }
}
