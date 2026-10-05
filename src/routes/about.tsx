import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '../components/ZaadInner';
export const Route = createFileRoute('/about')({ component: AboutPage });
