import React from 'react';

const TravelSummary = () => {
    return (
        <div className="w-full max-w-[498px] mx-auto p-6 bg-white rounded-3xl border border-border">
            <h2 className="text-xl font-normal text-smokyGray mb-6">Your Summary</h2>

            {/* Total Price */}
            <div className="flex bg-offWhite p-3 w-full -mx-6 lg:min-w-[496px] min-w-[311px] md:min-w-[360px] mb-8 ">
                {/* Total Price Container */}
                <div className="flex justify-evenly w-full  items-center">
                    <span className="text-base text-smokyGray font-normal" style={{ fontFamily: 'Inter' }}>
                        Total Price
                    </span>
                    <span className="text-xl text-smokyGray font-medium" style={{ fontFamily: 'Inter' }}>
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
                    <span className="block text-sm w-full font-medium text-smokyGray mb-1">Travel Insurance</span>
                    <div className="bg-white border border-lightGray rounded-lg w-full px-4 py-2 text-smokyGray text-sm">
                        <p className="text-sm text-smokyGray">Combined insurance package 1st adult + LKR 2500</p>
                        <p className="text-sm text-smokyGray mt-1">Combined insurance package 2nd adult + LKR 2500</p>
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
        <span className="text-sm text-smokyGray font-medium w-full">{label}</span>
        <div className="bg-white border border-lightGray rounded-lg w-full px-4 py-2 text-smokyGray text-sm">
            {value}
        </div>
    </div>
);

export default TravelSummary;
