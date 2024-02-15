import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

// type Props = {
//   data: User
// }

const ListItem2 = () => (
  <Link href="/[id]" as={`/5`}>
    <div>item2</div>
  </Link>
)

export default ListItem2

//아이디, 이미지, 제목, 출시일
