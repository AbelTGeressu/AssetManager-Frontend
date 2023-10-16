import React from 'react'


const Greet = (props)=>{
    console.log(props)
    return <h1>Hello {props.name} a.k.a {props.heroName}</h1>
}

export default  Greet