 'use client'

import { useState } from 'react'
import { usePortfolioData } from '../../hooks/usePortfolioData' 
import TabButtons from './TabButtons'
import ImageGrid from './ImageGrid'

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState('MODEL')
  const [viewMode] = useState<'grid' | 'list'>('grid')  
  const { allImages, loading, error } = usePortfolioData(activeTab)

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Loading portfolio...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <ImageGrid allImages={allImages} viewMode={viewMode} />
    </div>
  )
}