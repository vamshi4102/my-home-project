import React from 'react'
import SlideShow from './slideShow'
import ProductsList from './productsList'
import WorkersList from './workersList'
import BuildersList from './buildersList'
function HomePage() {
  return (
    <div>
      <SlideShow />
      <ProductsList />
      <WorkersList />
      <BuildersList />
    </div>
  )
}

export default HomePage
