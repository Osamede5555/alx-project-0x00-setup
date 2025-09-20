import Button from "@/components/Button";
export interface ButtonProps {
  title: string;
  styles?: string; // optional, for custom Tailwind classes
  sizes: string; // e.g., 'small', 'medium', 'large'
  shapes: string
}

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      {/* <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">Get Started</button> */}
      <Button sizes="small" shapes="rounded-full" title="Get Started"/>
    </main>
  )
}

export default Home;