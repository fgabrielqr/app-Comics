import React, { useState, useRef } from "react";
import moment from "moment";
import { IoMdCloseCircle } from "react-icons/io";

// import "./Characters.css";

const Comics = (props) => {
  const [isOpen, setIsOpen] = useState("");
  // const [fav, setFav] = useState();
  const modalRef = useRef(null);

  const dropOpen = () => {
    console.log("show");
    setIsOpen("show");
    document.body.addEventListener("click", closeDrop);
  };

  const closeDrop = (event) => {
    event.stopPropagation();
    const contain = modalRef.current.contains(event.target);

    if (contain) {
      setIsOpen("");
      document.body.removeEventListener("click", closeDrop);
      console.log("hidden");
    } else {
      setIsOpen("show");
      document.body.removeEventListener("click", closeDrop);
    }
  };

  // SISTEMA DE FAVORITOS
  // const handleFav = (e) => {
  //   e.preventDefault();
  //   setFav(props.id);

  //   var exists = localStorage.getItem("favoritos");
  //   exists = exists ? exists.split("-") : [];
  //   exists.push(fav);
  //   localStorage.setItem("favoritos", exists.toString());
  // };

  return (
    <div>
      {/* MODAL HIDDEN  */}
      <div ref={modalRef} className={`${isOpen} modal`}>
        <div className="modal__cards" id="myModal">
          <div className="modal__content">
            <div className="modal__header">
              <span onClick={closeDrop}>
                <IoMdCloseCircle />
              </span>
              <h2> {props.title} </h2>
            </div>
            <div className="modal__body">
              <div className="modal__full__image">
                <img src={props.thumb + "/detail.jpg"} alt="Not Found" />
              </div>
              <div className="modal__desc">
                <p className="modal_desc-desc">
                  {" "}
                  {props.description}
                  {props.description ? null : "HQ sem descrição!"}{" "}
                </p>
                <button
                // onClick={handleFav}
                >
                  <p>Enviar Presente</p>
                </button>
              </div>
            </div>
            <div className="modal__date">
              <p>
                Last modified{" "}
                {moment(props.date).format("DD/MM/YYYY - HH:mm:ss")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTAINER CARDS  */}
      <div className="container__cards">
        <div className="cards__body">
          <ul>
            <li>
              <div className="container__content" onClick={dropOpen}>
                <div className="card__img">
                  {props.thumb.path === null ? (
                    <img
                      src={`http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/detail.jpg`}
                      alt="Not Found"
                    />
                  ) : (
                    <img
                      // src={props.thumb + "/detail.jpg"}
                      src={props.thumb + "/portrait_uncanny.jpg"}
                      alt="Not Found"
                    />
                  )}
                </div>
                <span className="card__name">
                  <p title={props.title}>{props.title}</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comics;
