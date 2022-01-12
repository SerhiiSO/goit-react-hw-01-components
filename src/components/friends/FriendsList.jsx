import FriendListItem from "./FriendListItem";
import { Friendlisted } from "../styles/friendsList/FriendsList.styled";
import PropTypes from "prop-types";

export default function Friendlist({ friends }) {
  return (
    <Friendlisted>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friendData={friend} />
      ))}
    </Friendlisted>
  );
}

Friendlist.propTypes = {
  friends: PropTypes.array.isRequired,
};
