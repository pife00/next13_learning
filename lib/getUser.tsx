export default async function getUser(id:number){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if(!res)  throw new Error("failed fetch Data")
    return res.json()
}