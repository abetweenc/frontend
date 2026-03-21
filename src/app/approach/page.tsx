import Approach from "@/components/approach/Approach";
import ApproachHeroSection from "@/components/approach/ApproachHeroSection";
import Environments from "@/components/approach/Environments";
import Supporting from "@/components/approach/Supporting";
import Working from "@/components/approach/Working";
import Cta from "@/components/shared/Cta";
import { getPageData } from "@/data/loader";

export default async function ApproachPage() {
  const response = await getPageData("approach");

  if (!response) {
    return <div>Loading...</div>;
  }

  const approach = response.data[0].blocks.find(
    (block: any) => block.__component === "approach.approach",
  );

  const heroSection = response.data[0].blocks.find(
    (block: any) => block.__component === "approach.hero-section",
  );
  const environments = response.data[0].blocks.find(
    (block: any) => block.__component === "approach.environments",
  );
  const supporting = response.data[0].blocks.find(
    (block: any) => block.__component === "approach.supporting",
  );
  const working = response.data[0].blocks.find(
    (block: any) => block.__component === "approach.working",
  );

  const cta = response.data[0].blocks.find(
    (block: any) => block.__component === "shared.common-cta",
  );

  return (
    <div>
      {approach && <Approach data={approach} />}
      {heroSection && <ApproachHeroSection data={heroSection} />}
      {environments && <Environments data={environments} />}
      {supporting && <Supporting data={supporting} />}
      {working && <Working data={working} />}
      {cta && <Cta data={cta} />}
    </div>
  );
}
