import Header from "@/widgets/header/ui";
import Hello from "./sections/hello";
import Footer from "@/widgets/footer/ui";

export default function Home() {
  return (
    <main className="bg-light min-h-screen min-w-screen">
      <Header/>
      <Hello/>
    </main>
  )
}
