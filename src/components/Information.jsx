import React from 'react'

export default function Information({info}) {
   
    return (
        <div>
            <h1>{info.title}</h1>
            <p>{info.content}</p>
        </div>
    )
}
