export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            DevStudio
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-sm hover:text-blue-400 transition">Features</a>
            <a href="#" className="text-sm hover:text-blue-400 transition">Pricing</a>
            <a href="#" className="text-sm hover:text-blue-400 transition">About</a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block">
            <span className="text-sm font-semibold text-blue-300 bg-blue-950/50 px-4 py-2 rounded-full border border-blue-800">
              🚀 Next Generation Platform
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
            <span className="block text-white mb-2">Elevate Your</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Web Development Game
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Harness the power of modern web technologies with our comprehensive development platform. 
            Build scalable, performant applications faster than ever before with intelligent tools and seamless workflows.
          </p>
          
          <p className="text-base text-gray-400 mb-10 max-w-2xl mx-auto">
            Used by developers at leading tech companies worldwide to ship products 10x faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold text-white text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Start Building Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
            <button className="px-8 py-4 border-2 border-blue-500/50 rounded-lg font-bold text-white text-lg hover:bg-blue-600/20 transition-all duration-300 backdrop-blur-sm">
              View Documentation
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-sm text-gray-400">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50M+</div>
              <div className="text-sm text-gray-400">Requests Daily for code</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Optimized for speed with 99.9% uptime" },
              { icon: "🔒", title: "Secure & Reliable", desc: "Enterprise-grade security standards" },
              { icon: "🎨", title: "Beautiful UI", desc: "Modern design system included" },
              { icon: "📱", title: "Mobile Ready", desc: "Perfect on all devices and screens" },
              { icon: "🚀", title: "Easy Deploy", desc: "One-click deployment to production" },
              { icon: "💬", title: "24/7 Support", desc: "Always here to help you succeed" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "10K+", label: "Happy Users" },
              { stat: "99.9%", label: "Uptime" },
              { stat: "$2M", label: "Projects Built" },
              { stat: "50+", label: "Countries" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-white/10 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Ideas?</h2>
              <p className="text-lg text-gray-300 mb-8">Join thousands of developers building amazing products</p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                Start Building Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">DevStudio</h3>
              <p className="text-gray-400 text-sm">Building the future of web development</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm"><li><a href="#" className="hover:text-blue-400 transition">Features</a></li><li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li></ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm"><li><a href="#" className="hover:text-blue-400 transition">About</a></li><li><a href="#" className="hover:text-blue-400 transition">Blog</a></li></ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm"><li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li><li><a href="#" className="hover:text-blue-400 transition">Terms</a></li></ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 DevStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
