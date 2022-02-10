import React, { useEffect, useState } from "react";
import './ExpireMsg.css';

export default function ExpireMsg(props) {
    const [visible, setVisible] = useState(true)

    useEffect(()=> {
        setTimeout(()=> {
            setVisible(false);
        }, props.delay);
    }, [props.delay]);

    if (visible) {
        return <div className="add_message notification is-success">{props.children}</div>
    } else {
        return <div/>
    }
}