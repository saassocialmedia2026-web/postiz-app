import { Metadata } from 'next';
import {
  LegalDocument,
  LegalSection,
} from '@gitroom/frontend/components/legal/legal-document';

export const metadata: Metadata = {
  title: 'Privacy Policy | Postu',
  description: 'Postu.io Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument title="Privacy Policy" activePage="privacy">
      <LegalSection title="1. Overview">
        <p>
          This Privacy Policy explains how Postu.io collects, uses, stores, and
          protects personal data when users access or use the service.
        </p>
      </LegalSection>
      <LegalSection title="2. Data We Collect">
        <p>We may collect the following categories of data:</p>
        <ul>
          <li>Account information (email address, name if provided)</li>
          <li>
            Social media account identifiers and connection tokens (via OAuth)
          </li>
          <li>
            Content provided for scheduling and publishing (posts, media,
            captions)
          </li>
          <li>Usage data (logs, actions within the platform, timestamps)</li>
          <li>Technical data (IP address, browser type, device information)</li>
        </ul>
      </LegalSection>
      <LegalSection title="3. How We Use Data">
        <p>We use collected data to:</p>
        <ul>
          <li>Provide access to the platform</li>
          <li>Connect and manage social media accounts</li>
          <li>Schedule and publish content to connected platforms</li>
          <li>Provide analytics and performance insights</li>
          <li>Improve service functionality and reliability</li>
          <li>Prevent abuse, fraud, and unauthorized access</li>
        </ul>
      </LegalSection>
      <LegalSection title="4. Social Media APIs">
        <p>
          Postu.io integrates with third-party social media platforms (including
          TikTok and others). Data is processed strictly for user-authorized
          actions such as publishing content and retrieving analytics.
        </p>
        <p>
          We do not sell or share personal data with third parties for
          advertising purposes.
        </p>
      </LegalSection>
      <LegalSection title="5. Data Storage">
        <p>
          Data is stored using third-party infrastructure providers including
          Cloudflare and VPS hosting providers.
        </p>
        <p>
          We apply reasonable technical and organizational security measures to
          protect user data.
        </p>
      </LegalSection>
      <LegalSection title="6. Data Retention">
        <p>
          We retain data only as long as necessary to provide the service or as
          required by law.
        </p>
        <p>Users may request deletion of their data at any time.</p>
      </LegalSection>
      <LegalSection title="7. Data Sharing">
        <p>We may share data only with:</p>
        <ul>
          <li>Social media platforms via official APIs</li>
          <li>Infrastructure providers (hosting, storage, networking)</li>
          <li>Payment processors (if applicable)</li>
        </ul>
        <p>We do not sell personal data.</p>
      </LegalSection>
      <LegalSection title="8. User Rights">
        <p>Users may request:</p>
        <ul>
          <li>Access to their data</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of their data</li>
          <li>Disconnection of social media accounts</li>
        </ul>
      </LegalSection>
      <LegalSection title="9. Security">
        <p>
          We implement reasonable security measures, but no system is completely
          secure.
        </p>
      </LegalSection>
      <LegalSection title="10. Changes">
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page.
        </p>
      </LegalSection>
      <LegalSection title="11. Contact">
        <p>
          <a href="mailto:hi@postu.io">hi@postu.io</a>
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
