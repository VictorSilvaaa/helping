import React from "react";
import { Link } from "react-router-dom";

import logoImage from "../../assets/images/logoHelping.svg";
import backIcon from "../../assets/images/icons/backHelping.svg";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
  src: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to={props.src}>
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImage} alt="Helping" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
