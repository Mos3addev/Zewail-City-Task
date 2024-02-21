import React from 'react'
import { User } from '../Interfaces/Interfaces'
import DeleteIcon from './Icons/DeleteIcon'

type FollowProps = {
    users: User[];
    followerId:number,
    handleRemoveFollow: (userId: number, followerId: number) => void;
    userId: number;
}

const Follow: React.FC<FollowProps> = ({
users,
followerId,
handleRemoveFollow,
userId
}) => {
    return (
    <div className="item" key={followerId}>
    {users.find((f: User) => f.id === followerId)?.name}
    <span onClick={() => handleRemoveFollow(userId, followerId)}>
      <DeleteIcon />
    </span>
  </div>

  )
}

export default Follow