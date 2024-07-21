export const useDebounse = (callback, delay)=>{

    let timmer;
    return function(...args){
        if(timmer) clearTimeout(timmer)
        timmer = setTimeout(()=>callback(...args),delay)
    }
}

