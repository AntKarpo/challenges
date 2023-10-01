import Link from "../components/Link";
import QuickActions from "../components/QuickActions";
import { useState } from "react";

export default function Actions({ lights, toggleAllLights }) {

  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>

      <QuickActions lights={lights} toggleAllLights={toggleAllLights} />
    </>
  );
}



  