import React from "react";
import Container from "../layout/Container";
import { sectionTitleTextStyle } from "@/style/common";
import Link from "next/link";

function JoinGroup() {
  return (
    <div className="py-16 bg-slate-100 mt-10">
      <Container>
        <div className="">
          <h3 className={`${sectionTitleTextStyle}`}>
            Why Join a{" "}
            <span className="text-primary font-bold">Prayer Group</span>
          </h3>
          <div className="">
            <div className="">
              <div className=""></div>
              <h3>Deepen Your Faith</h3>
              <p>
                Strengthen your relationship with Jesus through consistent
                prayer and reflection.
              </p>
              <Link rel="stylesheet" href="">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default JoinGroup;
