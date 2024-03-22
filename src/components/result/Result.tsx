import React from 'react'
import Card from '../card/Card'

export default function Result({ results }: any) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result: any, index: number) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  )
}
