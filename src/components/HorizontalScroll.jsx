import React from "react"


export const HorizontalScroll =({children})=>{
    return <div className="overflow-x-auto bg-secondary p-3" style={{borderRadius: '18px'}}>
        {children}
    </div>
}