import React from "react";
import Image from "next/image";
import { FeaturedPosts } from '../../sections';

const Contact = () => {
  return (
    <>
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex flex-col md:flex-row lg:flex-row">
        <div className="w-full contactPage">
          <img className="contactImg" src="./contactTop2.jpg" alt="" />
        </div>
        
        <div className="w-full ">
        <div className="mx-auto my-8 flex w-3/4 flex-col items-center  p-6 ">
          <img
            src="./contact.jpg"
            alt=""
            height="200px"
            width="200px"
            className="rounded-lg"
          />
          <div className="my-4 text-xl font-bold text-color">Mandy Pletinckx</div>
          <p className="text-lg text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum, orci eu fermentum condimentum, sapien tellus luctus dolor, vel consectetur ex lorem a lacus. Nullam ligula orci, varius sed aliquet eu, varius in erat. Aenean euismod nulla vitae quam pulvinar scelerisque. Aliquam ac turpis euismod, iaculis ligula nec, sodales dui.</p>
        </div>

        </div>
      </div>
     

      <div className="sectionBottom lightPink py-6">
        <div className="container mx-auto">
          <h3 className="text-center title-font mx-3 py-3 text-3xl text-color">Ne manquez pas les articles du moment </h3>
          <FeaturedPosts />
        </div>
      
      </div>
    </>
  );
};

export default Contact;
