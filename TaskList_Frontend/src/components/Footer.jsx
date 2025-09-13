import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>With &#128151; By Keerthana Peddireddy. Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
