# CUSTOS – AI Digital Perimeter Landing Page

**Website Documentation & Overview**

---

## 📋 Project Overview

**CUSTOS** is an intelligent AI hub that transforms any existing CCTV camera or DVR system into a smart, AI-powered security solution. This landing page serves as the primary marketing and engagement platform for the CUSTOS product, designed to attract potential customers, explain the product's value proposition, and facilitate lead generation through multiple contact channels.

### Key Positioning

CUSTOS is positioned as an **affordable, plug-and-play upgrade** for existing security infrastructure. Rather than requiring customers to replace their entire surveillance system, CUSTOS connects to any CCTV camera or DVR and adds enterprise-grade AI capabilities including real-time detection, behavior analysis, and autonomous alerts.

---

## 🎨 Design Philosophy

### Aesthetic: Techno-Minimalist Noir

The website employs a sophisticated, premium design language inspired by Tesla, Palantir, and Apple:

- **Color Palette**: Pure black background (#000000) with surgical white typography and electric blue accents (#00D9FF)
- **Typography**: General Sans font family for a futuristic, premium feel
- **Visual Effects**: Glass-morphism elements, glowing cyan accents, subtle animations, and scroll reveals
- **Layout**: Asymmetric, non-centered layouts that avoid generic grid structures
- **Depth**: Layered shadows, blur effects, and gradient overlays create visual hierarchy and premium feel

### CUSTOS Product Name Highlighting

The product name "CUSTOS" features a **glowing cyan effect** throughout the website to make it visually distinctive and memorable. The glow effect uses CSS animations to create a pulsing, eye-catching appearance that reinforces the AI/tech positioning.

---

## 📄 Page Structure

### 1. Hero Section
- **Full-screen video background** with dark overlay
- **Navigation bar** with CUSTOS branding and menu links
- **Hero heading**: "Give Your CCTV AI Brains" with cyan gradient text
- **Subheading**: Explains the core value proposition
- **CTA Buttons**:
  - "Request Access" → Opens WhatsApp with pre-filled demo booking message
  - "View Live Demo" → Navigates to interactive dashboard
  - "View on GitHub" → Links to your GitHub repository

### 2. How CUSTOS Works Section
- **4-step plug-and-play installation process**:
  1. Connect the Hub
  2. Configure Cameras
  3. Enable AI Features
  4. Get Instant Alerts
- **Plug & Play Integration card** emphasizing universal compatibility

### 3. AI-Powered Features Section
- **6 core features** with icons and descriptions:
  - Real-Time AI Detection
  - Intelligent Behavior Analysis
  - Autonomous Smart Alerts
  - Universal Camera Support
  - Dwell Time & Loitering Detection
  - Affordable AI Upgrade

### 4. Why Choose CUSTOS Section
- **3 key value propositions**:
  - Works With Any Camera (no vendor lock-in)
  - Affordable Upgrade (transform existing setup)
  - Instant Setup (plug-and-play, no technical expertise)

### 5. Use Cases Section
- **6 industry-specific scenarios**:
  - Corporate Offices
  - Retail & Warehouses
  - Residential Security
  - Parking Lots
  - Construction Sites
  - Healthcare Facilities

### 6. Contact Section
- **Multiple contact channels**:
  - WhatsApp: +91 74166 36417
  - Phone: +91 74166 36417
  - Email: p.varunthej@gmail.com
  - LinkedIn: Parimi Varun Thej
  - Instagram: @varun_thej
- **Contact form** with Name, Email, and Message fields
- **Form validation** and submission handling

### 7. Footer
- **Minimal footer** with links and copyright information
- Links to Privacy Policy, Terms, GitHub, and Contact

### 8. Dashboard Page
- **Interactive demo dashboard** accessible via "View Live Demo" button
- **Sidebar navigation** with Dashboard, Alerts, Evidence, and Analytics sections
- **Live feed area** with zone controls (All Zones, Zone A, Zone B, Zone C)
- **Risk score card** showing current security status
- **Recent activity timeline** with detection alerts
- **Real-time statistics** displaying:
  - 847 Detections
  - 99.8% Accuracy
  - 12 Alerts
  - 0 Critical Events
- **Back to Landing button** for easy navigation

---

## 🛠️ Technical Stack

### Frontend Framework
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Wouter** for client-side routing
- **Framer Motion** for animations
- **Lucide React** for icons
- **shadcn/ui** for pre-built components

### Project Structure
```
custos-landing/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Main landing page
│   │   │   ├── Dashboard.tsx     # Interactive dashboard demo
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── components/           # Reusable UI components
│   │   ├── hooks/
│   │   │   └── useScrollReveal.ts # Scroll animation hook
│   │   ├── App.tsx               # Main app component with routing
│   │   ├── main.tsx              # React entry point
│   │   ├── index.css             # Global styles and theme
│   │   └── custos.css            # CUSTOS-specific styles
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   └── index.html                # HTML template
├── server/
│   └── index.ts                  # Express server (static hosting)
├── package.json                  # Dependencies
└── WEBSITE_DOCUMENTATION.md      # This file
```

### Key Dependencies
- **React 19.2.1** – UI framework
- **Tailwind CSS 4.1.14** – Utility-first CSS
- **Framer Motion 12.23.22** – Animation library
- **Lucide React 0.453.0** – Icon library
- **Wouter 3.3.5** – Lightweight routing
- **shadcn/ui** – Pre-built components

---

## 🎯 Features & Functionality

### 1. Request Access Button
- **Action**: Opens WhatsApp with pre-filled message
- **Message**: "Thanks for reaching out! Hope our innovation makes your existing setup even better. I'd love to book a demo to show you how CUSTOS works in your day-to-day life. Want to experience it? Book an appointment for the demo!"
- **Contact**: +91 74166 36417

### 2. View Live Demo Button
- **Action**: Navigates to `/dashboard` route
- **Content**: Interactive dashboard UI showing monitoring interface, risk scores, and activity timeline
- **Purpose**: Allows prospects to experience the CUSTOS interface without requiring backend integration

### 3. Contact Form
- **Fields**: Name, Email, Message
- **Validation**: Basic client-side validation
- **Submission**: Currently displays success message (ready for backend integration)

### 4. Multiple Contact Channels
- **WhatsApp**: Direct messaging for quick inquiries
- **Phone**: +91 74166 36417 for voice calls
- **Email**: p.varunthej@gmail.com for formal inquiries
- **LinkedIn**: Professional networking profile
- **Instagram**: Social media presence

### 5. Scroll Animations
- **Intersection Observer** hook triggers animations as sections come into view
- **Fade-in and slide effects** for visual interest
- **Smooth transitions** enhance user experience

---

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1920px and above)
- **Laptop** (1024px - 1919px)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

