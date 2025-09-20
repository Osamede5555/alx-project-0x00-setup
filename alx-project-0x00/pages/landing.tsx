
import Card from "@/components/Card";
import React from "react";
import Button from "@/components/Button";


const Landing: React.FC = () => {
    return (
        <div>
            <Button sizes="small" shapes="rounded-full" title="Get Started" styles="bg-red-400"/>
            <Button sizes="small" shapes="rounded-sm" title="Get Started" styles="bg-red-400"/>
            <Button sizes="small" shapes="rounded-lg" title="Get Started" styles="bg-red-400"/>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
        </div>
    )
};
export default Landing;
