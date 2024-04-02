import background from "../../assets/images/background.svg";
import shield from "../../assets/images/shield-icon.svg";
import team from "../../assets/images/team-icon.svg";
import pfp from "../../assets/images/pfp.svg";

function RotatingIcons() {
  return (
    <div className="rotating-icons">
      <div className="rotating-div">
        <img src={pfp} alt="profile picture" className="orbit-1 imoge-1" />
        <img src={shield} alt="shield icon" className="orbit-2 imoge-2" />
        <img src={team} alt="team icon" className="orbit-3 imoge-3" />
      </div>
      <img src={background} className="back-layer" alt="landing page right" />
    </div>
  );
}

export default RotatingIcons;
