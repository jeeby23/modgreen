import type { EntrySkeletonType } from 'contentful'
export type PortfolioSkeleton = EntrySkeletonType<Record<string, any>, string>

export const contentTypes: Record<string, { type: string; field: string }> = {
  MODEL: { type: 'model', field: 'model' },
  ADVENTURES: { type: 'adventures', field: 'adevnture01' },
}

export interface FlattenedImage {
  image: any
  modelName: string
  agency: string | null
  modelId: string
  assetId: string
  index: number
}