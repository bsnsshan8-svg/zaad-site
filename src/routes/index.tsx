import { createFileRoute } from '@tanstack/react-router';
import ZaadHome from '../components/ZaadHomeV2';
import '../hero-polish.css';
import '../apple-hero.css';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [{"title": "Zero Apples A Day | Patient Acquisition & CRM"}, {"name": "description", "content": "Zero Apples A Day connects healthcare patient acquisition, CRM, follow-up, and appointment booking."}, {"property": "og:title", "content": "Zero Apples A Day | Patient Acquisition & CRM"}, {"property": "og:description", "content": "Zero Apples A Day connects healthcare patient acquisition, CRM, follow-up, and appointment booking."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}] }), 
  component: ZaadHome,
});
