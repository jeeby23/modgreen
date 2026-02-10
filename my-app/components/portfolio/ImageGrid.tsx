import Image from 'next/image'
import type { FlattenedImage } from '@/types/portfolio'

interface ImageGridProps {
  allImages: FlattenedImage[]
  viewMode: 'grid' | 'list'
}

export default function ImageGrid({ allImages, viewMode }: ImageGridProps) {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16">
      <div
        className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
            : 'grid-cols-1'
        }`}
      >
        {allImages.map((item) => {
          const { image, modelName, agency, modelId, assetId, index } = item
          const imageUrl = image?.fields?.file?.url
            ? `https:${image.fields.file.url}`
            : '/image/placeholder.jpg'

          return (
            <div key={`${modelId}-${assetId}-${index}`} className="group relative">
              <div className="relative aspect-[3/4] bg-gray-900">
                <Image
                  src={imageUrl}
                  alt={modelName}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
