"use client";

import { useState } from 'react';
import { GoogleApps } from '../GoogleApps';
import { SVGGridDots } from '../Svgs';

export default function GoogleAppsHandler() {
  const [appsAreVisible, setAppsAreVisible] = useState(false);

  const handleAppsVisibility = () => {
    setAppsAreVisible((current) => !current);
  };

  return (
    <>
      <div onClick={handleAppsVisibility}>
        <SVGGridDots />
      </div>

      {appsAreVisible && <GoogleApps />}
    </>
  );
}
