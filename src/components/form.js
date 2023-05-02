import React,{useState} from "react";
import "../style.css";

function FeedBack(props){
    // const [name,setName]=useState("");
    // const [dept,setdept]=useState("");
    // const [rating,setRating]=useState("");
    const [data,setData]=useState([]);

    const handleData=(e)=>{
        e.preventDefault();
        const values={
            name:e.target.name.value,
            dept:e.target.dept.value,
            rating:e.target.rate.value,
        };
        setData([...data,values]);
        e.target.reset();
        console.log(data);
    };
    console.log(data);
    return (
        <div>
            <h1>Employee FeedBack Form</h1>
            <form onSubmit={handleData}>
                <label className="txt">Name : </label>
                <input type="text" name="name" placeholder="Enter ename" className="name" required/>
                <br/>
                <label className="txt">Department : </label>
                <input type="text" name="dept" placeholder="Dept..." className="dept" />
                <br/>
                <label className="txt">Rating:</label>
                <input type="number"  name="rate" className="rate" /><br/>
                <button >Submit</button>
            </form>
            <hr/>
            <div className="box">
                {data.map((x,i)=>(
                    <h4 className="details" id={i}>Name : {x.name} | Dept : {x.dept} | Rating : {x.rating}</h4>
                ))}
            </div>
        </div>
    )
}

export default FeedBack;