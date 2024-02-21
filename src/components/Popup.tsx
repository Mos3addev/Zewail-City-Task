import React, { useEffect, useRef } from "react";
import { User } from "../Interfaces/Interfaces";
import Follow from "./Follow";
import Interest from "./interest";

interface PopupProps {
  userId: number;
  isOpen: boolean;
  activeTab: string;
  onClose: () => void;
  handleRemoveFollower: (userId: number, followerId: number) => void;
  handleRemoveFollowing: (userId: number, followerId: number) => void;
  handleRemoveInterest: (userId: number, interestId: number) => void;
  users: User[];
}

const Popup: React.FC<PopupProps> = ({
  userId,
  isOpen,
  activeTab,
  onClose,
  handleRemoveFollower,
  handleRemoveFollowing,
  handleRemoveInterest,
  users,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const user = users.find((user) => user.id === userId);

  if (!user) return null;

  return (
    <div className="popup-container">
      <div className="body" ref={popupRef}>
        <div className="header">
          <h4>{user.name}</h4>
          <div onClick={onClose}>X</div>
        </div>
        <div className="mb-3">
          {activeTab === "Following" && (
            <React.Fragment>
              <h4 className="text-center">Following</h4>
              <div className="tab">
                {user.following.map((followerId: number) => (
                  <Follow
                    key={followerId}
                    users={users}
                    followerId={followerId}
                    handleRemoveFollow={handleRemoveFollowing}
                    userId={userId}
                  />
                ))}
              </div>
            </React.Fragment>
          )}
          {activeTab === "Followers" && (
            <React.Fragment>
              <h4 className="text-center">Followers</h4>
              <div className="tab">
                {user.follower?.map((followerId: number) => (
                  <Follow
                    key={followerId}
                    users={users}
                    followerId={followerId}
                    handleRemoveFollow={handleRemoveFollower}
                    userId={userId}
                  />
                ))}
              </div>
            </React.Fragment>
          )}
          {activeTab === "Interests" && (
            <React.Fragment>
              <h4 className="text-center">Interests</h4>
              <div className="tab">
                {user.interests?.map((interestId: number) => (
                  <Interest
                    key={interestId}
                    interestId={interestId}
                    handleRemoveInterest={handleRemoveInterest}
                    userId={userId}
                  />
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
