# CUSTOS Landing Page Design Philosophy

## Selected Design Approach: **Techno-Minimalist Noir**

### Design Movement
**Techno-Minimalist Noir** – A fusion of high-tech minimalism (Tesla, Palantir) with noir cinematography. Pure black backgrounds, surgical white typography, and strategic blue accents that evoke advanced surveillance systems and cutting-edge AI interfaces.

### Core Principles
1. **Absolute Contrast**: Pure black (#000000) backgrounds with pure white text create maximum readability and convey precision
2. **Micro-Interactions Over Clutter**: Every animation serves a purpose—scroll reveals, glassy borders, and subtle glows communicate sophistication without noise
3. **Surgical Hierarchy**: Typography and spacing guide the eye with intentionality; no decorative elements exist without function
4. **Technological Authenticity**: Visual language mirrors real surveillance/AI systems—code snippets, system logs, radar animations, and network topology

### Color Philosophy
- **Primary**: Pure Black (#000000) – Authority, precision, depth
- **Secondary**: Pure White (#FFFFFF) – Clarity, trust, contrast
- **Accent**: Electric Blue (#00D9FF or similar cyan) – Intelligence, surveillance, active systems
- **Supporting**: White/10% opacity for subtle borders and glass effects
- **Emotional Intent**: Conveys security, sophistication, and technological prowess without aggression

### Layout Paradigm
**Asymmetric Vertical Flow** – Avoid centered grids. Instead:
- Hero section dominates with full-height video
- Content sections alternate between left-aligned and right-aligned text
- Feature cards use asymmetric bento layout (2-column grid with varied card sizes)
- Whitespace creates breathing room; sections have generous vertical padding
- No rigid grid—organic flow that guides the eye downward

### Signature Elements
1. **Glassy Borders**: Semi-transparent white borders (rgba(255,255,255,0.05)) with subtle backdrop blur
2. **Blue Glow Accents**: Thin blue lines, glowing dots, and edge highlights that suggest active systems
3. **System Log Marquee**: Continuous scrolling text ticker ("Threat Detected → Sector 04") replacing traditional logo carousel

### Interaction Philosophy
- **Scroll Reveals**: Elements slide up 40px and fade in as they enter viewport (Intersection Observer)
- **Hover Glows**: Interactive elements intensify blue glow on hover
- **Smooth Transitions**: All state changes use 300-400ms easing (cubic-bezier)
- **Micro-feedback**: Buttons pulse slightly, cards lift on hover

### Animation Guidelines
- **Entrance**: Stagger animations for lists (50ms delay between items)
- **Scroll**: Use Intersection Observer for reveal animations (fade + translateY)
- **Hover**: Subtle lift (translateY -4px) + glow intensification
- **Loading**: Pulsing dots, radar sweeps for system status
- **Principle**: Animations enhance clarity, never distract

### Typography System
- **Display Font**: "General Sans" (Fontshare) – Bold, futuristic, used for headings (56px desktop, 36px mobile)
- **Body Font**: "General Sans" (Fontshare) – Medium weight for navigation and body text (14-18px)
- **Hierarchy**:
  - H1 (Hero): 56px, font-medium, gradient fade
  - H2 (Section): 48px, font-medium, white
  - H3 (Card): 18px, font-medium, white
  - Body: 15px, white/70%, line-height 1.6
  - Caption: 13px, white/50%, uppercase tracking
- **Gradient Text**: Linear gradient (145deg) from white to transparent on hero and CTA headings

---

## Implementation Notes
- All animations use Framer Motion for performance
- Intersection Observer for scroll reveals (no library overhead)
- Tailwind CSS for utility-first styling
- Pure black background enforced globally
- Blue glow effects use CSS box-shadow or SVG filters
- Video backgrounds use native HTML5 video with overlay
- Code editor component uses syntax highlighting with premium colors
