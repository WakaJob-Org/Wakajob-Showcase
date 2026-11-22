import { LegalPage } from "@/components/layout/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Wakajob collects, uses and protects your personal information.",
  path: "/privacy",
  noIndex: true, // TODO: remove once the final text is approved
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="[date]">
      <h2>1. Who we are</h2>
      <p>{siteConfig.legalName} operates Wakajob. Contact: {siteConfig.email}.</p>

      <h2>2. Information we collect</h2>
      <p>[Account details, CV and profile data, location, device data, messages.]</p>

      <h2>3. How we use it</h2>
      <p>[Matching jobs by location, applications, employer verification, safety.]</p>

      <h2>4. Who we share it with</h2>
      <p>[Employers you apply to, service providers. State clearly that you do not sell data.]</p>

      <h2>5. How long we keep it</h2>
      <p>[Retention periods.]</p>

      <h2>6. Your rights</h2>
      <p>[Access, correction, deletion, and how to exercise them.]</p>

      <h2>7. Security</h2>
      <p>[Measures taken.]</p>

      <h2>8. Children</h2>
      <p>[Minimum age.]</p>

      <h2>9. Changes and contact</h2>
      <p>[How updates are announced.]</p>
    </LegalPage>
  );
}