//영화 리스트

import * as React from 'react'
import ListItem1 from './ListItem1'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List1 = () => (
  <div>
    <ListItem1></ListItem1>
  </div>
)

export default List1
