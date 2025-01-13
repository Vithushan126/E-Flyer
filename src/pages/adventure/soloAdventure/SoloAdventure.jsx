import React from 'react'
import TrendingAdventures from '../../home/TrendingAdventures';
import CardAndCity from '../../home/CardAndCity';

const SoloAdventure = () => {
 return (
   <>
     <div className="space-y-20 mx-2">
       <TrendingAdventures title="Trending Solo Adventures" />
       <CardAndCity title="Solo Packages" />
     </div>
   </>
 );
}

export default SoloAdventure
