import { getIcon } from "../../utils/utils";

const Card = () => {
  const icon = getIcon(3);
  return (
    <>
      <div>Card</div>
      <img src={icon} alt="weather-icon"></img>
    </>
  );
};

export default Card;
