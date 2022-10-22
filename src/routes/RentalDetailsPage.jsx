// import ImagesSlider from "../components/ImagesSlider";
import Dropdown from "../components/Dropdown";
import classes from "./RentalDetailsPage.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getRentals } from "../util/rentalsData.js";
import { IoIosStar } from "react-icons/io";
import ImagesSlider from "../components/ImagesSlider";

export default function RentalDetailsPage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const params = useParams();
  const { id } = params;
  const rentals = getRentals();

  const currentRentalArray = rentals.filter((rental) => rental.id === id);
  const currentRental = currentRentalArray[0];

  const equipments = currentRental.equipments;
  const equipmentElements = equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  const tags = currentRental.tags;
  const tagElements = tags.map((tag, index) => (
    <span className={classes.tagInfos} key={index}>
      {tag}
    </span>
  ));

  const totalStars = 5;
  const activeStars = currentRental.rating;

  const handleOpen1 = () => {
    setOpen1(!open1);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };

  return (
    <>
      <div>
        <ImagesSlider slides={currentRental.pictures} />
        <div className={classes.rentalInfos}>
          <div className={classes.rentalInfosRight}>
            <div>
              <h1 className={classes.titleInfos}>{currentRental.title}</h1>
              <h2 className={classes.locationInfos}>
                {currentRental.location}
              </h2>
            </div>
            <div className={classes.tagInfosContainer}>{tagElements}</div>
          </div>
          <div className={classes.rentalInfosLeft}>
            <div className={classes.nameImageInfos}>
              <h3 className={classes.nameInfos}>{currentRental.host.name}</h3>
              <img
                className={classes.imageInfos}
                src={currentRental.host.picture}
                alt="avatar"
              />
            </div>
            <div className={classes.starContainer}>
              {[...new Array(totalStars)].map((arr, index) => {
                return (
                  <IoIosStar
                    key={index}
                    className={
                      index < activeStars ? classes.starActive : classes.star
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={classes.dropdownContainer}>
          <div className={classes.dropRentalDetailsPage}>
            <Dropdown
              open={open1}
              handleOpen={handleOpen1}
              title={"Description"}
              paragraph={currentRental.description}
            />
          </div>
          <div className={classes.dropRentalDetailsPage}>
            <Dropdown
              open={open2}
              handleOpen={handleOpen2}
              title={"Equipments"}
              list={equipmentElements}
            />
          </div>
        </div>
      </div>
    </>
  );
}
