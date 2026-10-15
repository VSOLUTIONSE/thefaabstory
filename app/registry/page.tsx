import { PageHero } from "@/components/Hero";
import { RegistryExplorer } from "@/components/RegistryExplorer";

export default function RegistryPage() {
  return (
    <>
      <PageHero
        image="/images/registry-hero.png"
        overlayColor="#1E2A4A80"
        title="Every gift is a blessing."
        subtitle="Whether it's a thoughtful item, an experience, or a monetary gift, we receive it with grateful hearts. Thank you for celebrating this new beginning with us."
      />

      <RegistryExplorer />
    </>
  );
}
