import { useRouteError } from "react-router-dom"

const Error = (props)=>{
    const error = useRouteError()
    const message = error?.error?.message || props.message
    const status = error?.status || props.status
    const statusText = error?.statusText || props.statusText

    return (
       <div>
         <h1>Custom Error Handling Component here!!!</h1>
         <h2>Message: {message}</h2>
         <h3>Status: {status}</h3>
         <h3>StatusText: {statusText}</h3>
       </div>
    )
}

export default Error