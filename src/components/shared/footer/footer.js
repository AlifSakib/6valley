import image1 from "../../../assets/test-1.jpg";
import image2 from "../../../assets/test-2.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center">
          <img src={image1} alt="test" className="w-1/2" />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={image2} alt="test" className="w-1/2" />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
