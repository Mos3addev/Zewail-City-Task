import React from 'react'
import DeleteIcon from './Icons/DeleteIcon'
import interestData from "../data/interests.json";

type InterestProps = {
    interestId:number,
    handleRemoveInterest: (userId: number, interestId: number) => void;
    userId: number;
}

const Interest: React.FC<InterestProps> = ({
interestId,
handleRemoveInterest,
userId
}) => {
    return (
        <div className="item" key={interestId}>
        {interestData.find((i) => i.id === interestId)?.name}
        <span onClick={() => handleRemoveInterest(userId, interestId)}>
          <DeleteIcon />
        </span>
      </div>
  )
}

export default Interest