import { createFileRoute } from '@tanstack/react-router';
import { BookPage } from '../components/ZaadInner';
export const Route = createFileRoute('/book')({ component: BookPage });
