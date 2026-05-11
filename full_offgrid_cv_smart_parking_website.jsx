export default function SmartParkingSystemWebsite() {
  const parkingSlots = [
    'Available',
    'Occupied',
    'Available',
    'Occupied',
    'Available',
    'Available',
    'Occupied',
    'Available',
    'Occupied',
    'Available',
    'Available',
    'Occupied',
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-wide text-[#bf3612]">
              SMARTPARK AI
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#home" className="hover:text-[#bf3612] transition">
              Home
            </a>
            <a href="#features" className="hover:text-[#bf3612] transition">
              Features
            </a>
            <a href="#workflow" className="hover:text-[#bf3612] transition">
              Workflow
            </a>
            <a href="#dashboard" className="hover:text-[#bf3612] transition">
              Dashboard
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-6 pt-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#bf361240,transparent_50%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#bf3612] text-sm mb-4">
              Off-Grid Computer Vision Technology
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Intelligent
              <span className="block text-[#bf3612]">Smart Parking</span>
              Monitoring System
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
              A solar-powered computer vision-based parking system using
              ESP32-CAM, Raspberry Pi, and YOLOv8n to detect parking occupancy
              and display real-time parking availability through a modern web
              interface.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#bf3612] hover:bg-[#d9471d] transition px-8 py-4 rounded-2xl font-bold shadow-2xl">
                Live Monitoring
              </button>

              <button className="border border-white/20 hover:border-[#bf3612] hover:text-[#bf3612] transition px-8 py-4 rounded-2xl font-bold">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-black text-[#bf3612]">98%</h2>
                <p className="text-gray-400 text-sm mt-1">Accuracy</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-black text-[#bf3612]">24/7</h2>
                <p className="text-gray-400 text-sm mt-1">Monitoring</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-black text-[#bf3612]">Solar</h2>
                <p className="text-gray-400 text-sm mt-1">Powered</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#bf3612]/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop"
                alt="Parking"
                className="rounded-[1.5rem] h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 px-6 bg-[#101010]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-[#bf3612] text-sm mb-4">
              System Features
            </p>

            <h2 className="text-5xl font-black">
              AI-Powered Smart Parking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Computer Vision',
                desc: 'YOLOv8n detects vehicle occupancy in parking slots.',
              },
              {
                title: 'Real-Time Website',
                desc: 'Parking availability updates instantly through the website.',
              },
              {
                title: 'Off-Grid System',
                desc: 'Solar-powered setup with battery backup operation.',
              },
              {
                title: 'Smart Monitoring',
                desc: 'Automated monitoring reduces manual parking supervision.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-[2rem] p-8 hover:border-[#bf3612] transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#bf3612]/20 flex items-center justify-center mb-6">
                  <div className="w-7 h-7 bg-[#bf3612] rounded-full" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="py-28 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-[#bf3612] text-sm mb-4">
              System Workflow
            </p>

            <h2 className="text-5xl font-black">
              How The System Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              'ESP32-CAM captures parking area video feed.',
              'Raspberry Pi processes the captured video.',
              'YOLOv8n detects vehicle occupancy in slots.',
              'Website displays available and occupied spaces.',
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-[#121212] border border-white/10 rounded-[2rem] p-8"
              >
                <div className="absolute top-5 right-6 text-6xl font-black text-[#bf3612]/20">
                  0{index + 1}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-[#bf3612] flex items-center justify-center font-black text-xl mb-8">
                  {index + 1}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE DASHBOARD */}
      <section id="dashboard" className="py-28 px-6 bg-[#101010]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#bf3612] text-sm mb-4">
              Live Dashboard
            </p>

            <h2 className="text-5xl font-black leading-tight mb-6">
              Real-Time Parking
              <span className="block text-[#bf3612]">Slot Monitoring</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Users can monitor available and occupied parking spaces in real
              time through the smart parking dashboard interface powered by AI
              and computer vision.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black border border-green-500/20 rounded-3xl p-8">
                <h2 className="text-5xl font-black text-green-400 mb-2">7</h2>
                <p className="text-gray-400">Available Slots</p>
              </div>

              <div className="bg-black border border-red-500/20 rounded-3xl p-8">
                <h2 className="text-5xl font-black text-red-400 mb-2">5</h2>
                <p className="text-gray-400">Occupied Slots</p>
              </div>
            </div>
          </div>

          <div className="bg-black border border-white/10 rounded-[2rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black">Parking Overview</h3>

              <div className="flex items-center gap-2 text-sm text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                LIVE
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {parkingSlots.map((slot, index) => (
                <div
                  key={index}
                  className={`rounded-2xl h-28 flex flex-col items-center justify-center border text-sm font-bold transition ${
                    slot === 'Available'
                      ? 'bg-green-500/15 border-green-500/30 text-green-400'
                      : 'bg-red-500/15 border-red-500/30 text-red-400'
                  }`}
                >
                  <p className="text-xs mb-2 text-gray-400">
                    SLOT {index + 1}
                  </p>
                  <p>{slot}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-28 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-[#bf3612] text-sm mb-4">
            Technologies Used
          </p>

          <h2 className="text-5xl font-black mb-16">
            Hardware & Software Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              'ESP32-CAM',
              'Raspberry Pi 4',
              'YOLOv8n',
              'Solar Panel',
              'LiFePO4 Battery',
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-white/10 rounded-3xl p-8 hover:border-[#bf3612] transition"
              >
                <h3 className="text-xl font-bold text-[#bf3612]">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-[#bf3612] mb-2">
              SMARTPARK AI
            </h2>

            <p className="text-gray-500 max-w-lg">
              Development of an Off-Grid Computer Vision-Based Smart Parking
              System using ESP32-CAM, Raspberry Pi, and YOLOv8n.
            </p>
          </div>

          <div className="text-gray-500 text-sm">
            © 2026 SmartPark AI. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
