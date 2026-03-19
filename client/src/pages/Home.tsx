import { useRef, useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MessageCircle, Linkedin, Instagram, Send, Plug, Zap, Lock, Camera, Settings, AlertCircle } from 'lucide-react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const installRef = useScrollReveal();
  const usecasesRef = useScrollReveal();
  const contactRef = useScrollReveal();
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Request Access - WhatsApp with auto message
  const handleRequestAccess = () => {
    const message = encodeURIComponent(
      "Thanks for reaching out! 🙌\n\nI'm interested in CUSTOS – the AI hub for CCTV cameras.\n\nI would love to book a demo to see how it works with my existing security setup. Can we schedule an appointment?\n\nLooking forward to experiencing it!\n\n- Parimi Varun Thej"
    );
    window.open(`https://wa.me/917416636417?text=${message}`, '_blank');
  };

  // View Live Demo - Navigate to dashboard
  const handleViewDemo = () => {
    window.location.href = '/dashboard';
  };

  // Features data
  const features = [
    {
      icon: '🎯',
      title: 'Real-Time AI Detection',
      description: 'Detects humans, vehicles, and anomalies instantly. Works with any CCTV feed.',
    },
    {
      icon: '🧠',
      title: 'Intelligent Behavior Analysis',
      description: 'Learns normal patterns and alerts only on suspicious behavior. Reduces false alarms.',
    },
    {
      icon: '📡',
      title: 'Autonomous Smart Alerts',
      description: 'Sends instant notifications with snapshots. Works offline with backup connectivity.',
    },
    {
      icon: '🔗',
      title: 'Universal Camera Support',
      description: 'Connects to any CCTV camera, DVR, or NVR. No proprietary hardware needed.',
    },
    {
      icon: '⏱️',
      title: 'Dwell Time & Loitering',
      description: 'Tracks how long people/vehicles linger. Perfect for parking lots, driveways, homes.',
    },
    {
      icon: '💰',
      title: 'Affordable AI Upgrade',
      description: 'Transform existing cameras into smart systems. No need to replace your setup.',
    },
  ];

  // Installation steps
  const installationSteps = [
    {
      number: '1',
      title: 'Connect the Hub',
      description: 'Plug CUSTOS hub into your network. It automatically detects connected CCTV cameras and DVRs.',
    },
    {
      number: '2',
      title: 'Configure Cameras',
      description: 'Select which cameras to monitor. Define protection zones and alert thresholds through the mobile app.',
    },
    {
      number: '3',
      title: 'Enable AI Features',
      description: 'Activate real-time detection, behavior analysis, and custom alerts. All AI runs locally on the hub.',
    },
    {
      number: '4',
      title: 'Get Instant Alerts',
      description: 'Receive notifications when suspicious activity is detected. Review snapshots and video clips anytime.',
    },
  ];

  // Use Cases data
  const usecases = [
    {
      icon: '🏢',
      title: 'Corporate Offices',
      description: 'Upgrade existing office cameras with AI. Monitor perimeters and restricted zones.',
    },
    {
      icon: '🏪',
      title: 'Retail & Warehouses',
      description: 'Prevent theft and unauthorized entry. Get alerts on suspicious behavior in real-time.',
    },
    {
      icon: '🏠',
      title: 'Residential Security',
      description: 'Protect your home and driveway. Get alerts when strangers linger or vehicles park nearby.',
    },
    {
      icon: '🚗',
      title: 'Parking Lots',
      description: 'Detect vehicle loitering and break-ins. Reduce theft and vandalism with AI monitoring.',
    },
    {
      icon: '🏗️',
      title: 'Construction Sites',
      description: 'Monitor equipment and materials. Alert on unauthorized personnel or vehicle intrusions.',
    },
    {
      icon: '🏥',
      title: 'Healthcare Facilities',
      description: 'Secure sensitive areas with AI. Monitor restricted zones and detect unauthorized access.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-black"></div>

        {/* Navbar */}
        <nav className="relative z-10 px-4 md:px-[120px] py-5 flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <span className="text-cyan-400 glow-text">CUSTOS</span>
          </div>
          <button onClick={handleRequestAccess} className="px-7 py-3 rounded-full text-white text-sm font-medium border border-white/60 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all duration-300">
            Request Access
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-20">
          {/* Badge */}
          <div className="badge mb-6">
            <span className="badge-dot"></span>
            <span>AI Hub for CCTV • Plug & Play • 2026</span>
          </div>

          {/* Heading with CUSTOS highlighted */}
          <h1 className="text-center max-w-[700px] text-5xl md:text-6xl font-medium leading-tight mb-6">
            Give Your CCTV <span className="text-cyan-400 glow-text">AI Brains</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center max-w-[680px] text-base md:text-lg text-white/70 mb-8">
            <span className="text-cyan-400 font-semibold glow-text">CUSTOS</span> is an intelligent hub that connects to any CCTV camera or DVR. Transform your existing security system into an AI-powered defense network with real-time detection, behavior analysis, and autonomous alerts.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <button onClick={handleViewDemo} className="glow-button">
              View Live Demo
            </button>
           
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" ref={howItWorksRef} className="relative py-24 px-4 md:px-8 border-t border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-medium gradient-text mb-4">
            How <span className="text-cyan-400 glow-text">CUSTOS</span> Works
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Simple plug-and-play setup. No technical expertise required. Your existing cameras become intelligent in minutes.
          </p>

          {/* Installation Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationSteps.map((step, idx) => (
              <div key={idx} className="glass-card p-8 relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                
                <h3 className="text-lg font-medium mb-3 text-white mt-4">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>

                {/* Arrow to next step */}
                {idx < installationSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 text-cyan-400 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Key Benefit Box */}
          <div className="mt-16 glass-card p-8 border border-cyan-400/30 bg-cyan-400/5">
            <div className="flex items-start gap-4">
              <Plug className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Plug & Play Integration</h3>
                <p className="text-white/70">No need to replace your existing CCTV setup. CUSTOS connects to any camera, DVR, or NVR system. Works with all brands. Just plug in power, connect to network, and you're done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative py-24 px-4 md:px-8 border-t border-white/10">
        {/* Ambient Blur Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-medium gradient-text mb-4">
            AI-Powered Features
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Enterprise-grade AI capabilities, now available for your existing cameras.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card p-8 hover:translate-y-[-4px] transition-transform">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-white">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CUSTOS Section */}
      <section className="relative py-24 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-medium gradient-text mb-16">
            Why Choose <span className="text-cyan-400 glow-text">CUSTOS</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="glass-card p-8">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-medium mb-3 text-white">Works With Any Camera</h3>
              <p className="text-white/60">No vendor lock-in. CUSTOS connects to any CCTV camera, DVR, or NVR system—regardless of brand or age.</p>
            </div>

            {/* Benefit 2 */}
            <div className="glass-card p-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-medium mb-3 text-white">Affordable Upgrade</h3>
              <p className="text-white/60">Transform your existing security setup into an AI powerhouse. No need to replace cameras or infrastructure.</p>
            </div>

            {/* Benefit 3 */}
            <div className="glass-card p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-medium mb-3 text-white">Instant Setup</h3>
              <p className="text-white/60">Plug-and-play installation. No technical expertise needed. Get AI-powered monitoring running in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" ref={usecasesRef} className="relative py-24 px-4 md:px-8 border-t border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-medium gradient-text mb-4">
            Perfect For Every Scenario
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            From homes to enterprises, <span className="text-cyan-400 font-semibold">CUSTOS</span> upgrades any security setup.
          </p>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usecases.map((usecase, idx) => (
              <div key={idx} className="glass-card p-8 hover:translate-y-[-4px] transition-transform">
                <div className="text-4xl mb-4">{usecase.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-white">{usecase.title}</h3>
                <p className="text-white/60">{usecase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="relative py-24 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 gradient-text">
            Get in Touch
          </h2>
          <p className="text-center text-white/60 mb-12">
            Ready to upgrade your security system? Reach out today for a personalized demo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium mb-6">Contact Channels</h3>
              
              {/* WhatsApp */}
              <a href="https://wa.me/917416636417" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-start gap-4 hover:translate-y-[-4px] transition-transform">
                <MessageCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">WhatsApp</h4>
                  <p className="text-white/60 text-sm">+91 74166 36417</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+917416636417" className="glass-card p-6 flex items-start gap-4 hover:translate-y-[-4px] transition-transform">
                <Phone className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Phone Call</h4>
                  <p className="text-white/60 text-sm">+91 74166 36417</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:p.varunthej@gmail.com" className="glass-card p-6 flex items-start gap-4 hover:translate-y-[-4px] transition-transform">
                <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-white/60 text-sm">p.varunthej@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/parimi-varun-thej-342486372/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-start gap-4 hover:translate-y-[-4px] transition-transform">
                <Linkedin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <p className="text-white/60 text-sm">Parimi Varun Thej</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/varun_thej/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-start gap-4 hover:translate-y-[-4px] transition-transform">
                <Instagram className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Instagram</h4>
                  <p className="text-white/60 text-sm">@varun_thej</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-medium mb-6">Send a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="contact-input w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="contact-input w-full"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="contact-input w-full resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="glow-button w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                {formSubmitted && (
                  <p className="text-cyan-400 text-sm text-center">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/80 font-medium">
            <span className="text-cyan-400">CUSTOS</span> – AI Hub for CCTV
          </div>
          <div className="flex gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="https://github.com/varunthej-8630/custos-AD.git" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-white/30 text-sm">© 2026 CUSTOS</div>
        </div>
      </footer>
    </div>
  );
}
