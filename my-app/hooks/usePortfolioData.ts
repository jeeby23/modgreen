import { useState, useEffect } from 'react'
import { createClient } from 'contentful'
import type { PortfolioSkeleton, FlattenedImage } from '@/types/portfolio'  
import { contentTypes } from '@/types/portfolio'  

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
})

export const usePortfolioData = (activeTab: string) => {
  const [models, setModels] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoading(true)
        const { type } = contentTypes[activeTab]

        const response = await client.getEntries<PortfolioSkeleton>({
          content_type: type,
          limit: 100,
          include: 2,
        })

        const resolvedModels = response.items.map((item) => ({
          ...item,
          fields: {
            ...item.fields,
            images: (item.fields[contentTypes[activeTab].field] as any[])?.map((link: any) =>
              response.includes?.Asset?.find((asset) => asset.sys.id === link.sys.id)
            ).filter(Boolean) || [],
          },
        }))

        setModels(resolvedModels)
      } catch (err: any) {
        console.error(err)
        setError('Failed to load models')
      } finally {
        setLoading(false)
      }
    }

    fetchModels()
  }, [activeTab])

  const filteredModels = models.filter((model) => {
    if (activeTab === 'ADVENTURES') return true
    const categories = model.fields.category
    if (!categories || categories.length === 0) return true
    return categories.some((cat: string) =>
      cat.toLowerCase().includes(activeTab.toLowerCase())
    )
  })

  const allImages: FlattenedImage[] = filteredModels.flatMap((model) => {
    const modelName = activeTab === 'MODEL'
      ? (model.fields.name?.[0] ?? `Model ${model.sys.id}`)
      : (model.fields.cities?.[0] ?? 'Adventure')
    const agency = activeTab === 'MODEL' ? model.fields.agency?.[0] : null
    return model.fields.images?.map((image: any, index: number) => ({
      image,
      modelName,
      agency,
      modelId: model.sys.id,
      assetId: image.sys.id,
      index,
    })) || []
  })

  return { allImages, loading, error }
}