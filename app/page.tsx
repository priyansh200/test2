export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TechVision
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm hover:text-teal-400 transition">Features</a>
            <a href="#testimonials" className="text-sm hover:text-teal-400 transition">Testimonials</a>
            <a href="#pricing" className="text-sm hover:text-teal-400 transition">Pricing</a>
            <a href="#faq" className="text-sm hover:text-teal-400 transition">FAQ</a>
            <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(20,184,166,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block">
            <span className="text-sm font-semibold text-teal-300 bg-teal-950/50 px-4 py-2 rounded-full border border-teal-700">
              ✨ The Future of Web Development is Here
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
            <span className="block text-white mb-3">Build Amazing</span>
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Create stunning, high-performance web applications with our cutting-edge platform. 
            Join thousands of developers building the future of the internet.
          </p>
          
          <p className="text-base text-gray-400 mb-10 max-w-2xl mx-auto">
            Lightning-fast deployment • Enterprise-grade security • Unlimited scalability
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-bold text-white text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Start Free Trial
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
            <button className="px-8 py-4 border-2 border-teal-500/50 rounded-lg font-bold text-white text-lg hover:bg-teal-600/20 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-teal-500/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">50K+</div>
              <div className="text-sm text-gray-400">Happy Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100M+</div>
              <div className="text-sm text-gray-400">Daily Requests</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Everything you need to build modern web applications</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Ultra Fast", desc: "Lightning-quick performance with global CDN coverage" },
              { icon: "🔒", title: "Secure", desc: "Military-grade encryption and advanced security features" },
              { icon: "🎨", title: "Beautiful UI", desc: "Pre-built components and design system included" },
              { icon: "📱", title: "Responsive", desc: "Perfect experience on mobile, tablet, and desktop" },
              { icon: "🚀", title: "Easy Deploy", desc: "One-click deployment with zero downtime" },
              { icon: "💬", title: "24/7 Support", desc: "Expert support team always ready to help you" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 border border-teal-500/20 rounded-2xl hover:border-teal-500/50 bg-gradient-to-br from-teal-950/30 to-cyan-950/30 hover:from-teal-950/50 hover:to-cyan-950/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16">Loved by Developers</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Senior Developer", quote: "This platform completely transformed our development workflow. We ship 3x faster now." },
              { name: "Mike Johnson", role: "CTO", quote: "The reliability and support are unmatched. Our uptime improved dramatically." },
              { name: "Emma Rodriguez", role: "Full Stack Dev", quote: "Best decision we made for our team. The documentation and tools are incredible." },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 border border-teal-500/20 rounded-2xl bg-gradient-to-br from-teal-950/40 to-slate-950">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;Testimonials&quot;</p>
                <div>
                  <p className="font-bold text-teal-400">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.05),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Choose the perfect plan for your needs</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$29", features: ["Up to 5 projects", "10GB storage", "Community support", "Basic analytics"] },
              { name: "Pro", price: "$79", features: ["Unlimited projects", "1TB storage", "Priority support", "Advanced analytics", "Custom domains"], popular: true },
              { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Dedicated support", "SLA guarantee", "Custom integrations", "Training included"] },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "border-teal-500 bg-gradient-to-br from-teal-950/60 to-cyan-950/60 transform scale-105 shadow-2xl shadow-teal-500/20"
                    : "border-teal-500/20 bg-gradient-to-br from-teal-950/30 to-slate-950 hover:border-teal-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-teal-400">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400 ml-2">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-teal-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-teal-500 to-cyan-600 hover:shadow-lg hover:shadow-teal-500/50"
                    : "border border-teal-500/30 hover:bg-teal-600/20"
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              { q: "How do I get started?", a: "Simply sign up for a free trial account and follow our quick setup guide. You'll be building within minutes." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers." },
              { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription anytime without penalties or hidden fees." },
              { q: "Do you offer a free trial?", a: "Absolutely! Get 14 days of full access to all Pro features, no credit card required." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-teal-500/20 rounded-xl hover:border-teal-500/50 transition-all hover:bg-teal-950/20">
                <h3 className="text-lg font-bold text-teal-400 mb-3">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-teal-600/20 via-cyan-600/20 to-blue-600/20 border border-teal-500/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(20,184,166,0.1),transparent)]"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of developers building the future. Start your free trial today.</p>
              <button className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-bold text-white text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
                Start Your Free Trial
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-teal-500/20 py-12 px-6 bg-slate-950/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-teal-400 mb-4">TechVision</h3>
              <p className="text-gray-400 text-sm">Building the future of web development together.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition">About</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition">Documentation</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-teal-500/20 pt-8 text-center">
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">Discord</a>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2026 TechVision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
