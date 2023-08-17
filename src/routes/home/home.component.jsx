import Directory from "../../components/directory/directory.component";

import hawaii from "../../assets/img/hawaii.jpg";
import cuba from "../../assets/img/cuba.jpg";
import { ReactComponent as Ellipse1 } from "../../assets/svg/Ellipse1.svg";
import { ReactComponent as Ellipse2 } from "../../assets/svg/Ellipse2.svg";
import { ReactComponent as Ellipse3 } from "../../assets/svg/Ellipse3.svg";
import { ReactComponent as Ellipse4 } from "../../assets/svg/Ellipse4.svg";
import { ReactComponent as Ellipse5 } from "../../assets/svg/Ellipse5.svg";

const Home = () => {
  const destinations = [
    {
      id: 1,
      title: "Mountains",
      imageUrl:
        "https://images.pexels.com/photos/1647972/pexels-photo-1647972.jpeg?auto=compress&cs=tinysrgb&w=1600",
      Svg: Ellipse1,
    },
    {
      id: 2,
      title: "Seaside",
      imageUrl: hawaii,
      Svg: Ellipse2,
    },
    {
      id: 3,
      title: "Architecture marvels",
      imageUrl:
        "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1600",
      Svg: Ellipse3,
    },
    {
      id: 4,
      title: "Historical",
      imageUrl: cuba,
      Svg: Ellipse4,
    },
    {
      id: 5,
      title: "Art",
      imageUrl:
        "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1600",
      Svg: Ellipse5,
    },
  ];

  return <Directory destinations={destinations} />;
};

export default Home;
