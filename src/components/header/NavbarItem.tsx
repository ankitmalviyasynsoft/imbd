'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

type NavbarItemProps = {
  title: string
  param: string
}


export default function NavbarItem(props: NavbarItemProps) {
  let { title, param } = props

  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${genre === param
          ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
          : ''
          }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  )
}
