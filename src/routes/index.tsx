import { createFileRoute } from '@tanstack/react-router';
import ZaadHome from '../components/ZaadHome2';
import '../hero-polish.css';

export const Route = createFileRoute('/')({
  component: ZaadHome,
});
