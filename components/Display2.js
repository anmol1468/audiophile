import React from "react";
import zx7Image from "@/public/home/desktop/image-speaker-zx7.jpg";
import styles from "@/styles/components/display2.module.scss";
import Link from "next/link";

function Display2() {
  return (
    <div className="mx-8 my-10">
      <div
        className={`w-full px-20 inline-flex flex-col justify-center rounded-lg ${styles.display2}`}
      >
        <h4 className="font-semibold text-3xl tracking-wider mb-8">
          ZX7 SPEAKER
        </h4>
        <Link href={"zx9-speaker"}>
          <button className="button3">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
}

export default Display2;
