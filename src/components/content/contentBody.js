import Chart from "../../assets/chart.png"
import Aktif from "../../assets/Ellipse-5.png"
import Rehat from "../../assets/Ellipse-5-(1).png"
import ContentTable from "./contentTable"

const ContentBody = () => {
    return (
        <div className="flex-1 p-5">
            {/* diagram & mitra */}
            <div className="grid grid-cols-2">
                <div className="rounded-xl bg-neutral-100 bg-white p-5 mr-5">
                    <p className="mb-5 font-bold text-2xl">Kandang (2.000)</p>
                        <div className="flex">
                            <img src={Chart} alt="" />
                                <div className="flex-col">
                                    <div className="flex ml-5 mt-8 ">
                                        <img className="w-4 h-4 mt-3" src={Aktif} alt="" />
                                        <div className="ml-3">
                                            <p className="mb-1 text-sm">Aktif</p>
                                            <p className="font-bold">1.750</p>
                                        </div>
                                    </div>
                                    <div className="flex ml-5 mt-8 ">
                                        <img className="w-4 h-4 mt-3" src={Rehat} alt="" />
                                        <div className="ml-3">
                                            <p className="mb-1 text-sm">Rehat</p>
                                            <p className="font-bold">250</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>

                <div className="rounded-xl bg-white p-5">
                    <p className="mb-5 font-bold text-2xl">Mitra (2.460)</p>
                    <div className="flex mt-10">
                        <div className="p-12 bg-whitePure rounded-xl text-center font-bold">
                            <p>Petugas Penyuluh Lapangan</p>
                            <p className="text-5xl mt-3">1.000</p>
                        </div>
                        <div className="p-12 bg-whitePure rounded-xl text-center font-bold ml-3">
                            <p>Peternak Kemitraan</p>
                            <p className="text-5xl mt-3">1.400</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* populasi ayam */}
            <div className="grid grid-cols-1 mt-5">
                <div className="rounded-xl bg-white p-5">
                    <div className="flex justify-between">
                        <p className="mb-5 font-bold text-2xl">Populasi ayam (2.000.000)</p>
                        <select className="rounded-lg border-2 border-white p-2">
                            <option>Pulau Jawa</option>
                            <option>Jabodetabek</option>
                            <option>Bali</option>
                        </select>
                    </div>
                    <div className="flex justify-center font-bold mt-3 ">
                        <div className="p-12 px-24 bg-whitePure rounded-xl text-center ml-3">
                            <p>Usia 0-14</p>
                            <p className="text-3xl my-2">250.000</p>
                            <p>Ekor</p>
                        </div>
                        <div className="p-12 px-24 bg-whitePure rounded-xl text-center ml-3">
                            <p>Usia 15-30</p>
                            <p className="text-3xl my-2">750.000</p>
                            <p>Ekor</p>
                        </div>
                        <div className="py-12 px-24 bg-whitePure rounded-xl text-center ml-3">
                            <p>Usia 31+</p>
                            <p className="text-3xl my-2">1.000.000</p>
                            <p>Ekor</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Availability/Table */}
            <ContentTable/>
        </div>
    )
}
export default ContentBody