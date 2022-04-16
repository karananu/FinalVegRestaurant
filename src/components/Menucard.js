import React from 'react'

const Menucard = ({Menudata}) => {
    // console.log(Menudata);
  return (
    <>
    
    <section className="main-card--cointainer">
    {Menudata.map((curElem)=>{
        const {id, name,category,image,description}=curElem;
        return(
            <>
            <div className="card-container" key={id}>
           <div className="card">
               <div className="card-board">
                   <span className="card-number card-circle subtle">{name}</span>
                   <span className="card-author subtle">{name} </span>
                   <h2 className="card-description subtle">{category}</h2>
                   <span className="card-description subtle">
                   {description}

                       </span>
                       <div className="card-read"> Read</div>
                       </div>
                       <img src={curElem.image} alt="images" className="card-media"/>
                       
                       <span className="card-tag subtle"></span>
                   </div>

               </div>
               </>
            

        )
     })}
    </section>
     

    </>
  )
}

export default Menucard