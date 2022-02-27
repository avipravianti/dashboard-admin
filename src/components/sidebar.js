import Mitra from "./../assets/mitra.png"
import Dashboard from "./../assets/ic_round-pie-chart.png"
import Kandang from "./../assets/ic_outline-home.png"
import Daftar from "./../assets/ic_outline-supervised-user-circle.png"
import Peternak from "./../assets/ic_round-person-outline.png"
import Customer from "./../assets/ic_round-help-outline.png"
import Logout from "./../assets/ic_round-logout.png"
import ContentBody from "./content/contentBody"

const Sidebar = () => {
    return (
        <div className="relative min-h-screen sm:flex font-body">
            <div className="  w-64 space-y-6 py-7 px-5 absolute inset-y-0 left-0 transform -translate-x-full sm:relative sm:translate-x-0 ">
            <div className="rounded-md p-4 border-2 border-soft text-center " >
                <img className="p-7" src={Mitra} alt="" />
                <p className="mb-1 text-base font-semibold">James Blunt</p>
                <p className="text-xs text-orange">Mitra Chickin</p>
            </div>
                <nav>
                    <div className="flex py-2.5 px-4 cursor-pointer rounded-lg transition duration-200 hover:bg-lightBlue hover:font-semibold">
                        <img className="w-6 h-6" src={Dashboard} alt="" />
                        <a href="/" className="ml-4" >
                            Dashboard
                        </a>
                    </div>
                    <div className="flex py-2.5 px-4 cursor-pointer rounded-lg transition duration-200 hover:bg-lightBlue hover:font-semibold">
                        <img className="w-6 h-6" src={Kandang} alt="" />
                        <a href="/" className="ml-4" >
                            Kandang
                        </a>
                    </div>
                    <div className="flex py-2.5 px-4 cursor-pointer rounded-lg transition duration-200 hover:bg-lightBlue  hover:font-semibold">
                        <img className="w-6 h-6" src={Daftar} alt="" />
                        <a href="/" className="ml-4" >
                            Daftar PPL
                        </a>
                    </div>
                    <div className="flex py-2.5 px-4 cursor-pointer rounded-lg transition duration-200 hover:bg-lightBlue  hover:font-semibold">
                        <img className="w-6 h-6" src={Peternak} alt="" />
                        <a href="/" className="ml-4" >
                            Daftar Peternak
                        </a>
                    </div>
                    <div className="flex mt-14 py-2.5 px-4 cursor-pointer rounded-lg transition duration-200 hover:bg-lightBlue  hover:font-semibold">
                        <img className="w-6 h-6" src={Customer} alt="" />
                        <a href="/" className="ml-4" >
                            Customer Service
                        </a>
                    </div>
                    <button className=" absolute bottom-0 left-0 transition duration-150 cursor-pointer py-2 px-8 border-2 border-lightBlue rounded-lg w-60 ml-4 mb-10 flex hover:bg-lightBlue hover:font-semibold">
                        <img className="w-6 h-6 ml-9 mr-3" src={Logout} alt="" />
                        <p>Logout</p>
                    </button>
                </nav>
            </div>
            
            {/* content */}
            <ContentBody/>
        </div>
    )
}
export default Sidebar