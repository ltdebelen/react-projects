const ProfileCard = ({
  name,
  profilePicUrl,
  bio,
}: {
  name: string;
  profilePicUrl: string;
  bio: string;
}) => {
  return (
    <div>
      <h1>Name, {name}!</h1>
      <img src={profilePicUrl} alt={`${name}'s profile`} />
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
