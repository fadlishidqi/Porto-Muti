// app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center cursor-wait">
      
      {/* 1. Background Ambience (Sangat halus) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] opacity-20 animate-pulse" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-[200px]">
        
        {/* Text Header */}
        <div className="flex items-center justify-between w-full text-[10px] font-mono text-neutral-500 tracking-[0.2em] uppercase">
          <span>Loading</span>
          <span className="animate-pulse">...</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-neutral-800 relative overflow-hidden">
          
          {/* Animated Bar (Bergerak terus menerus) */}
          <div className="absolute inset-y-0 left-0 bg-white w-1/2 h-full animate-[shimmer_1.5s_infinite] shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          
        </div>

        {/* Technical Footer */}
        <div className="flex justify-between w-full text-[9px] font-mono text-neutral-600">
          <span>ASSET_FETCH</span>
          <span>V.1.0</span>
        </div>

      </div>

      {/* 3. Custom CSS Animation untuk bar bergerak */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          50% { transform: translateX(50%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}