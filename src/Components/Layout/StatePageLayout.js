import { Outlet } from "react-router-dom"

import './StatePageLayout.css'

function StatePageLayout(){
    
    return (
        <div className='layout'>
            <Outlet/>
        </div>
    )
}

export default StatePageLayout