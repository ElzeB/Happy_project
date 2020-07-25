import * as React from 'react';
import './index.css';

const Progress = ({done}) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: '100%'
        }
        setStyle(newStyle);
    }, 200);
    return(
        <div className="progress">
            <div className="progress-done" style={style}>
               
            </div>
        </div>
    )
}

export default Progress;