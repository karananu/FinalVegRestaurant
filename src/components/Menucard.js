import React from "react";

const Menucard = ({ Menudata }) => {
  // console.log(Menudata);
  return (
    <>
      <section className="main-card--cointainer">
        {Menudata.map((curElem) => {
          const { id, name, category, image, description, price } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-board">
                    <span className="card-author subtle">{name} </span>
                    <h2 className="card-description-Title">{category}</h2>

                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read"> Read</div>
                  </div>
                  <img
                    src={curElem.image}
                    alt="images"
                    className="card-media"
                  />
                  <h2 className="card-price-Title">{price}</h2>
                  <span className="card-tag subtle"></span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Menucard;
