//영화2 리스트
import * as React from 'react'
import ListItem2 from './ListItem2'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List2 = () => (
  <div>
    <ListItem2></ListItem2>
  </div>
)

export default List2
