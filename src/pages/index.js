import Image from "next/image";
import { Inter } from "next/font/google";
import WelcomePage from "@/components/Home/WelcomePage";
import Service from "@/components/Home/Service";
import Header from "@/components/Header";
import Chooes from "@/components/Home/Chooes";
import Works from "@/components/Home/Works";
import Accordion from "@/components/Accordian";
import Ready from "@/components/Home/Ready";
import Subscribe from "@/components/Home/Subscribe";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const accordionData = [
  {
    title:
      "Should I use a resume template? Can I create my own resume template?",
    desc: `Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer.Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer `,
  },
  {
    title: "Which is the best resume template?",
    desc: `Visit our website and fill out the application form under the "Become a Partner" section. Our team will follow up with the next steps.`,
  },
  {
    title:
      "Should I use a resume template? Can I create my own resume template?",
    desc: `Visit our website and fill out the application form under the "Become a Partner" section. Our team will follow up with the next steps.`,
  },
  {
    title: "Which is the best resume template?",
    desc: `Visit our website and fill out the application form under the "Become a Partner" section. Our team will follow up with the next steps.`,
  },
  {
    title:
      "Should I use a resume template? Can I create my own resume template?",
    desc: `Visit our website and fill out the application form under the "Become a Partner" section. Our team will follow up with the next steps.`,
  },
];
export default function Home() {
  return (
    <div>
      <Header />
      <WelcomePage />
      <Service />
      <Chooes />
      <Works />
      <Accordion data={accordionData} />
      <Ready />
      <Subscribe />
      <Footer />
    </div>
  );
}
