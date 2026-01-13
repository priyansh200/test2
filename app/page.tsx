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
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            Build the<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Future Today
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create stunning, high-performance web applications with our cutting-edge tools and frameworks. Transform your ideas into reality.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105">
              Get Started Free
            </button>
            <button className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition">
              Watch Demo
            </button>
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
