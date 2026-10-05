import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '../components/ZaadInner';
export const Route = createFileRoute('/contact')({ component: ContactPage });
