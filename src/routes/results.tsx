import { createFileRoute } from '@tanstack/react-router';
import { ResultsPage } from '../components/ZaadLegal';
export const Route = createFileRoute('/results')({ component: ResultsPage });
