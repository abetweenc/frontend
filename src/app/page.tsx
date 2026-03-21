import AbcHub from "@/components/homepage/AbcHub";
import CoreValues from "@/components/homepage/CoreValues";
import FlexiblePricing from "@/components/homepage/FlexiblePricing";
import GapBetween from "@/components/homepage/GapBetween";
import HeroSection from "@/components/homepage/HeroSection";
import HowItWorks from "@/components/homepage/HowItWorks";
import Learning from "@/components/homepage/Learning";
import Quote from "@/components/homepage/Quote";
import Safe from "@/components/homepage/Safe";
import { getHomepageData } from "@/data/loader";

export default async function Home() {
  const response = await getHomepageData();

  if (!response) {
    return <div>Loading...</div>;
  }

  const heroSectionData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.hero-section",
  );

  const gapBetweenData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.gap-between",
  );

  const coreValuesData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.core-values",
  );

  const howItWorks = response.data.blocks.find(
    (block: any) => block.__component === "homepage.how-it-works",
  );

  const safe = response.data.blocks.find(
    (block: any) => block.__component === "homepage.learning-spaces",
  );

  const aDay = response.data.blocks.find(
    (block: any) => block.__component === "homepage.a-day",
  );

  const flexiblePricing = response.data.blocks.find(
    (block: any) => block.__component === "homepage.flexible-pricing",
  );

  const quote = response.data.blocks.find(
    (block: any) => block.__component === "homepage.quote",
  );

  const learning = response.data.blocks.find(
    (block: any) => block.__component === "homepage.find-a-learning",
  );

  return (
    <div className="">
      <HeroSection data={heroSectionData} />
      {gapBetweenData && <GapBetween data={gapBetweenData} />}
      {coreValuesData && <CoreValues data={coreValuesData} />}
      {howItWorks && <HowItWorks data={howItWorks} />}
      {safe && <Safe data={safe} />}
      {aDay && <AbcHub data={aDay} />}
      {flexiblePricing && <FlexiblePricing data={flexiblePricing} />}
      {quote && <Quote data={quote} />}
      {learning && <Learning data={learning} />}
    </div>
  );
}
