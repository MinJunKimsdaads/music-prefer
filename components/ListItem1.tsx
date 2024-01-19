import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

// type Props = {
//   data: User
// }

const ListItem1 = () => (
  <Link href="/music/[id]" as={`/music`}>
    <div>test</div>
  </Link>
)

export default ListItem1
