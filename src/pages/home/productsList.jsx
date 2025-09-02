import React from 'react'
import CustomHeading from '../../components/customHeading'
import { featuresData } from '../../assets/brand'
import ProductCard from '../../components/productCard';
import ViewAllButton from '../../components/viewAllButton';

function ProductsList() {
  const features = featuresData[0];
  return (
    <div className='my-2 mt-5'>
        <CustomHeading title={features.title} description={features.shortDescription} />
        <div className="container">
          <div className="row row justify-content-center row-cols-2 row-cols-lg-5 g-3 g-lg-3" style={{gap:15}}>
            <ProductCard image={"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"} title={"camera SHD"} />
            <ProductCard image={"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"} title={"camera SHD"} />
            <ProductCard image={"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"} title={"camera SHD"} />
            <ProductCard image={"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"} title={"camera SHD"} />
            <ProductCard image={"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"} title={"camera SHD"} />
            <ProductCard image={"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"} title={"camera SHD"} />
            <ProductCard image={"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"} title={"camera SHD"} />
            <ProductCard image={"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"} title={"camera SHD"} />
          </div>
        </div>
        <ViewAllButton title={`View All ${features.title}`} />
    </div>
  )
}

export default ProductsList
