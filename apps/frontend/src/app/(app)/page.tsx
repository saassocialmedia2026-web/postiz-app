import { Metadata } from 'next';
import { LandingPage } from '@gitroom/frontend/components/public-site/landing-page';

export const metadata: Metadata = {
  title: 'Postu | Social Media Scheduling Platform',
  description:
    'Connect, schedule, and publish content across your social media accounts from one dashboard.',
};

export default function HomePage() {
  return <LandingPage />;
}
