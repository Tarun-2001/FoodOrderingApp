import React ,{useState} from 'react';

const useOnlineStatus = () => {
    const [onlineStatus,setonlineStatus] = useState(true)
    window.addEventListener("online", () => {
        setonlineStatus(true)
      });
      window.addEventListener("offline", () => {
       setonlineStatus(false)
      });
    return onlineStatus
}

export default useOnlineStatus;
