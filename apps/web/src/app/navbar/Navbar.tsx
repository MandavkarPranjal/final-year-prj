import React from "react";
import { Button } from "../button/Button";
import "./style.sass";

export const Navbar = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="frame">
        <div className="div">Home</div>
        <div className="text-wrapper-2">About us</div>
        <div className="text-wrapper-2">Services</div>
        <div className="text-wrapper-2">Doctors</div>
        <div className="text-wrapper-2">News</div>
        <div className="text-wrapper-2">Contact</div>
      </div>
      <div className="group">
        <img className="img" alt="Group" src="group-175.svg" />
        <Button text="Appointment" />
      </div>
    </div>
  );
};