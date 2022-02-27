import Notif from "./../assets/Group.png"
import Avatar from "./../assets/Ellipse-2.png"
import Bar from "./../assets/Group-(1).png"

const TopBar = () => {
    return (
        <div className="flex justify-between py-7 px-6">
            <div className="flex">
                <img className="w-3.5 h-3 mr-5 mt-2.5" src={Bar} alt="" />
                <p className="mt-1 font-body font-semibold ">Chickin Admin Panel</p>
            </div>
            <div className="flex mr-16 ">
                <img className="w-4 h-5 mt-2.5 mr-16" src={Notif} alt="" />
                <img className="w-10 h-10 " src={Avatar} alt="" />
            </div>
        </div>
    )
}
export default TopBar