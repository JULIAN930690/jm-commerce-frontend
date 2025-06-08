import React from 'react'

const banners = [
  {
    id: 1,
    image: 'https://http2.mlstatic.com/D_NQ_669597-MLA74693228109_022024-OO.webp',
    alt: 'Samsung Promo',
  },
  {
    id: 2,
    image: 'https://http2.mlstatic.com/D_NQ_625949-MLA74730125279_022024-OO.webp',
    alt: 'Smartwatch Oferta',
  },
  {
    id: 3,
    image: 'https://http2.mlstatic.com/D_NQ_938403-MLA74850668234_032024-OO.webp',
    alt: 'Gaming Week',
  },
]

const BannerSlider = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex animate-slide">
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.image}
            alt={banner.alt}
            className="w-full object-cover h-[300px] flex-shrink-0 transition-all duration-500"
          />
        ))}
      </div>
    </div>
  )
}

export default BannerSlider
