import React from "react";
import Image from "next/image";
import { FeaturedPosts } from "../../sections";

const Contact = () => {
  return (
    <>
      <div className="contactPage w-full flex justify-center ">
          <h1 className="absolute text-white title-font text-4xl md:text-5xl lg:text-6xl pt-12">Ohayo Blog - About Us</h1>
          <img className="contactImg" src="./contactBg.jpg" alt="" />
      </div>
      <div className="w-full ">
          <div className="mx-auto my-8 flex w-3/4 flex-col items-center  p-6 ">
            <img
              src="./contact.gif"
              alt=""
              height="300px"
              width="300px"
              className="rounded-lg pb-4"
              
            />
            <div className="text-color my-4 text-center text-xl font-bold pb-4">
              « Les gens ne font pas de voyages, ce sont les voyages qui font les
              gens. »
             

            </div>
            <p className="text-color text-lg text-center">
              En général le choix d’ une destination de voyage se déroule un peu
              toujours de la même façon: plus ou moins au hasard et à peine 2 ou
              3 semaines avant le départ. Ce genre de situation n’ est peut être
              pas très confortable, on n’ a pas toujours les meilleurs tarifs
              possibles, mais ça donne un petit côté « dans l’ urgence » qui me
              convient assez. Les planifications des mois en avance, ce n’ est
              pas fait pour moi.</p>
              <p className="text-color text-lg mt-4 text-center">
                 Malgré tout j’ aime récupérer quelques infos sur les
              destinations, pour ne pas passer à côté du monument incontournable
              ou du petit endroit insolite.Mais je trouve rarement toutes les
              informations au même endroit.Alors j’ ai décidé de faire ce blog à
              mon image avec ce qui me plait dans les voyages: la nature, les
              espaces, les découvertes citadines, l’ histoire, les monuments,
              les lieux insolites.J’ aime ça et j’ ai envie de le partager 
              </p>
              <p className="text-color text-lg mt-4 text-center">
              Et j’espère qu’ à travers mes articles ça vous donnera à vous aussi l’
              envie de bouger et découvrir ces mêmes lieux et bien d’ autres
              encore, car au final, voyager ça peut être très simple et
              finalement pas si cher que ça
              
              </p>
            
          </div>
        </div>
      <div className="sectionBottom lightPink py-6">
        <div className="container mx-auto">
          <h3 className="title-font text-color mx-3 py-3 text-center text-3xl">
            Ne manquez pas les articles du moment
          </h3>
          <FeaturedPosts />
        </div>
      </div>
    </>
  );
};

export default Contact;
