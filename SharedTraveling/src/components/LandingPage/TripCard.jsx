const TripCard = (props) => {
  return (
    <div className="w-56 h-64 bg-white text-white shadow-black shadow-sm">
      <img src={props.url} className="" alt=""  />
    </div>
  );
};

export default TripCard;
