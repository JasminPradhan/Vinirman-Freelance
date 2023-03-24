import logo from "../../assets/images/logo.png"
import "../../styles/navbar.scss"

import Button from "../button/button"

const Navbar=()=>{
    return(
        <div className="nav flex justify-between px-44 items-center h-16 text-sm bg-white">
            <div className=""><img className="" src={logo}/></div>
            <div>
                <ul className=" flex justify-between">
                    <li className="mx-3">About</li>
                    <li className="mx-3">Product</li>
                    <li className="mx-3">Pricing</li>
                    <li className="mx-3">Resources</li>
                    <li className="mx-3">Jobs</li>
                    <li className="mx-3">Charity</li>
                </ul>
            </div>
            <div className="h-10 w-32">
                {/* <button className="bg-orange-400">sdfs</button> */}
                <Button action={"learn more ->" }color="#FF6641" dim="h-11 w-32"/>
            </div>
        </div>
    )
}

export default Navbar