
type Props={
    body:string
}

export default function UserPost({body}:Props){
    return(
        <p>
            {body}
        </p>
    )
}