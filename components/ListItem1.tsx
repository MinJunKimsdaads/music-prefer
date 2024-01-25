import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

// type Props = {
//   data: User
// }

const ListItem1 = () => (
  <Link href="/music/[id]" as={`/music/1`}>
    <div>item1</div>
  </Link>
)

export default ListItem1

///id, 이미지, 제목, 평점(점수)
