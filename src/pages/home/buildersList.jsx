import React from 'react'
import CustomHeading from '../../components/customHeading'
import { featuresData } from '../../assets/brand'
import ViewAllButton from '../../components/viewAllButton';
import BuilderCard from '../../components/builderCard';

function BuildersList() {
  const features = featuresData[2];
  return (
    <div className='my-2 mt-5'>
        <CustomHeading title={features.title} description={features.shortDescription} />
        <div className="container">
          <div className="row justify-content-center">
          <BuilderCard />
          <BuilderCard />
          <BuilderCard />
          </div>
        </div>
        <ViewAllButton title={`View All ${features.title}`} />
    </div>
  )
}

export default BuildersList
