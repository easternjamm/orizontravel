import "./directory-item.styles.scss";

const DirectoryItem = ({ destination }) => {
  const { imageUrl, title, id, Svg } = destination;
  return (
    <div className='directory-item-container'>
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

      <div className='body'>
        <h2>{title}</h2>
        <p>Get ticket</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
