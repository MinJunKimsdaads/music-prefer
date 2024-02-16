//영화 리스트

import * as React from 'react'
import ListItem1 from './ListItem1'
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


const List1 = () => {
  return(
    sample.map((item)=>{
      return(
        <ListItem1 item={{id: item.id, name: item.name}} key={item.id}></ListItem1>
      )
    })
  )
}

export default List1
