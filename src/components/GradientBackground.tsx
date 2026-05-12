export default function GradientBackground() {
  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: '#000',
      }}
      aria-hidden="true"
    >
      {/* верхний левый — фиолетовый */}
      <div style={{
        position: 'absolute',
        width: '45vw', height: '45vw',
        top: '-5vw', left: '-5vw',
        background: 'radial-gradient(circle, rgba(70,15,110,0.45) 0%, transparent 70%)',
        filter: 'blur(30px)',
        animation: 'blob-drift-1 28s ease-in-out infinite',
        willChange: 'transform',
      }} />
      {/* нижний правый — синий */}
      <div style={{
        position: 'absolute',
        width: '40vw', height: '40vw',
        bottom: '5vw', right: '-5vw',
        background: 'radial-gradient(circle, rgba(10,30,100,0.5) 0%, transparent 70%)',
        filter: 'blur(30px)',
        animation: 'blob-drift-2 36s ease-in-out infinite',
        willChange: 'transform',
      }} />
      {/* центр — тёмно-бирюзовый */}
      <div style={{
        position: 'absolute',
        width: '35vw', height: '35vw',
        top: '40vh', left: '30vw',
        background: 'radial-gradient(circle, rgba(0,55,65,0.40) 0%, transparent 70%)',
        filter: 'blur(35px)',
        animation: 'blob-drift-3 44s ease-in-out infinite',
        willChange: 'transform',
      }} />
    </div>
  )
}
