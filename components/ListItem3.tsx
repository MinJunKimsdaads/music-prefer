import React from 'react'
import Link from 'next/link'
import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetai3 = ({ item: user }: ListDetailProps) => (
  <Link href="/[id]" as={`/${user.id}`}>
    <div>
      <div>사진</div>
      <div>
        <div>
            <span>등수</span>
        </div>
        <div>
            <div>제목</div>
            <div>가수</div>
            <div>평점</div>
        </div>
      </div>
    </div>
  </Link>
)

export default ListDetai3