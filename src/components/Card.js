const Card = props => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="aaaa" />
      <div className="card-text">
        <h3 className="card-title">
          {props.title} in {props.location}
        </h3>
        <a target="_blank" href={props.googleMapsUrl}>
          Google Maps
        </a>
        <br />
        <small>
          {props.startDate} - {props.endDate}
        </small>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
