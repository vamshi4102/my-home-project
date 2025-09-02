import React from 'react'
import CustomHeading from '../../components/customHeading'
import { featuresData } from '../../assets/brand'
import ViewAllButton from '../../components/viewAllButton';
import WorkerCard from '../../components/workerCard';

function WorkersList() {
  const features = featuresData[1];
  return (
    <div className='my-2 mt-5'>
        <CustomHeading title={features.title} description={features.shortDescription} />
        <div className="container">
          <div className="row justify-content-center">
          <WorkerCard />
          <WorkerCard />
          </div>
          <div className="row justify-content-center">
          <WorkerCard />
          <WorkerCard />
          </div>
        </div>
        <ViewAllButton title={`View All ${features.title}`} />
    </div>
  )
}

export default WorkersList
