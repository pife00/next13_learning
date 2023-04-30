import React from 'react'

export default async function getAllUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!res){
        throw new Error("failed fetch Data")
    }
    return res.json()
}
