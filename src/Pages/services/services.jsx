import { useState } from "react";
import "./services.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex container">
      <div id="Projects"></div>
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          كل الخدمات
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          تصميم بروفايل
        </button>

        <button
          onClick={() => {
            handleClick("tailwindcss");
          }}
          className={currentActive === "tailwindcss" ? "active" : null}
        >
          تصميم واردبريس
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          برمجه خاصه
        </button>
        {/* <button
          onClick={() => {
            handleClick("next");
          }}
          className={currentActive === "next" ? "active" : null}
        >

        </button> */}
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <a href={item.linkPage}>
                  <div className="img-box">
                    <img src={item.imgPath} alt="" />
                  </div>

                  <div style={{ width: "266px" }} className="box  ">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="sub-title">{item.subTitle}</p>

                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        {/* <a href={item.linkPage} className="">
                        <div className="icon-sun">
                        <FontAwesomeIcon icon={faLink} size="2x" color="#000" />
                        </div>
                      </a> */}
                        {/* <a href={item.gitHup}>
                      <div className="icon-github"></div>
                      </a> */}
                      </div>

                      {/* <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right2"
                      ></span>
                    </a> */}
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Services;
