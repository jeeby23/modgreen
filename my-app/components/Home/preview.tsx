export default function Home() {
  return (
    <div className="relative min-h-auto w-full bg-black text-white font-sans">
      <div className="relative h-[80vh] w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-60">
          <source src="/video/footerVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
