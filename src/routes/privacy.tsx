import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '../components/ZaadLegal';
export const Route = createFileRoute('/privacy')({ component:()=> <LegalPage title="Privacy Policy" kind="Privacy"/> });
