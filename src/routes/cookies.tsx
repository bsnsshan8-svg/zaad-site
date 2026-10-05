import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '../components/ZaadLegal';
export const Route = createFileRoute('/cookies')({ component:()=> <LegalPage title="Cookie Policy" kind="Cookie Policy"/> });
