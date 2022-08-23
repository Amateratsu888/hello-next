import Link from 'next/link'
import React from 'react'

export default function listes(props) {

  return (
    <>
      <div className="w-full h-1/2 flex justify-center mx-0 mt-20 items-center flex-col">
        <h1 className='text-5xl font-sans'>Liste de vocabulaire</h1>
        <table className="text-2xl font-sans tableau border border-slate-700border-separate border-spacing-2 border border-slate-500 colunms-5 mt-8 text-center">
        <tbody>
          {props.array.map((item,index) => (

            <tr key={index}>
              <td className="border border-slate-700 px-8 py-4">
                <Link href={`listes/${item.name}`}>
                    <a>
                        <h3>
                        {item.name}
                        </h3>
                    </a>
                </Link>
              </td>
            </tr>
              ))}
            
        </tbody>
      </table>
      </div>
    </>
  )
}



export async function getStaticProps () {
  const data = await import('../../pathsvoc.json')
  const array = await data.englishList
  return {
    props : {array}
  }
}