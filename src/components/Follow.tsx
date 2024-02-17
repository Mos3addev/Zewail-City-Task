import React from 'react'
import { User } from '../Interfaces/Interfaces'
import DeleteIcon from './Icons/DeleteIcon'

type FollowProps = {
    users: User[];
    followerId:number,
    handleRemoveFollower: (userId: number, followerId: number) => void;
    userId: number;
}

const Follow: React.FC<FollowProps> = ({
users,
followerId,
handleRemoveFollower,
userId
}) => {
    return (
    <div className="item" key={followerId}>
    {users.find((f: User) => f.id === followerId)?.name}
    <span onClick={() => handleRemoveFollower(userId, followerId)}>
      <DeleteIcon />
    </span>
  </div>

  )
}

export default Follow