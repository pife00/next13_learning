import { useRouter } from "next/navigation"
import getUser from "../../../../lib/getUser"
import getUserPost from "../../../../lib/getUserPost"
import {Users,Post} from "../../../../models/User"
import { Suspense } from "react"
import UserPost from "./components/UserPost"
import { Metadata } from "next"

type Params = {
    params:{
        id:number
    }
}

export async function generateMetadata({params:{id}}:Params):Promise<Metadata>{
    const userData:Promise<Users> =  getUser(id)
    const userPost:Promise<Post> = getUserPost(id) 

    const user:Users = await userData;

    return{
        title:user.name,
        description:`this is the page of ${user.name}`
    }
}


export default async function UserPage({params:{id}}:Params){
    const userData:Promise<Users> =  getUser(id)
    const userPost:Promise<Post> = getUserPost(id) 
    
   

    const[user,post] = await Promise.all([userData,userPost])
   // const router = useRouter();
   // const {id} = router.query
    return(
        <div>
            <h2 className="text-2xl" > Hello Mr {user.name} </h2>
            <Suspense fallback={<h2>Loading...</h2>} >
                <UserPost body={post.body} /> 

            </Suspense>
        </div>
    )
}