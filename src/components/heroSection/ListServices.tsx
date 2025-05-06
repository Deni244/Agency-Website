

import { useMemo } from "react";
import '../../styles/heroSection/listServices.css'

const services = [
  "digital marketing",
  "website design",
  "branding",
  "website development",
  "mobile app development",
];

export default function ListServices() {
    const loopedList = useMemo(() => [...services, ...services], []);

    return (
      <div className="hero-list-services-cnt">
        <ul className="hero-list-roller">
          {loopedList.map((text, i) => (
            <li className="hero-list-item" key={i}>
              <div></div>
              <span>{text.toLocaleUpperCase()}</span>
            </li>
          ))}
        </ul>
      </div>
    );
}
