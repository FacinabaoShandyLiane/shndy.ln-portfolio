function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F8F3FF]">
      {/* Big Gradient Blobs */}

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#E6D5F7] rounded-full blur-[150px] opacity-70 animate-pulse"></div>

      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#D8B4F8] rounded-full blur-[150px] opacity-50"></div>

      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-80"></div>

      {/* Small Floating Shapes */}

      <div className="absolute top-[20%] left-[15%] w-20 h-20 bg-white/60 rounded-3xl rotate-12 backdrop-blur-md"></div>

      <div className="absolute bottom-[20%] right-[20%] w-16 h-16 bg-[#E6D5F7] rounded-full"></div>

      <div className="absolute top-[60%] left-[60%] w-12 h-12 bg-[#C8A2C8] rounded-full opacity-60"></div>

      {/* Noise Overlay */}

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}

export default Background;
