import React,{useEffect,useState} from "react";
import axios from "axios";

function EventDetails(){

    const [eventDate,setEventDate]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:3001/vizag").then((res)=>setEventDate(res.data));
    }, []);

    return <h1>Event Date: {eventDate}</h1>;

}

export default EventDetails;