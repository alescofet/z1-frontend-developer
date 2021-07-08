import React, { useState, useEffect } from 'react';

function Camera(){
    const [scanner,setScanner] = useState(false)
    const scan = (()=>{
        setTimeout(()=>{
            setScanner(true)
        }, 3000)
    })
return(
    <div>
       
    </div>
)
}

export default Camera;