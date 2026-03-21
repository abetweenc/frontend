import AboutHeroSection from "@/components/about/AboutHeroSection";
import Began from "@/components/about/Began";
import Drive from "@/components/about/Drive";
import Founder from "@/components/about/Founder";
import Growing from "@/components/about/Growing";
import Mission from "@/components/homepage/Mission";
import Cta from "@/components/shared/Cta";
import { getPageData } from "@/data/loader";

export default async function About({ data }: any) {
  const response = await getPageData("about");

  if (!response) {
    return <div>Loading...</div>;
  }

  const heroSection = response.data[0].blocks.find(
    (block: any) => block.__component === "about.hero-section",
  );

  const began = response.data[0].blocks.find(
    (block: any) => block.__component === "about.began",
  );

  const drive = response.data[0].blocks.find(
    (block: any) => block.__component === "about.drive",
  );

  const mission = response.data[0].blocks.find(
    (block: any) => block.__component === "about.mission-vision",
  );

  const founder = response.data[0].blocks.find(
    (block: any) => block.__component === "about.founder",
  );

  const growing = response.data[0].blocks.find(
    (block: any) => block.__component === "about.growing",
  );

  const cta = response.data[0].blocks.find(
    (block: any) => block.__component === "shared.common-cta",
  );
  return (
    <div className="">
      {heroSection && <AboutHeroSection data={heroSection} />}
      {began && <Began data={began} />}
      {drive && <Drive data={drive} />}
      {mission && <Mission data={mission} />}
      {founder && <Founder data={founder} />}
      {growing && <Growing data={growing} />}
      {cta && <Cta data={cta} />}
      
    </div>
  );
}
