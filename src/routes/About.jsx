import { useState } from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutBanner from "../assets/banner-about.png";

export default function About() {
  // const dropdownArray = [
  //   {
  //     id: 1,
  //     title: "Fiablilité",
  //     paragraph:
  //       "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  //   },
  //   {
  //     id: 2,
  //     title: "Respect",
  //     paragraph:
  //       "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  //   },
  //   {
  //     id: 3,
  //     title: "Service",
  //     paragraph:
  //       "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  //   },
  //   {
  //     id: 4,
  //     title: "Sécurité",
  //     paragraph:
  //       "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  //   },
  // ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Banner banner={aboutBanner} />
      <Dropdown open={open} handleOpen={handleOpen} title={"Fiabilité"} paragraph={ "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}/>
      <Dropdown open={open} handleOpen={handleOpen} title={"Respect"} paragraph={ "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
      <Dropdown open={open} handleOpen={handleOpen} title={"Service"} paragraph={ "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
      <Dropdown open={open} handleOpen={handleOpen} title={"Sécurité"} paragraph={ "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
    </>
  );
}
