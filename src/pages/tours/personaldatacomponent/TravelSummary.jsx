import React from 'react';

const TravelSummary = () => {
    return (
        <div className="w-full mx-auto p-6 bg-white rounded-3xl border border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Summary</h2>

            {/* Total Price */}
            <div className="relative  bg-offWhite p-3 rounded-lg w-full min-w-[498px] mb-4 ">
                {/* Total Price Container */}
                <div className="flex justify-between items-center">
                    <span className="text-base text-gray-600 font-normal" style={{ fontFamily: 'Inter' }}>
                        Total Price
                    </span>
                    <span className="text-xl text-gray-800 font-medium" style={{ fontFamily: 'Inter' }}>
                        LKR 345,667
                    </span>
                </div>
            </div>


            {/* Details Grid */}
            <div className="space-y-4">
                {/* Hotel */}
                <DetailItem label="Hotel" value="Catalonia Riviera Maya" />
                {/* City */}
                <DetailItem label="City" value="France | City name" />
                {/* Arrival */}
                <DetailItem label="Arrival" value="Sat . 19 Oct 2025" />
                {/* Departure */}
                <DetailItem label="Departure" value="Sat . 23 Oct 2025" />
                {/* Stay */}
                <DetailItem label="Stay" value="4 Nights" />
                {/* Room */}
                <DetailItem label="Room" value="Standard twin room, All inclusive, 2 Adults" />
                {/* Transfer */}
                <DetailItem label="Transfer" value="Exclusive Transfer" />
                {/* Departure */}
                <DetailItem label="Departure" value="19 Oct 2025 16:45 from ZRH" />
                {/* Return Journey */}
                <DetailItem label="Return Journey" value="24 Oct 2025 08:23 from KGS" />
                {/* Travel Insurance */}
                <div className="flex items-center justify-between">
                    <span className="block text-sm w-full font-medium text-gray-500 mb-1">Travel Insurance</span>
                    <div className="bg-white border border-gray rounded-lg w-full px-4 py-2 text-gray text-sm">
                        <p className="text-sm text-gray-700">Combined insurance package 1st adult + LKR 2500</p>
                        <p className="text-sm text-gray-700 mt-1">Combined insurance package 2nd adult + LKR 2500</p>
                    </div>
                </div>
                {/* Travel Participants */}
                <DetailItem label="Travel Participants" value="2 adults" />
            </div>
        </div>
    );
};

const DetailItem = ({ label, value }) => (
    <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 font-medium w-full">{label}</span>
        <div className="bg-white border border-gray rounded-lg w-full px-4 py-2 text-gray text-sm">
            {value}
        </div>
    </div>
);

export default TravelSummary;
