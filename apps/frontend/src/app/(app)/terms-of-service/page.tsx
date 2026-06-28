import { Metadata } from 'next';
import {
  LegalDocument,
  LegalSection,
} from '@gitroom/frontend/components/legal/legal-document';

export const metadata: Metadata = {
  title: 'Terms of Service | Postu',
  description: 'Postu.io Terms of Service',
};

export default function TermsOfServicePage() {
  return (
    <LegalDocument title="Terms of Service" activePage="terms">
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or using Postu.io, you agree to these Terms of Service.
        </p>
      </LegalSection>
      <LegalSection title="2. Description of Service">
        <p>Postu.io is a SaaS platform that allows users to:</p>
        <ul>
          <li>Connect social media accounts</li>
          <li>Schedule and publish content</li>
          <li>Manage multiple accounts and workspaces</li>
          <li>Analyze performance metrics</li>
          <li>Use AI-assisted content tools</li>
          <li>Collaborate with team members</li>
        </ul>
      </LegalSection>
      <LegalSection title="3. Eligibility">
        <p>The Service is intended for users aged 18 or older.</p>
      </LegalSection>
      <LegalSection title="4. User Accounts">
        <p>
          Users are responsible for maintaining the confidentiality of their
          accounts and for all activities under their account.
        </p>
      </LegalSection>
      <LegalSection title="5. Connected Accounts">
        <p>
          Users may connect third-party social media accounts. Users are
          responsible for ensuring they have the right to connect and use those
          accounts.
        </p>
        <p>
          We are not responsible for actions taken on third-party platforms.
        </p>
      </LegalSection>
      <LegalSection title="6. Acceptable Use">
        <p>Users agree not to:</p>
        <ul>
          <li>Use the service for spam or unsolicited messaging</li>
          <li>Violate third-party platform policies</li>
          <li>Attempt unauthorized access to systems</li>
          <li>Reverse engineer or abuse the platform</li>
          <li>Use the service for illegal activities</li>
        </ul>
      </LegalSection>
      <LegalSection title="7. Payments">
        <p>
          If paid features are introduced, payments will be processed via
          third-party payment providers. Fees will be clearly displayed before
          purchase.
        </p>
      </LegalSection>
      <LegalSection title="8. Termination">
        <p>
          We may suspend or terminate access if users violate these Terms or
          misuse the service.
        </p>
        <p>
          Users may delete their account at any time. To delete your account and
          personal data, contact <a href="mailto:hi@postu.io">hi@postu.io</a>.
        </p>
      </LegalSection>
      <LegalSection title="Data Deletion Policy" id="data-deletion">
        <p>
          Users of Postu.io may request deletion of their account and associated
          personal data at any time.
        </p>
        <p>
          To request deletion, email{' '}
          <a href="mailto:hi@postu.io?subject=Data%20Deletion%20Request">
            hi@postu.io
          </a>{' '}
          with the subject line &quot;Data Deletion Request&quot;. You must send
          the request from the email associated with your account.
        </p>
        <p>
          <strong className="text-white">What Will Be Deleted</strong>
        </p>
        <p>Upon verification, we will delete or anonymize:</p>
        <ul>
          <li>Account information</li>
          <li>Connected social media account tokens</li>
          <li>Scheduled posts and content data</li>
          <li>Analytics and usage history</li>
        </ul>
        <p>
          <strong className="text-white">Retention Exceptions</strong>
        </p>
        <p>
          Some data may be retained where required by law, security purposes,
          fraud prevention, or legitimate operational needs.
        </p>
        <p>
          <strong className="text-white">Processing Time</strong>
        </p>
        <p>Deletion requests are processed within a reasonable timeframe.</p>
      </LegalSection>
      <LegalSection title="9. Disclaimer">
        <p>
          The service is provided &quot;as is&quot; without warranties of any
          kind.
        </p>
      </LegalSection>
      <LegalSection title="10. Limitation of Liability">
        <p>
          We are not liable for indirect, incidental, or consequential damages
          arising from use of the service.
        </p>
      </LegalSection>
      <LegalSection title="11. Changes to Terms">
        <p>
          We may update these Terms at any time. Continued use of the service
          means acceptance of updated Terms.
        </p>
      </LegalSection>
      <LegalSection title="12. Contact">
        <p>
          <a href="mailto:hi@postu.io">hi@postu.io</a>
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
