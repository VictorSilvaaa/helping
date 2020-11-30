import React from "react";
import "./styles.css";

interface PageHeaderProps {
  title: string;
  fonte: string;
  src: string;
  li1: string;
  li2: string;
  li3: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={props.src}
          
          alt="Diego Fernandes"
        />
        <div>
          <strong>{props.title}</strong>
          <span>Fonte: {props.fonte}</span>
        </div>
      </header>
      <p>
       <ul>
           <li>{props.li1}</li>
           <li>{props.li2}</li>
           <li>{props.li3}</li>
       </ul>
      </p>

      <footer>
        <button type="button">
          Saiba Mais
        </button>
      </footer>
    </article>
  );
};

export default PageHeader;
