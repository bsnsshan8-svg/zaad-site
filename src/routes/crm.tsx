import { createFileRoute } from '@tanstack/react-router';
import { CRMPage } from '../components/ZaadInner';
export const Route = createFileRoute('/crm')({ component: CRMPage });
