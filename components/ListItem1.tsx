import React from 'react'
import Link from 'next/link'
import ListDetail from './ListDetail';
import { User } from '../interfaces'

// type Props = {
//   data: User
// }

const ListItem1 = () => {
  const sample = [
    {
      id:0,
      name:'a',
    },
    {
      id:1,
      name:'b',
    },
    {
      id:2,
      name:'c',
    },
    {
      id:3,
      name:'e',
    },
  ];

  return(
    sample.map((item)=>{
      return(
        <ListDetail item={{id: item.id, name: item.name}}></ListDetail>
      )
    })
  )
}

export default ListItem1

///id, 이미지, 제목, 평점(점수)
