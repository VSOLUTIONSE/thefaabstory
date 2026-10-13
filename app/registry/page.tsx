import { PageHero } from "@/components/Hero";
import { RegistryExplorer } from "@/components/RegistryExplorer";

export default function RegistryPage() {
  return (
    <>
      <PageHero
        image="/images/registry-hero.png"
        overlayColor="#1E2A4A80"
        title="Gift Us"
        subtitle="Share in our joy by selecting a special gift or leaving a heartfelt message"
      />

      <RegistryExplorer />
    </>
  );
}
