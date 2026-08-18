import type { NavLink, FooterSection, Testimonial, FAQItem, BlogArticle } from "@/types";
import Image from "next/image";

export const navLinks: NavLink[] = [
  { name: "Typing Test", href: "/typing-test" },
  { name: "Practice", href: "/typing-practice" },
  { name: "Word Typing", href: "/word-typing" },
  { name: "WPM Guide", href: "/wpm-guide" },
  { name: "Blog", href: "/blogs" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Sign In", href: "/auth/sign-in" },
];

export const footerLinks: FooterSection[] = [
  {
    title: "Typing Test by Time",
    links: [
      { name: "1 Minute Typing Test", href: "/typing-test/1-minute" },
      { name: "2 Minute Typing Test", href: "/typing-test/2-minute" },
      { name: "3 Minute Typing Test", href: "/typing-test/3-minute" },
      { name: "5 Minute Typing Test", href: "/typing-test/5-minute" },
      { name: "10 Minute Typing Test", href: "/typing-test/10-minute" },
    ],
  },
  {
    title: "Typing Practice by Time",
    links: [
      { name: "1 Minute Typing Practice", href: "/typing-practice/1-minute" },
      { name: "2 Minute Typing Practice", href: "/typing-practice/2-minute" },
      { name: "3 Minute Typing Practice", href: "/typing-practice/3-minute" },
      { name: "5 Minute Typing Practice", href: "/typing-practice/5-minute" },
      { name: "10 Minute Typing Practice", href: "/typing-practice/10-minute" },
    ],
  },
  {
    title: "Word Typing Test",
    links: [
      { name: "10 Word Typing Test", href: "/word-typing/10-words" },
      { name: "25 Word Typing Test", href: "/word-typing/25-words" },
      { name: "50 Word Typing Test", href: "/word-typing/50-words" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Typing Test", href: "/typing-test" },
      { name: "Practice", href: "/typing-practice" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blogs", href: "/blogs" },
      { name: "Typing Tips", href: "/tips" },
      { name: "WPM Guide", href: "/wpm-guide" },
      { name: "FAQ", href: "/faqs" },
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
      <Image
        src="/icons/real-time.svg"
        alt="Real-Time Feedback icon"
        width={32}
        height={32}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Practice by Skill Level",
    description: "Choose beginner, intermediate, or advanced passages. Difficulty scales with you as your WPM improves.",
    icon: (
      <Image
        src="/icons/skill.svg"
        alt="Practice by Skill Level icon"
        width={32}
        height={32}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Certificates",
    description: "Earn shareable typing certificates for every verified speed milestone. Add them to your resume or LinkedIn.",
    icon: (
      <Image
        src="/icons/certificate.svg"
        alt="Certificates icon"
        width={32}
        height={32}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Progress Dashboard",
    description: "Your personal dashboard tracks WPM trends, accuracy over time, practice streaks, and badge collection.",
    icon: (
      <Image
        src="/icons/dashboard.svg"
        alt="Progress Dashboard icon"
        width={32}
        height={32}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Timed & Word Modes",
    description: "Five timed lengths and three word counts give you a lane for every kind of practice session.",
    icon: (
      <Image
        src="/icons/time-locked.svg"
        alt="Timed & Word Modes icon"
        width={32}
        height={32}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "No Sign-Up Required",
    description: "Open the test and start typing instantly. Create a free account only when you want to save results.",
    icon: (
      <Image
        src="/icons/no-signin.svg"
        alt="No Sign-Up Required icon"
        width={32}
        height={32}
        className="object-contain"
        aria-hidden="true"
      />
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
