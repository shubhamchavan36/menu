import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItems from './MenuItems';
const MenuSearch = () => {
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        getMenuItems();
    }, []);
    const getMenuItems = async () => {
        let menuItems = await axios.get("https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef");
        console.log("menuItems:", menuItems)
        setMenuData(menuItems.data)
    }

    const requestSearch = (searchedVal) => {
        const filteredData = menuData.filter((data) => {
            return data.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setMenuData(filteredData);
    };
    return (
        <>
            <MenuItems requestSearch={requestSearch} menuData={menuData} />
        </>
    )
};

export default MenuSearch;