const Card = props => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="aaaa" />
      <p className="card-title">{props.title}</p>
    </div>
  );
};

export default Card;
