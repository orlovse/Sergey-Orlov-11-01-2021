const FavoriteCard = ({ favoriteWeather }) => {
  return (
    <div>
      <div>Favorite</div>
      <div>{favoriteWeather.WeatherText}</div>
      <div>{favoriteWeather.Temperature.Metric.Value}</div>
    </div>
  );
};

export default FavoriteCard;
