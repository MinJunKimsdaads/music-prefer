import React from 'react'
import Link from 'next/link'
import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListItem2 = ({ item: user }: ListDetailProps) => {
  return(
    <Link href="/[id]" as={`/${user.id}`}>
      <div>
        <div>사진</div>
        <div>
          <div>제목</div>
          <div>평점</div>
        </div>
      </div>
    </Link>
  )
}

export default ListItem2

///id, 이미지, 제목, 평점(점수)
