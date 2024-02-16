//검색 시 나오는 리스트
import * as React from 'react'
import ListItem2 from './ListItem2'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

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

const List2 = () => {
  return(
    sample.map((item)=>{
      return(
        <ListItem2 item={{id: item.id, name: item.name}}></ListItem2>
      )
    })
  )
}

export default List2
