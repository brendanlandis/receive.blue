'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackAppRouter } from '@socialgouv/matomo-next';

export default function MatomoTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL;
    const matomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

    if (!matomoUrl || !matomoSiteId) {
      console.warn(
        'Matomo tracking is not configured. Please set NEXT_PUBLIC_MATOMO_URL and NEXT_PUBLIC_MATOMO_SITE_ID environment variables.'
      );
      return;
    }

    trackAppRouter({
      url: matomoUrl,
      siteId: matomoSiteId,
      pathname,
      searchParams,
    });
  }, [pathname, searchParams]);

  return null;
}

