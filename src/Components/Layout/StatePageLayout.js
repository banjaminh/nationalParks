import { Outlet } from "react-router-dom"

function StatePageLayout(){
    console.log("STATE PAGE LAYOUT")

    
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default StatePageLayout