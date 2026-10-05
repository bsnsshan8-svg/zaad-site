import logo from '../assets/zero-apples-a-day-logo.png.asset.json';
import symbol from '../assets/zero-apples-a-day-logo-symbol.png.asset.json';

export function BrandLogo({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
  return <img className={`brand-logo ${compact ? 'brand-logo-symbol' : 'brand-logo-full'} ${className}`} src={compact ? symbol.url : logo.url} alt="Zero Apples A Day" />;
}

export function BrandHome({ className = 'zaad-logo' }: { className?: string }) {
  return <a href="/" className={className} aria-label="Zero Apples A Day home"><BrandLogo /></a>;
}