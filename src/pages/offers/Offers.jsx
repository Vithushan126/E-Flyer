import React, { useState } from "react";
import HotelList from "../TopCityPackage/HotelList";
import TrendingFilter from "../trendingadventure/TrendingFilter";
import SearchForm from "../home/SearchForm";

const Offers = () => {
    const [isFilterVisible, setFilterVisible] = useState(false);

    const toggleFilterSidebar = () => {
        setFilterVisible(!isFilterVisible);
    };

    return (
        <div className="w-full flex justify-center bg-gray-50 py-60">
            <div>
                <SearchForm />
                <div className="flex flex-col space-y-6">
                    {/* Title Section */}
                    <div className="text-left">
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
                            <TrendingFilter />
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

export default Offers;
