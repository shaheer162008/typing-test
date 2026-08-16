export interface NavLink {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarBg: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogArticle {
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface FeatureGridItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ComparisonData {
  otherToolsPoints: string[];
  typingTestPoints: string[];
}