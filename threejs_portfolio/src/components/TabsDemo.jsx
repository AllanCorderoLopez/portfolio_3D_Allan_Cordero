"use client";

import { Tabs } from "../components/Tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "BH Constructora",
      value: "BH Constructora",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-slate-800">
          <p className="text-white font-sans font-medium">BH Constructora project manager</p>
          <BHCONTRUCTORA />
        </div>
      ),
    },
    {
      title: "SEO keyword with GPT-API",
      value: "SEO keyword with GPT-API",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-slate-800">
            <p className="text-white font-sans font-medium">SEO keyword with GPT-API</p>
          <SEOKEYWORD />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[20rem] mb-96 mt-10 md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

const SEOKEYWORD = () => {
    return (
      <img
        src="https://res.cloudinary.com/dgybfgz9v/image/upload/v1717817985/koueyfleqtvtjd3escip.png"
        alt="bhconstrutora image"
        width="100"
        height="100"
        className=" h-[60%]  md:h-[80%] absolute -bottom-0 inset-x-0 w-[100%] rounded-xl mx-auto"
        />
    );
  };


const BHCONTRUCTORA = () => {
    return (
      <img
        src="https://res.cloudinary.com/dgybfgz9v/image/upload/v1717816706/hbiojoy6s9vm2b3xmjri.png"
        alt="bhconstrutora image"
        width="100"
        height="100"
        className=" h-[60%]  md:h-[80%] absolute -bottom-0 inset-x-0 w-[100%] rounded-xl mx-auto"
        />
    );
  };


const TRAINING = () => {
    return (
      <img
        src="https://res.cloudinary.com/dgybfgz9v/image/upload/v1717818365/uzupgzm6w8leehxql2sp.png"
        alt="bhconstrutora image"
        width="100"
        height="100"
        className=" h-[60%]  md:h-[70%] absolute -bottom-0 inset-x-0 w-[70%] rounded-xl mx-auto"
        />
    );
  };




export default TabsDemo;