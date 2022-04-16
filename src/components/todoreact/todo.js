import React, {useState,useEffect} from 'react'
import "./style.css"
//get the local Storage data
const getLocalData=()=>{
  const list=localStorage.getItem("mytodolist");
  if(list){
      return JSON.parse(list);
  }else{
      return [];
  }
};
const Todo = () => {
    const [inputdata,setInputData]=useState("");
    const [Items,setItems]=useState(getLocalData());
    const [iseditItem, seteditItem]=useState(false);
    const [toggleButton, setToggleButton]=useState(false);
    // add the item function
    const addItem=()=>{
        if(!inputdata){
            alert("pleaee fill the data");
        }else if(inputdata && toggleButton){
            setItems(
                Items.map((curElem)=>{
                    if(curElem.id===iseditItem){
                    return {
                        ...curElem, name:inputdata};
                }
                    return curElem;
              })
            );
            setInputData([]);
            seteditItem();
            setToggleButton(false);
            }else{
            const myNewInputData={
              id:new Date().getTime().toString(),
              name:inputdata,
            };
            setItems([...Items,  myNewInputData])
            setInputData("")
        }

    };
    // add the items
    const editItem=(index)=>{
        const item_todo =Items.find((curElem)=>{
            
            return curElem.id===index;

        });
        setInputData(item_todo.name);
        seteditItem(index);
        setToggleButton(true);
           
    };
    //how to delet items
    const deleteItem=(index)=>{
        const updatedItem=Items.filter((curElem)=>{
            return curElem.id!==index; 
        })
        setItems(updatedItem);
    };
    
//adding local storage

useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(Items));
},[Items]);

  return (
    <>
       <div>
           <div className="main-div">
                  <div className="child-div">
                      <figure>
                          <img src="./images/todo.svg" alt="todologo"/>
                          <figcaption>Add your List here </figcaption>
                      </figure>
                      <div className="addItems">
                          <input type="text" placeholder="Add Item" 
                           className="form-control"
                           value={inputdata}
                           onChange={(event)=> setInputData(event.target.value)}/>
                          {
                              toggleButton ?(
                                 <i className="fa fa-edit add-btn"  onClick={addItem}></i>
                              ):(
                                <i className="fa fa-plus add-btn"  onClick={addItem}></i>
                              
                                 )}
                      </div>
                      <div>

                          <div className="showItems" >
                              {
                                  Items.map((curElem,index)=>{
                                      return (
                                        <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">
                                        <i className="fa fa-edit add-btn"
                                        onClick={()=>editItem(curElem.id)}></i>
                                        <i className="fa fa-trash-alt add-btn" 
                                        onClick={()=>deleteItem()}></i>
                                            </div>
      
                                    </div>
    
                                      )
                                  })}
                              
                              

                          </div>
                          <div className="showItems">
                                 <button className="btn effect04" data-sm-link-text="Remove all" >
                                     <span>Check List</span>
                                     </button>
                              </div>
                      </div>
                      </div>

               </div>
       </div>
    </>
  )
}

export default Todo