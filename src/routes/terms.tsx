import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '../components/ZaadLegal';
export const Route = createFileRoute('/terms')({ component:()=> <LegalPage title="Terms of Service" kind="Terms"/> });
