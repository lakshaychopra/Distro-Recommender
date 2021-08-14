import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const distroList = {
    Debian: {
      distro: ["Linux Mint", "Pop-Os", "Ubuntu", "Debian"]
    },
    Redhat: {
      distro: ["Fedora", "CentOs", "Red Hat", "Rocky Linux"]
    },
    Arch: {
      distro: ["Manjaro", "Arch", "AcroLinux", "GarudaLinux"]
    }
  };
  const [distro, setDistro] = useState("Debian");

  function onClilckHandler(distro) {
    setDistro(distro);
  }

  return (
    <div className="App">
      <h1>
        Linux Distro Recommender <span role="img">🐧</span>
      </h1>
      <h3>Recommended Distros for Linux users</h3>
      <hr />
      <div className="buttons">
        {Object.keys(distroList).map((distro) => (
          <button onClick={() => onClilckHandler(distro)}>
            {distro} Based
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {distroList[distro].distro.map((distro, index) => (
            <li>
              {index + 1} {distro}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
