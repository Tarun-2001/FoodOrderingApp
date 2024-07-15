export const setCache = (key,data,expireTime = 6000) => {

    const expires = Date.now() + expireTime
    const cacheData = {data,expires}
    localStorage.setItem(key,JSON.stringify(cacheData))
};
export const getCache = (key) => {
    const data = localStorage.getItem(key)
    if(!data) return
    const parsedData = JSON.parse(data);
    if(Date.now()>data.expires){
        localStorage.removeItem(key)
        return
    }
    return parsedData.data
};
