import React from "react";
import Image from "next/image";
import Twitter from "public/assets/social_twitter.png";
import Facebook from "public/assets/social_facebook.png";
import Instagram from "public/assets/social_instagram.png";
import Google from "public/assets/social_google.png";
import Discord from "public/assets/social_discord.png";

type Props = {
  isDark?: boolean;
};

const imageData = [
    {
      link: "https://www.twitter.com",
      src: Twitter,
      alt : "twitter",
    },
    {
      link: "https://www.facebook.com",
      src: Facebook,
      alt : "facebook",
    },
    {
      link: "https://www.instagram.com",
      src: Instagram,
      alt : "instagram",
    },
    {
      link: "https://www.google.com",
      src: Google,
      alt : "google",
    },
    {
      link: "https://www.discord.com",
      src: Discord,
      alt : "discord",
    },
  ];



const SocialLinks = ({ isDark = false }: Props) => {
 
  return (
    <div className="flex justify-between items-center gap-7">
     {
        imageData.map((imgItem, indexOfImgItem)=> (
            <a href={imgItem.link} target="_blank_" rel="noreferrer">
            <Image 
            
            className={`${isDark ? "brightness-0 " : ""} hover:opacity-50` }
            alt={imgItem.alt}
            src={imgItem.src}
            width={20}
            height={20}
            />
          </a>
        ))
     }
    </div>
  );
};

export default SocialLinks;
