export default function HobbyLinks() {
  let hobbyLinks = ["https://www.youtube.com/", "https://www.skyscanner.com/"];

  return (
    <div>
      <h3>My Hobbies</h3>
      <a href = {hobbyLinks[0]}>YouTube</a>
      <a href = {hobbyLinks[1]}>Traveling</a>
    </div>
  );
}