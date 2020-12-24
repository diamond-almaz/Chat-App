import React from 'react'

export const Input=({input, meta,...props})=>{
    const hasError= meta.touched && meta.error
    return (
        <>
        <input {...input} {...props} /> {hasError?<span>{meta.error}</span>: ''}
        </>
        )
}