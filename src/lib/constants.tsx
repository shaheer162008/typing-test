import type { NavLink, FooterSection, Testimonial, FAQItem, BlogArticle } from "@/types";

export const navLinks: NavLink[] = [
  { name: "Practice by Time", href: "/practice" },
  { name: "Test by Time", href: "/test" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Sign In", href: "/sign-in" },
];

export const footerLinks: FooterSection[] = [
  {
    title: "Practice by Time",
    links: [
      { name: "1 Minute Test", href: "/1-minute-test" },
      { name: "2 Minute Test", href: "/2-minute-test" },
      { name: "3 Minute Test", href: "/3-minute-test" },
      { name: "5 Minute Test", href: "/5-minute-test" },
      { name: "10 Minute Test", href: "/10-minute-test" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Typing Test", href: "/test" },
      { name: "Practice", href: "/practice" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blogs", href: "/blogs" },
      { name: "Typing Tips", href: "/tips" },
      { name: "WPM Guide", href: "/wpm-guide" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "I went from 55 WPM to 95 WPM in just three weeks. The daily streaks kept me coming back every morning.",
    author: "Sarah M.",
    role: "Marketing Coordinator",
    avatarBg: "bg-blue-100 text-blue-600",
  },
  {
    quote: "The certificate I got here actually convinced my employer. Cleanest typing test UI I've ever used, no distractions.",
    author: "James K.",
    role: "Core Eng. Specialist",
    avatarBg: "bg-orange-100 text-orange-600",
  },
  {
    quote: "I practice during my lunch break. The 5-minute test is perfection. My accuracy jumped from 84% to 96%.",
    author: "Priya D.",
    role: "Data Administration Graduate",
    avatarBg: "bg-purple-100 text-purple-600",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How does your platform track typing performance?",
    answer: "We automatically track keystrokes, accuracy, and words-per-minute in real-time as you type, providing instant breakdowns without manual logging.",
  },
  {
    question: "Do I need an account to take a typing test?",
    answer: "No account is required to practice or take timed tests. You only need to sign in with Google if you want to save your scores and earn certificates.",
  },
  {
    question: "Can I download or share my typing certificates?",
    answer: "Yes! Every certified milestone generates a secure, verifiable certificate that you can instantly share on LinkedIn or add to your resume.",
  },
  {
    question: "Is my personal data secure on your platform?",
    answer: "We use modern encryption protocols and secure Google OAuth authentication to ensure your profile and score history remain fully protected.",
  },
  {
    question: "Can I try different typing modes before committing?",
    answer: "All practice timed lengths, word count modes, and difficulty levels are completely free to explore right away.",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    title: "Growing a SaaS Without Breaking Systems",
    description: "How to scale up growth comes from strong foundations, clear processes, and...",
    category: "Growth",
    image: "/blog-1.jpg",
    href: "/blogs/growing-saas",
  },
  {
    title: "Designing SaaS Workflows That Scale",
    description: "A practical guide to building clean remote workflows that support growth without...",
    category: "Workflow",
    image: "/blog-2.jpg",
    href: "/blogs/designing-workflows",
  },
  {
    title: "The Real Cost of Manual SaaS Work",
    description: "A practical look at simplifying workflows, reducing manual work, and scaling...",
    category: "Automation",
    image: "/blog-3.jpg",
    href: "/blogs/manual-work-cost",
  },
];

export const featuredArticle = {
  title: "Streamlining SaaS Without Adding Overhead",
  description: "A clear look at how efficient operations help SaaS teams reduce friction, stay aligned, and scale without bottlenecks.",
  category: "Operations",
  image: "/blog-1.jpg",
  href: "/blogs/streamlining-saas",
};

export const howItWorksSteps = [
  {
    title: "Take a Test",
    description: "Choose your duration from 1 to 10 minutes and start typing immediately. No sign-up required.",
  },
  {
    title: "Track Progress",
    description: "Save results to your free account. Your dashboard shows WPM trends, accuracy over sessions, and streak data.",
  },
  {
    title: "Get Certified",
    description: "Hit a speed milestone? Earn a downloadable certificate instantly. Share it anywhere.",
  },
];

export const featureGridItems = [
  {
    title: "Real-Time Feedback",
    description: "See correct and incorrect keystrokes highlighted instantly as you type, with no waiting for results.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Practice by Skill Level",
    description: "Choose beginner, intermediate, or advanced passages. Difficulty scales with you as your WPM improves.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    title: "Certificates",
    description: "Earn shareable typing certificates for every verified speed milestone. Add them to your resume or LinkedIn.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 15l-2 5-9-5 5-9 5 2" />
        <path d="M12 15l2 5 9-5-5-9-5 2" />
      </svg>
    ),
  },
  {
    title: "Progress Dashboard",
    description: "Your personal dashboard tracks WPM trends, accuracy over time, practice streaks, and badge collection.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Timed & Word Modes",
    description: "Five timed lengths and three word counts give you a lane for every kind of practice session.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "No Sign-Up Required",
    description: "Open the test and start typing instantly. Create a free account only when you want to save results.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
      </svg>
    ),
  },
];

export const comparisonData = {
  otherToolsPoints: [
    "Data lives in too many places",
    "Reporting eats up hours",
    "Insights are too generic",
    "No smart guidance for decisions",
    "Hard to see what's really working",
  ],
  typingTestPoints: [
    "All your metrics, one platform",
    "Track what drives growth",
    "Insights tailored to your goals",
    "AI suggests your next move",
    "Clear path to consistent growth",
  ],
};

export const ctaBadges = {
  hero: "Sign in with Google, save results & get certified",
  features: "Real-time typing test",
  featureGrid: "Everything you need",
  howItWorks: "Simple by design",
  ctaBanner: "Where do you rank?",
  testimonials: "Real users",
  comparison: "Certified proof of speed",
  faq: "Learn and improve",
  blog: "Learn and improve",
};