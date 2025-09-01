import React from 'react'
import CustomHeading from '../../components/customHeading'
import { featuresData } from '../../assets/brand'

function ProductsList() {
  const features = featuresData[0];
  return (
    <div className='my-2'>
        <CustomHeading title={features.title} description={features.shortDescription} />
    </div>
  )
}

export default ProductsList
