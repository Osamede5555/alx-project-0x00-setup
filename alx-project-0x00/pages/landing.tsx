import Card from "@/components/Card"
import Button from "../components/Button";
const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <div className="flex gap-4">
        <Button title="Rounded-sm" styles="px-4 py-2 rounded-sm" />
        <Button title="Rounded-md" styles="px-4 py-2 rounded-md" />
        <Button title="Rounded-full" styles="px-4 py-2 rounded-full" />
      </div>

      </div>
    )
  }
  export default Landing