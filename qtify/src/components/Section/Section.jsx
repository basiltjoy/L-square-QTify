import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import styles from "./Section.module.css";

const Section = ({ title, dataSource }) => {
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    axios.get(dataSource)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dataSource]); // Only re-run if dataSource changes

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {isCollapsed ? "Show All" : "Collapse"}
        </h4>
      </div>

      {data.length === 0 ? (
        <div className={styles.loading}>
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className={styles.gridWrapper}>
          {/* If collapsed, show only 7; if not, show all */}
          {isCollapsed 
            ? data.slice(0, 7).map((item) => <Card key={item.id} data={item} type="album" />)
            : data.map((item) => <Card key={item.id} data={item} type="album" />)
          }
        </div>
      )}
    </div>
  );
};

export default Section;