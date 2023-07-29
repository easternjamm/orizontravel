import DestinationItem from "../destination-item/destination-item.component";

import "./directory.styles.scss";

const Directory = ({ destinations }) => {
  return (
    <div className='directory-container'>
      {destinations.map((destination) => (
        <DestinationItem key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default Directory;
