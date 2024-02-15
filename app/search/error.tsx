'use client'
import Error from "../../components/error"

export default function GlobalError({
    error,
    reset,
}:{
    error: Error & {digest?:string}
    reset: () => void
}){
    return (
        <html>
            <body>
                <Error></Error>
                <button onClick={()=>reset()}>Try again</button>
            </body>
        </html>
    )
}