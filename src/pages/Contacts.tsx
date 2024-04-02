import { Mail, MapPin, PhoneCall } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import YandexMap from "../components/YandexMap";
import ContactUsForm from "../components/ContactUsForm";

const BREADCRUMBS = [
  { id: 1, name: "Asosiy", href: "/" },
  { id: 2, name: "Kontakt", href: "/contacts" },
];

const Contacts = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <div className="flex flex-col md:flex-row md:h-[25rem] gap-3 ">
          <div className="flex-[2] md:overflow-y-scroll p-2">
            <div className="flex flex-col gap-3 w-[70%] text-sm">
              <a className="flex gap-2 items-center " href="/">
                <MapPin stroke="red" className="shrink-0" />
                Moskva viloyati, Klin shahri, Volokolamskoe shossesi, 33, bino
                3. Ishlab chiqarish
              </a>
              <a className="flex gap-2 items-center" href="">
                <PhoneCall stroke="red" /> +7 929 929 69 68 - savdo bo'limi
              </a>
              <a
                className="flex gap-2 items-center"
                href="mailto:sale@kifatomarket.com"
              >
                <Mail stroke="red" /> sale@kifatomarket.com
              </a>
              <a className="flex gap-2 items-center" href="">
                <Mail stroke="red" /> zavod@kifato.com
              </a>
            </div>
            <div className="w-full h-[1.5px] bg-gray-600 my-4" />
            <div className="flex flex-col gap-3 w-[70%] text-sm">
              <a className="flex gap-2 items-center " href="/">
                <MapPin stroke="red" className="shrink-0" />
                Sankt-Peterburg, 69A Revolyutsiya shossesi, ko'p. 102, 3-qavat,
                ofis 306 Skandinaviya biznes markazi ko'rgazma zali
              </a>
              <a className="flex gap-2 items-center" href="">
                <PhoneCall stroke="red" /> +7 921 892 69 68 - savdo bo'limi
              </a>
              <a className="flex gap-2 items-center" href="">
                <PhoneCall stroke="red" /> +7 929 929 69 68 - savdo bo'limi
              </a>
              <a
                className="flex gap-2 items-center"
                href="mailto:sale@kifatomarket.com"
              >
                <Mail stroke="red" /> spb@kifatomarket.com
              </a>
            </div>
            <div className="w-full h-[1.5px] bg-gray-600 my-4" />
            <div className="flex flex-col gap-3 w-[70%] text-sm">
              <a className="flex gap-2 items-center " href="/">
                <MapPin stroke="red" className="shrink-0" />
                Moskva avtomagistrali Dmitrovskoe 71B, 1-qavat, ofis 109 Biznes
                markazi-7ONE ko'rgazma zali
              </a>
              <a className="flex gap-2 items-center" href="">
                <PhoneCall stroke="red" /> +7 929 929 69 68 - savdo bo'limi
              </a>
              <a
                className="flex gap-2 items-center"
                href="mailto:sale@kifatomarket.com"
              >
                <Mail stroke="red" /> msk@kifatomarket.com
              </a>
            </div>
            <div className="w-full h-[1.5px] bg-gray-600 my-4" />
            <div className="flex flex-col gap-3 w-[70%] text-sm">
              <a className="flex gap-2 items-center " href="/">
                <MapPin stroke="red" className="shrink-0" />
                Krasnodar avtomagistrali Rostovskoe, 23 ko'rgazma zali
              </a>
              <a className="flex gap-2 items-center" href="">
                <PhoneCall stroke="red" /> +7 999 222 69 68 - savdo bo'limi
              </a>
              <a
                className="flex gap-2 items-center"
                href="mailto:sale@kifatomarket.com"
              >
                <Mail stroke="red" /> kdr@kifatomarket.com
              </a>
            </div>
            <div className="w-full h-[1.5px] bg-gray-600 my-4" />
            <div className="flex flex-col gap-3 w-[70%] text-sm">
              <a className="flex gap-2 items-center " href="/">
                <MapPin stroke="red" className="shrink-0" />
                Rostov-na-Don prospekti. Mixail Nagibin 30I, ko'rgazma zali
              </a>
              <a className="flex gap-2 items-center" href="">
                <PhoneCall stroke="red" /> +7 928 607 69 68 - savdo bo'limi
              </a>
            
            </div>
          </div>
          <div className="flex-[3] overflow-hidden">
            <YandexMap />
          </div>
        </div>
        <div className="my-20">
          <ContactUsForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contacts;
