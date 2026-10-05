import { createFileRoute } from '@tanstack/react-router';
import ZaadHome from '../components/ZaadHeroNew';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [{"title": "ZAAD | Apple Keeps the Doctor Away. ZAAD Brings Patients In."}, {"name": "description", "content": "ZAAD helps healthcare practices bring more patients in through smarter acquisition, follow-up, and booking."}, {"property": "og:title", "content": "ZAAD | Brings Patients In"}, {"property": "og:description", "content": "Apple keeps the doctor away. ZAAD brings patients in."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}] }),
  component: ZaadHome,
});
