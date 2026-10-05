import { createFileRoute } from '@tanstack/react-router';
import ZaadHome from '../components/ZaadHomeV2';

export const Route = createFileRoute('/')({
  component: ZaadHome,
});
