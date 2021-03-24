import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './LinkIcon.css'
// we use the icon for the footer.
export const LinkIcon = props => {
  const { href, icon, style } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} className={style} />
    </a>
  );
};
