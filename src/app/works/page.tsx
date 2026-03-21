import Safe from "@/components/homepage/Safe";
import Cta from "@/components/shared/Cta";
import Curriculum from "@/components/works/Curriculum";
import Future from "@/components/works/Future";
import How from "@/components/works/How";
import Journey from "@/components/works/Journey";
import Portal from "@/components/works/Portal";
import { getPageData } from "@/data/loader";

export default async function page() {
  const response = await getPageData("works");

  if (!response) {
    return <div>Loading...</div>;
  }

  const how = response.data[0].blocks.find(
    (block: any) => block.__component === "works.how",
  );

  const journey = response.data[0].blocks.find(
    (block: any) => block.__component === "works.journey",
  );

  const safe = response.data[0].blocks.find(
    (block: any) => block.__component === "works.safe",
  );

  const curriculum = response.data[0].blocks.find(
    (block: any) => block.__component === "works.curriculum",
  );

  const future = response.data[0].blocks.find(
    (block: any) => block.__component === "works.future",
  );

  const portal = response.data[0].blocks.find(
    (block: any) => block.__component === "works.portal",
  );

  const cta = response.data[0].blocks.find(
    (block: any) => block.__component === "shared.common-cta",
  );

  return (
    <div>
      {how && <How data={how} />}
      {journey && <Journey data={journey} />}
      {safe && <Safe data={safe} />}
      {curriculum && <Curriculum data={curriculum} />}
      {future && <Future data={future} />}
      {portal && <Portal data={portal} />}
      {cta && <Cta data={cta} />}
    </div>
  );
}
