export default async function getUserPost(id:number){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(!res)  throw new Error("failed fetch Data")
    return res.json()
}