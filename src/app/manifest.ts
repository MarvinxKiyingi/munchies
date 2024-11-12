import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Munchies',
    short_name: 'Munchies',
    description: 'Restaurant webb application',
    start_url: '/',
    display: 'standalone',
    theme_color: 'var(--off-white)',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
