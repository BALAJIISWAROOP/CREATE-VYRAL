
import { Project, Service, Client } from './types';

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DESI CHAI',
    category: 'Cinematography & Edit',
    image: 'https://images.unsplash.com/photo-1544787210-282aa3bc119a?q=80&w=1200&auto=format&fit=crop',
    description: 'Cinematic brand film capturing the heritage and aroma of authentic Indian tea culture.'
  },
  {
    id: '2',
    title: 'SOUTH INDIAN FILTER COFFEE',
    category: 'Cinematography & Edit',
    image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=1200&auto=format&fit=crop',
    description: 'Slow-motion storytelling highlighting the traditional rhythmic brewing of South Indian coffee.'
  },
  {
    id: '3',
    title: 'BORING BANKER CAFE',
    category: 'Viral Strategy',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
    description: 'High-conversion social strategy that transformed a corporate-themed cafe into a viral destination.'
  },
  {
    id: '4',
    title: 'COMMUNITEA',
    category: 'Documentary Style',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop',
    description: 'A visual documentary exploring the communal threads woven through the ritual of drinking tea.'
  }
];

export const SERVICES: Service[] = [
  { 
    id: 1, 
    title: 'Video Editing', 
    description: 'We craft high-retention, engaging edits that keep viewers glued to the screen.',
    longDescription: 'Our editing suite is more than just cutting clips. We analyze viewer retention curves to determine the exact millisecond a transition should occur. From sound design that triggers dopamine hits to pacing that maintains absolute focus, we transform raw footage into digital heroin.',
    features: ['Retention-optimized pacing', 'Immersive sound design', 'Custom motion graphics', 'Color grading for brand identity']
  },
  { 
    id: 2, 
    title: 'Content Planning', 
    description: 'Brainstorming viral hooks and script structures tailored to your niche.',
    longDescription: 'Virality is not an accident; it is an architecture. We provide a full blueprint for your content cycle, focusing on the first 3 seconds of every video. Our strategies are backed by data from over 50M views, ensuring every word of your script serves a psychological purpose.',
    features: ['Hook generation laboratory', 'Psychology-based scripting', 'A/B title testing', 'Niche-specific trend forecasting']
  },
  { 
    id: 3, 
    title: 'Shoot Arrangement', 
    description: 'Managing logistics, gear, and locations so you can just show up and create.',
    longDescription: 'Creativity shouldn\'t be hindered by cables and schedules. We handle the heavy lifting—from securing high-end minimalist locations to providing cinematic-grade lighting and camera packages. You are the talent; we are your technical support system.',
    features: ['Location scouting & booking', 'Full technical gear supply', 'On-set production management', 'Directing & creative guidance']
  },
  { 
    id: 4, 
    title: 'Post Optimization', 
    description: 'Thumbnails, titles, and SEO that bypass the algorithm noise.',
    longDescription: 'If nobody clicks, nobody watches. We specialize in "Click-Through Optimization." Our team designs high-contrast, low-cognitive-load thumbnails and pairs them with curiosity-gap titles that the algorithm loves to push.',
    features: ['High-CTR thumbnail design', 'Curiosity-gap title strategies', 'Advanced metadata & SEO', 'Thumbnail heat-map analysis']
  },
  { 
    id: 5, 
    title: 'Influencer Marketing', 
    description: 'Strategic partnerships that connect your brand with the right creators for authentic scale.',
    longDescription: 'We move beyond transactional shout-outs. We forge deep-rooted partnerships between brands and creators whose audiences are primed for your product. We manage the entire funnel from discovery to final reporting.',
    features: ['Creator matchmaking', 'Campaign strategy & execution', 'Performance tracking & ROI', 'Whitelisting & paid amplification']
  },
  { 
    id: 6, 
    title: 'Talent Deployment', 
    description: 'We facilitate specialized creator placement and long-term contract deployment for brands seeking dedicated creative output.',
    longDescription: 'Building an in-house content team is hard. We do it for you. We scout, train, and deploy creative talent directly into your brand ecosystem, ensuring a consistent, high-quality content stream without the overhead of traditional hiring.',
    features: ['Content-creator-as-a-service', 'Long-term talent contracts', 'Training & creative standards', 'Ongoing output management']
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: 'TechCreator', logo: 'https://picsum.photos/200/100?random=10&grayscale' },
  { id: 2, name: 'LifestyleVlog', logo: 'https://picsum.photos/200/100?random=11&grayscale' },
  { id: 3, name: 'FinanceGuru', logo: 'https://picsum.photos/200/100?random=12&grayscale' },
  { id: 4, name: 'FitnessStar', logo: 'https://picsum.photos/200/100?random=13&grayscale' },
  { id: 5, name: 'GamerPro', logo: 'https://picsum.photos/200/100?random=14&grayscale' },
  { id: 6, name: 'ChefSpecial', logo: 'https://picsum.photos/200/100?random=15&grayscale' }
];
