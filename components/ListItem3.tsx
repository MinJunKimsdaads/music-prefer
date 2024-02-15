import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

// type Props = {
//   data: User
// }

const ListItem3 = () => (
  <Link href="/[id]" as={`/5`}>
    <div>item3</div>
  </Link>
)

export default ListItem3
