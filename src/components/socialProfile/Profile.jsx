import PropTypes from "prop-types";
import {
  Container,
  Description,
  Avatar,
  UserName,
  UserData,
  UserStats,
  Label,
  Quantity,
} from "../styles/socialProfile/Profile.styled";
export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User Avatar" />
        <UserName>{username}</UserName>
        <UserData>@{tag}</UserData>
        <UserData>{location}</UserData>
      </Description>
      <UserStats>
        <Label>
          <span>Followers </span>
          <Quantity>{stats.followers}</Quantity>
        </Label>
        <Label>
          <span>Views </span>
          <Quantity>{stats.views}</Quantity>
        </Label>
        <Label>
          <span>Likes </span>
          <Quantity>{stats.likes}</Quantity>
        </Label>
      </UserStats>
    </Container>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
