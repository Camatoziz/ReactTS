import React, {useState} from 'react';

type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {
    const [value, setValue] = useState(0)
    console.log('Rating rendering')
    return (
        <div>
            <div>
                <Star selected={value > 0}/>
                <Star selected={value > 1}/>
                <Star selected={value > 2}/>
                <Star selected={value > 3}/>
                <Star selected={value > 4}/>
            </div>
            <div>
                <button onClick={() => setValue(1)}>1</button>
                <button onClick={() => setValue(2)}>2</button>
                <button onClick={() => setValue(3)}>3</button>
                <button onClick={() => setValue(4)}>4</button>
                <button onClick={() => setValue(5)}>5</button>
            </div>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}