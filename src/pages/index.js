import RootLayout from "@/layouts/root-layout";
import Image from "next/image";
import image2 from "../assets/static-banner-img.png";
import image1 from "../assets/test-1.jpg";
import image3 from "../assets/test-2.jpg";

const HomePage = () => {
  return (
    <div className="mb-20">
      <ul className="menu menu-horizontal px-1">
        <li className="btn m-1">
          <a>Home</a>
        </li>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1">
            Offers{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1">
            Stores{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div className="flex justify-between">
              <div>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </div>
              <div>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1">
            Brands
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <li className="btn m-1">
          <a>Discounted Products</a>
        </li>
      </ul>

      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="col-span-2 row-span-2">
          <Image
            src={image3}
            height={500}
            className="rounded-lg object-cover w-full h-full"
            alt="test"
          />
        </div>
        <div className="col-start-1 row-start-3">
          <Image
            src={image1}
            height={500}
            width={500}
            className="rounded-lg object-cover"
            alt="test"
          />
        </div>
        <div className="col-start-2 row-start-3">
          <Image
            src={image1}
            height={500}
            width={500}
            className="rounded-lg"
            alt="test"
          />
        </div>
        <div className="row-span-3 col-start-3 row-start-1">
          <Image
            src={image2}
            className="h-full object-cover rounded-lg"
            height={500}
            width={500}
            alt="test"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <div>
      <RootLayout>{page}</RootLayout>
    </div>
  );
};
