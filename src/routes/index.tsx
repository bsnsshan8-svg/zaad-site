import { createFileRoute } from '@tanstack/react-router';
import App from '../App';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'ZAAD | Apple Keeps the Doctor Away. ZAAD Brings Patients In.' },
      { name: 'description', content: 'ZAAD builds a connected patient acquisition system that brings in leads, nurtures them, books appointments, recovers missed calls, grows reputation, and reactivates past patients.' },
      { property: 'og:title', content: 'ZAAD | Brings Patients In' },
      { property: 'og:description', content: 'Apple keeps the doctor away. ZAAD brings patients in.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: App,
});
