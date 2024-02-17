import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, removeFollower, removeInterest } from "../Redux/Slice/userSlice";
import { User } from "../Interfaces/Interfaces";
import { Table } from "react-bootstrap";
import ViewIcon from "./Icons/ViewIcon";
import Popup from "./Popup";

const UserList: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  const users = useSelector((state: any) => state.users.users);
  const dispatch = useDispatch();
  const handleDeleteUser = (id: number) => dispatch(deleteUser(id));
  const handleRemoveInterest = (userId: number, interest: number) => dispatch(removeInterest({ userId, interest }));
  const handleRemoveFollower = (userId: number, followerId: number) => dispatch(removeFollower({ userId, followerId }));

  const openPopup = (userId: number, tab: string) => {
    setSelectedUserId(userId);
    setActiveTab(tab);
  };

  const closePopup = () => {
    setSelectedUserId(null);
    setActiveTab("");
  };

  return (
    <React.Fragment>
      <Table className="table" responsive>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Followers</th>
            <th>Interests</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.slice().sort((a:User, b:User) => b.following?.length - a.following?.length).map((user: User) => (
            <tr key={user.id} className="text-center">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                {user.following?.length !== undefined && user.following?.length !== 0 && (
                  <React.Fragment>
                    {user.following?.length}{" "}
                    <span onClick={() => openPopup(user.id, "Followers")}>
                      <ViewIcon />
                    </span>
                  </React.Fragment>
                )}
              </td>
              <td>
                {user.interests?.length !== undefined && user.interests?.length !== 0 && (
                  <React.Fragment>
                    {user.interests?.length}{" "}
                    <span onClick={() => openPopup(user.id, "Interests")}>
                      <ViewIcon />
                    </span>
                  </React.Fragment>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger text-white"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Popup
        userId={selectedUserId || 0}
        isOpen={selectedUserId !== null}
        activeTab={activeTab}
        onClose={closePopup}
        handleRemoveFollower={handleRemoveFollower}
        handleRemoveInterest={handleRemoveInterest}
        users={users}
      />
    </React.Fragment>
  );
};

export default UserList;
