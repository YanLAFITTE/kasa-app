import { useState } from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutBanner from "../assets/banner-about.png";

const About = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const handleOpen1 = () => {
    setOpen1(!open1);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const handleOpen3 = () => {
    setOpen3(!open3);
  };
  const handleOpen4 = () => {
    setOpen4(!open4);
  };
  return (
    <>
      <Banner banner={aboutBanner} />
      <Dropdown
        open={open1}
        handleOpen={handleOpen1}
        title={"Fiabilité"}
        paragraph={
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        }
      />
      <Dropdown
        open={open2}
        handleOpen={handleOpen2}
        title={"Respect"}
        paragraph={
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        }
      />
      <Dropdown
        open={open3}
        handleOpen={handleOpen3}
        title={"Service"}
        paragraph={
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        }
      />
      <Dropdown
        open={open4}
        handleOpen={handleOpen4}
        title={"Sécurité"}
        paragraph={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
      />
    </>
  );
};

export default About;
