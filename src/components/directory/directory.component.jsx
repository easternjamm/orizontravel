import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const Directory = ({ destinations }) => {
  return (
    <div className='directory-container'>
      {destinations.map((destination) => (
        <DirectoryItem key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default Directory;
