import { ReactNode } from "react"

interface BaseLayoutProps {
  children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="max-w-screen-7xl   px-6 py-6 md:px-12">
      {children}
    </div>
  )
}