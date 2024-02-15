import React from 'react'
import Link from 'next/link'
import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <Link href="/[id]" as={`/${user.id}`}>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </Link>
)

export default ListDetail
