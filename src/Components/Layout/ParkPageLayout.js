import { Outlet } from "react-router-dom"

function ParkPageLayout(){
    console.log("PARK PAGE LAYOUT")
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default ParkPageLayout