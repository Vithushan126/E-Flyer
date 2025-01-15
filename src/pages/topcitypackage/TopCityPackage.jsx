import React from "react";
import SearchBar from "../../pages/searchbar/SearchBar";

import HotelList from "../../pages/TopCityPackage/HotelList";
import { useState } from "react";
import PackageFilter from "../packages/PackageFilter";

const TopCityPackage = () => {
    const [isFilterVisible, setFilterVisible] = useState(false);

    const toggleFilterSidebar = () => {
        setFilterVisible(!isFilterVisible);
    };

    return (
        <div className="w-full flex justify-center bg-gray-50 py-6">
            <div className="w-full max-w-[1100px] px-4 lg:px-0 space-y-6">
                <SearchBar />
                <div className="flex flex-col space-y-6">
                    {/* Title Section */}
                    <div className="text-left">
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                            Top city trips with Flight & Hotel
                        </h1>
                        <button
                            className="text-sm md:text-base text-darkBlue mt-2 cursor-pointer underline"
                            onClick={toggleFilterSidebar}
                        >
                            Filter
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row lg:gap-10">
                        {/* Sidebar */}
                        <div
                            className={`fixed inset-0 md:static bg-white p-6 md:p-0 z-50 shadow-md md:shadow-none transform ${isFilterVisible ? "translate-x-0" : "-translate-x-full"
                                } transition-transform duration-300 ease-in-out lg:translate-x-0`}
                        >
                            <button
                                className="md:hidden absolute top-8 right-8 text-gray-600 text-xl"
                                onClick={toggleFilterSidebar}
                            >
                                ✕
                            </button>
                            <PackageFilter />
                        </div>

                        {/* Hotel List */}
                        <div className="flex-1">
                            <HotelList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCityPackage;
