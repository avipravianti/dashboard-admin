import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getData from "../redux/action/dataAction";


const ContentTable = () => {


    const dispatch = useDispatch();
    const {data} = useSelector(state => state.dataReducer)
    console.log(data)
    
    useEffect(() => {
        dispatch(getData())
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
        <div className="grid grid-cols-1 mt-5">
            <div className="rounded-xl bg-white p-5">
                <div className="flex justify-between">
                    <p className="mb-5 font-bold text-2xl">Ketersediaan</p>
                    <div>
                        <select className="rounded-lg border-2 border-white p-2">
                            <option>Pulau Jawa</option>
                            <option>Jabodetabek</option>
                            <option>Bali</option>
                        </select>
                        <select className="rounded-lg border-2 border-white p-2" >
                            <option>Bobot</option>
                            <option>25</option>
                            <option>24</option>
                        </select>
                        <select className="rounded-lg border-2 border-white p-2" >
                            <option>Usia</option>
                            <option>10</option>
                            <option>9</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    <div className="p-10 px-20 bg-whitePure rounded-xl text-center ml-3 cursor-pointer hover:bg-lightBlue">
                        <p className="font-bold">Jabodetabek</p>
                        <p className="font-bold text-2xl my-2">500.000</p>
                        <p>Populasi Ayam</p>
                    </div>
                    <div className="p-10 px-20 bg-whitePure rounded-xl text-center ml-3 cursor-pointer hover:bg-lightBlue">
                        <p className="font-bold">Jawa Barat</p>
                        <p className="font-bold text-2xl my-2">500.000</p>
                        <p>Populasi Ayam</p>
                    </div>
                    <div className="p-10 px-20 bg-whitePure rounded-xl text-center ml-3 cursor-pointer hover:bg-lightBlue">
                        <p className="font-bold">Jawa Tengah</p>
                        <p className="font-bold text-2xl my-2">500.000</p>
                        <p>Populasi Ayam</p>
                    </div>
                    <div className="p-10 px-20 bg-whitePure rounded-xl text-center ml-3 cursor-pointer hover:bg-lightBlue">
                        <p className="font-bold">Jawa Timur</p>
                        <p className="font-bold text-2xl my-2">500.000</p>
                        <p>Populasi Ayam</p>
                    </div>
                </div>
            </div>
            <table className="table-fixed mt-5 rounded-xl bg-white p-5">
                <thead className="bg-anotherBlue font-bold" >
                    <tr>
                    <th className="py-3">Id</th>
                    <th>Name</th>
                    <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                {data?.map((item, index) => {
                return (
                    <tr className="text-center hover:bg-lightBlue">
                    <td className="py-1">{item?.show?.id}</td>    
                    <td>{item?.show?.name}</td>
                    <td>{item?.show?.language}</td>
                    </tr>
                )})}
                </tbody>
            </table>
        </div>
        
        </>
    )
}
export default ContentTable