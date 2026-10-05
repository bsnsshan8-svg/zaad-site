import { createFileRoute } from '@tanstack/react-router';
import { PsychiatryPage } from '../components/ZaadInner';
export const Route = createFileRoute('/psychiatrists')({ component: PsychiatryPage });
