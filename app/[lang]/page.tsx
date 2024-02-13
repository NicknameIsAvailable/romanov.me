import Header from "@/widgets/header/ui";
import Hello from "../sections/hello";
import AboutMe from "../sections/about-me";
import Skills from "../sections/skills";
import { dictionaries } from "./dictionaries";
import { Dict } from "./model";
import Portfolio from "../sections/portfolio";
import GetInTouch from "../sections/get-in-touch";
import bg from "@/public/images/bg.png";

export default function Home({params: {lang}}: {params: {lang: "ru-RU" | "en-US"}}) {
  const dict: Dict = dictionaries[lang]

  return (
    <main style={{backgroundImage: `url(${bg.src})`}} className="bg-light min-h-screen min-w-screen">
        <Header dict={dict.links}/>
        <Hello dict={dict.hello}/>
        <AboutMe dict={dict.aboutMe}/>
        <Skills dict={dict.skills}/>
        <Portfolio dict={dict.portfolio} lang={lang}/>
        <GetInTouch dict={dict.getInTouch}/>
    </main>
  )
}
