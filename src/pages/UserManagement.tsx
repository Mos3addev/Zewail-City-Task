import React from 'react'
import UserList from '../components/UserList'

const UserManagement: React.FC = () => {
    return (
      <div>
        <h2 className='p-2'>User Management</h2>
        <UserList />
      </div>
  )
}

export default UserManagement