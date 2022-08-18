function Card({ children, cardDark }) {
  return <div className={`card ${cardDark && "card--dark"}`}>{children}</div>;

  // conditional inline styling
  // return (
  //   <div
  //     className="card"
  //     style={{
  //       backgroundColor: cardDark ? "rgba(0,0,0,0.8)" : "#fff",
  //       color: cardDark ? "#fff" : "black",
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
}
Card.defaultProps = {
  cardDark: false,
};
export default Card;
