import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string

}
export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    console.log("Accordion rendering")
          return (
            <div onClick={()=>setCollapsed(!collapsed)}>
                <AccordionTitle title={props.titleValue}/>
                { !collapsed && <AccordionBody/>}
            </div>
        )
    }


type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

