import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of passion for innovation. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Fugit aliquid eum hic nam,
            voluptas corrupti quae modi? Deleniti, minus rerum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iste, aliquam?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            quas maiores nisi voluptas vitae, voluptate enim, quod placeat
            mollitia, cumque error natus! Blanditiis eos recusandae fugit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor
            amet doloremque!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            dolorem molestiae quae repudiandae quaerat, nihil repellendus.
            Aspernatur accusantium repellendus nobis dolore, provident veritatis
            obcaecati.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            atque facilis dolores! Maxime, odit nesciunt aliquam voluptatibus
            deleniti id natus sit tempore velit ipsam?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Conveniance</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            atque facilis dolores! Maxime, odit nesciunt aliquam voluptatibus
            deleniti id natus sit tempore velit ipsam?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exeptional Customer Service</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            atque facilis dolores! Maxime, odit nesciunt aliquam voluptatibus
            deleniti id natus sit tempore velit ipsam?
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
