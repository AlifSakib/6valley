import axios from "axios";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(
      "https://6valley.sixamtech.com/react/api/v4/categories"
    );

    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <ul className="menu bg-base-200 w-80 rounded-box mt-3">
        <li>
          <details open>
            <summary>
              <div className="flex items-center gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </span>
                <a>Browse Category</a>
              </div>
            </summary>
            {
              <ul className="w-72">
                {data.map((item) => (
                  <li key={item?.id}>
                    {!item?.childes?.length > 0 ? (
                      <li>
                        <a>{item?.name}</a>
                      </li>
                    ) : (
                      <li>
                        <details close>
                          <summary>{item?.name}</summary>
                          <ul>
                            {item?.childes?.map((child) => (
                              <li key={child?.id}>
                                {!child?.childes?.length > 0 ? (
                                  <li className="w-full">
                                    <a>{item?.name}</a>
                                  </li>
                                ) : (
                                  <li>
                                    <details close>
                                      <summary>{child?.name}</summary>
                                      <ul>
                                        {child?.childes?.map((child) => (
                                          <li
                                            className="w-full"
                                            key={child?.id}
                                          >
                                            <a>{child?.name}</a>
                                          </li>
                                        ))}
                                      </ul>
                                    </details>
                                  </li>
                                )}
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    )}
                  </li>
                ))}
              </ul>
            }
          </details>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
