import "../styles/ResidentCard.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ResidentCard = ({ url }) => {
  const [residentData, setResidentData] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResidentData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Resident-card">
      <li>
        <p className={`name ${residentData?.status}`}>{residentData?.name}</p>
        <div className="img">
          <img src={residentData?.image} alt="" />
        </div>
        <div className="main">
          <p>
            <b>Origin name: </b>
            {residentData?.origin.name}
          </p>
          <p>
            <b>N° Episodes: </b> {residentData?.episode.length}
          </p>
        </div>
        <p className={`footer ${residentData?.status}`}>
          <b>status:</b> {residentData?.status}
        </p>
      </li>
    </div>
  );
};

export default ResidentCard;
