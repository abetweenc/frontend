import ApplicationForm from "@/components/contact/ApplicationForm";
import Happens from "@/components/contact/Happens";
import WaitList from "@/components/contact/WaitList";
import Cta from "@/components/shared/Cta";
import { getPageData } from "@/data/loader";
import Questions from "@/utils/Questions";

export default async function Contact() {
  const response = await getPageData("contact");

  if (!response) {
    return <div>Loading...</div>;
  }

  const happens = response.data[0].blocks.find(
    (block: any) => block.__component === "contact.happens",
  );

  const questions = response.data[0].blocks.find(
    (block: any) => block.__component === "contact.questions",
  );

  const cta = response.data[0].blocks.find(
    (block: any) => block.__component === "shared.common-cta",
  );

  return (
    <div>
      <WaitList />
      <ApplicationForm />
      {happens && <Happens data={happens} />}
      {questions && <Questions data={questions} />}
      {cta && <Cta data={cta} />}
    </div>
  );
}
