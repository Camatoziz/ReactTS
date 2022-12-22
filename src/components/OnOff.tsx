import React, {useState} from 'react';

type PropsType = {

}



export const OnOff = (props: PropsType) => {

    const [on, setOn] = useState(false)

    const indikator = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }
    const onButton = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offButton = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        padding: "2px" ,
        backgroundColor: on ? "white" : "red"
    }
    return (
        <div>
            <div style={onButton} onClick={()=>setOn(true)}>On</div>
            <div style={offButton} onClick={()=>setOn(false)}>Off</div>
            <div style={indikator}></div>
        </div>
    );
};

