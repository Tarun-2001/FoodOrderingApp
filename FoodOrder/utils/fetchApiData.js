import { restaurantData } from "./mockData"

export const fetchSwigyApi = async()=>{
  const delay = Math.floor(Math.random()*(1000-500+1)+500);

  console.log(delay)
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(restaurantData.restaurants)
      },delay)
    })
  }