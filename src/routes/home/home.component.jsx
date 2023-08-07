import Directory from "../../components/directory/directory.component";

import maldive from "../../assets/img/maldive.jpg";
import hawaii from "../../assets/img/hawaii.jpg";
import japan from "../../assets/img/japan.jpg";
import tibet from "../../assets/img/tibet.jpg";
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
      title: "Maldive",
      imageUrl: maldive,
      Svg: Ellipse1,
    },
    {
      id: 2,
      title: "Hawaii",
      imageUrl: hawaii,
      Svg: Ellipse2,
    },
    {
      id: 3,
      title: "Tibet",
      imageUrl: tibet,
      Svg: Ellipse3,
    },
    {
      id: 4,
      title: "Cuba",
      imageUrl: cuba,
      Svg: Ellipse4,
    },
    {
      id: 5,
      title: "Japan",
      imageUrl: japan,
      Svg: Ellipse5,
    },
  ];

  return <Directory destinations={destinations} />;
};

export default Home;
