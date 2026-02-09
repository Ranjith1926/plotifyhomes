import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 bg-linear-to-r from-primary to-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="container-custom relative z-10">
        <nav className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-accent transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{title}</h1>
        {subtitle && <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
