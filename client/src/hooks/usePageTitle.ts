import { useEffect } from 'react';

interface PageMeta {
  title?: string;
  description?: string;
}

export function usePageTitle({ title, description }: PageMeta) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Your Smile Advanced Dental Center`;
    }

    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }

    // Cleanup function to reset title on unmount
    return () => {
      document.title = 'Your Smile Advanced Dental Center - Best Dentist in Dubai';
    };
  }, [title, description]);
}
