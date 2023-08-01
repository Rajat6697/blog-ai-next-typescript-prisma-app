import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-50 p-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/**FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            harum sit, distinctio soluta atque voluptatibus officia veritatis
            odit iusto pariatur ipsa totam, dicta quia accusantium eius delectus
            iure! Rerum, tenetur.
          </p>
          <p className="my-5">©️ Copyright Text : All Right Reserved</p>
        </div>

          {/**SECOND COLUMN */}
          <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">IMPORTANT LINKS</h4>
          <p className="my-5">
            Lorem, adipisicing elit.
          </p>
          <p className="my-5">
            Lorem, consectetur adipisicing elit.
          </p>
          <p className="my-5">
             consectetur adipisicing elit.
          </p>
          <p className="my-5">
            Lorem, ipsum dolor sit 
          </p>
        </div>

         {/**THIRD COLUMN */}
         <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem, adipisicing elit.
          </p>
          <p className="my-5">
            Lorem, consectetur adipisicing elit.
          </p>
          <p className="my-5">
             consectetur adipisicing elit.
          </p>
          <p className="my-5">
            Lorem, ipsum dolor sit 
          </p>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
