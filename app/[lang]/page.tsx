import Header from "@/widgets/header/ui";
import Hello from "../sections/hello";
import AboutMe from "../sections/about-me";
import Skills from "../sections/skills";
import { dictionaries } from "./dictionaries";
import { Dict } from "./model";

export default function Home({params: {lang}}: {params: {lang: string}}) {
  const dict: Dict = dictionaries[lang]

  return (
    <main className="bg-light min-h-screen min-w-screen">
      <Header/>
      <Hello dict={dict.hello}/>
      <AboutMe dict={dict.aboutMe}/>
      <Skills dict={dict.skills}/>
    </main>
  )
}
