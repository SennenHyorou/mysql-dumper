import { Link, usePage } from '@inertiajs/react';

import { cn } from '@/lib/utils';
import {applicationLinks} from "@/types/applicationLinks";

export function MobileNav() {
    const { url } = usePage();

    return (
        <nav className="grid gap-2 text-lg font-medium">
            {applicationLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground',
                        {
                            'text-foreground': url.startsWith(link.pattern),
                        },
                    )}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
