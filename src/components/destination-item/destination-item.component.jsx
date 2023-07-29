import "./destination-item.styles.scss";

const DestinationItem = ({ destination }) => {
  const { imageUrl, title, id, Svg } = destination;
  return (
    <div className='destination-container'>
      <img
        className='background-img'
        src={imageUrl}
        alt=''
        style={{
          /* backgroundImage: `url(${imageUrl})`, */
          clipPath: `url(#ellipse${id})`,
        }}
      />
      <Svg
        className='background-image'
        style={
          {
            /* backgroundImage: `url(${imageUrl})`, */
            /*  clipPath: `url(#ellipse${id})`, */
          }
        }
      />

      <div className='destination-body-container'>
        <h2>{title}</h2>
        <p>Get ticket</p>
      </div>
    </div>
  );
};

export default DestinationItem;
