import React from 'react';
import { RiHome3Line, } from 'react-icons/ri';
import { FaRegBuilding } from 'react-icons/fa';
import { PiWarehouseBold } from 'react-icons/pi';
import { FiUsers, FiTruck } from 'react-icons/fi';
import { TbTruckLoading } from 'react-icons/tb';
import { LuSettings } from 'react-icons/lu';
import { IoMdSearch } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import Logo from '@/app/components/logo';
import { NavLink } from 'react-router-dom';
import { company_onwer_route as route } from '@/constants/routes';

const CompanyOwnerSideNav = () => {
    let navStyle = "font-semibold mb-2 flex gap-2 items-center hover:bg-indigo-600 hover:rounded  py-2 px-2 hover:text-white hover:cursor-pointer"
    return (
        <div className='flex flex-col h-full justify-between'>

            <div className='text-gray-600'>
                <div className='mb-6 p-2'>
                    <Logo />
                </div>

                <div>
                    <NavLink to = {route.home}  className='font-semibold mb-2 flex gap-2 items-center hover:bg-indigo-600 hover:rounded  py-2 px-2 hover:text-white hover:cursor-pointer'>
                        <p><RiHome3Line /></p>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to = {route.freight_company} className={navStyle}>
                        <p><FaRegBuilding /></p>
                        <p>Freight Companies</p>
                    </NavLink>
                    <NavLink to = {route.warehouse} className={navStyle}>
                        <p><PiWarehouseBold /></p>
                        <p>Warehouses</p>
                    </NavLink>
                    <NavLink to = {route.warehouse_staff} className={navStyle}>
                        <p><FiUsers /></p>
                        <p>Warehouses Staff</p>
                    </NavLink>
                    <NavLink to = {route.vehicle} className={navStyle}>
                        <p><FiTruck /></p>
                        <p>Vehicles</p>
                    </NavLink>
                    <NavLink to = {route.shipment} className={navStyle}>
                        <p><TbTruckLoading /></p>
                        <p>Shipment</p>
                    </NavLink>
                </div>

                <div className='border-t py-2'>
                    <NavLink to = {route.home } className={navStyle}>
                        <p><LuSettings /></p>
                        <p>Settings</p>
                    </NavLink>
                    <NavLink to = {route.home} className={navStyle}>
                        <p><IoMdSearch /></p>
                        <p>Search</p>
                    </NavLink>
                </div>
            </div>

            <div className='text-gray-600'>

                <div className='font-semibold flex gap-2 items-center py-2 px-2 hover:text-white hover:cursor-pointer'>
                    <p className='rounded'> <img src="https://placehold.co/400x400" className='rounded-full' /></p>

                    <div>
                        <p className=''>userone@gmail.com</p>
                        <p className='flex gap-2  justify-between items-center'>Logout <MdLogout /></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompanyOwnerSideNav