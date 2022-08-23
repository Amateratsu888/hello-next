import React from 'react'

export default function index(props) {
console.log("🚀 ~ file: index.js ~ line 4 ~ index ~ props", props)
    
  return (
    <>
        <h1>Le prix du bitcoin est :</h1>
    </>
  )
}

export async function getServerSideProps() {

    const quotes = await fetch('https://apiv2.bitcoinaverage.com/exchanges/outliers')
    const data = await quotes.json()
    return {
        props: {data}
    }
}
