import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const error = useRouteError()
    console.log(error)
    return (
       <div>
         <h1>Custom Error Handling Component here!!!</h1>
         <h2>Message: {error.error.message}</h2>
         <h3>Status: {error.status}</h3>
         <h3>StatusText: {error.statusText}</h3>
       </div>
    )
}

export default Error