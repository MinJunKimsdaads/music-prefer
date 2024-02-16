//분석 리스트
import * as React from 'react'
import ListItem3 from './ListItem3'
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

const List3 = () => {
  return(
    sample.map((item)=>{
      return(
        <ListItem3 item={{id: item.id, name: item.name}}></ListItem3>
      )
    })
  )
}



export default List3
