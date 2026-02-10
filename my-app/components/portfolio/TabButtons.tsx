interface TabButtonsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function TabButtons({ activeTab, setActiveTab }: TabButtonsProps) {
  return (
    <div className="border-b border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-20 pb-8">
        <div className="flex gap-8 text-sm md:text-base font-bold tracking-wider uppercase">
          {['MODEL', 'ADVENTURES'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 ${
                activeTab === tab
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}