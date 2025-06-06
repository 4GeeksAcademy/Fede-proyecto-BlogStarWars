import React from "react"


export const HorizontalScroll =({children})=>{
    return <div className="overflow-x-auto">
        {children}
    </div>
}