Key responsive behaviors:
- Navigation adapts for smaller screens
- Feature cards stack vertically on mobile
- Hero section scales appropriately
- Contact form remains accessible on all devices

---

## 🚀 Deployment & Publishing

### Current Status
- **Development Server**: Running on port 3000
- **Preview URL**: https://3000-iuwa2t21uirulu6b5t5cp-d1585494.sg1.manus.computer

### Publishing
To publish this website:
1. Click the **Publish** button in the Manus UI (requires a checkpoint)
2. The site will be deployed to a public URL
3. Custom domain support is available through Manus settings

### GitHub Repository
- **Repository**: https://github.com/varunthej-8630/custos-AD.git
- **Content**: Landing page code only (backend remains private)
- **Access**: Public repository for transparency

---

## 📊 Analytics & Tracking

The website includes built-in analytics tracking via Umami:
- **Tracking ID**: Configured in environment variables
- **Metrics**: Page views, user interactions, form submissions
- **Dashboard**: Available in Manus management UI

---

## 🔐 Security & Privacy

- **HTTPS**: All connections are encrypted
- **Privacy Policy**: Link provided in footer
- **Terms of Service**: Link provided in footer
- **Form Data**: Contact form submissions ready for secure backend processing

---

## 🎬 Next Steps & Recommendations

### 1. Backend Integration (High Priority)
**Upgrade to web-db-user** to enable:
- Contact form submissions saved to database
- Email notifications when leads reach out
- Lead tracking and analytics
- Automated responses to inquiries

### 2. Real-Time Dashboard Data (Medium Priority)
- Connect dashboard to actual camera feeds
- Integrate real-time AI detection data
- Display live statistics instead of mock data
- Add video stream playback

### 3. Social Proof & Credibility (Medium Priority)
- Add customer testimonials section
- Include case studies with metrics (e.g., "Reduced false alarms by 95%")
- Display customer logos or trust badges
- Add success metrics (e.g., "Protecting 500+ properties")

### 4. SEO Optimization (Low Priority)
- Add meta descriptions and keywords
- Implement structured data (Schema.org)
- Create XML sitemap
- Add Open Graph tags for social sharing

### 5. Email Marketing Integration (Low Priority)
- Add newsletter signup form
- Integrate with email service (Mailchimp, SendGrid, etc.)
- Create automated welcome email sequence

---

## 📝 Content Management

### Editable Sections
All text content can be easily updated by modifying the following files:
- **Hero Section**: `client/src/pages/Home.tsx` (lines 175-189)
- **Features**: `client/src/pages/Home.tsx` (lines 42-65)
- **Use Cases**: `client/src/pages/Home.tsx` (lines 67-95)
- **Contact Information**: `client/src/pages/Home.tsx` (lines 27-40)

### Styling Customization
- **Global Theme**: `client/src/index.css`
- **CUSTOS Styles**: `client/src/custos.css`
- **Component Styles**: Tailwind utility classes in component files

---

## 🐛 Known Limitations & Future Enhancements

### Current Limitations
1. **Dashboard is static** – Shows mock data, not connected to real camera feeds
2. **Contact form doesn't send emails** – Ready for backend integration
3. **No user authentication** – Public landing page only
4. **No database integration** – Contact submissions not persisted

### Future Enhancements
1. Live camera feed integration via WebRTC or RTMP
2. Real-time AI detection data visualization
3. User account system with demo access
4. API documentation for developers
5. Blog section for security tips and industry insights
6. Pricing calculator based on camera count
7. Live chat support widget
8. Video tutorials and product demos

---

## 📞 Support & Maintenance

### Contact Information
- **Email**: p.varunthej@gmail.com
- **Phone**: +91 74166 36417
- **WhatsApp**: +91 74166 36417
- **LinkedIn**: Parimi Varun Thej
- **Instagram**: @varun_thej

### Version History
- **v1.0** (Current): Initial landing page with dashboard demo
  - Hero section with video background
  - Feature showcase
  - Use case scenarios
  - Interactive dashboard demo
  - Multi-channel contact options

---

## 📄 License & Attribution

This website is built with:
- **React** – MIT License
- **Tailwind CSS** – MIT License
- **Framer Motion** – MIT License
- **shadcn/ui** – MIT License

---

**Last Updated**: March 19, 2026  
**Status**: Production Ready  
**Maintained By**: Parimi Varun Thej
