import React from "react";
import Navbar from "../components/navbar";
import TeamMember from "../components/teamMember";
import team from "../data/teamMembers";
export default function Team() {
  const teamMembers = team.map((member) => {
    return (
      <TeamMember
        bio={member.bio}
        img={member.img}
        name={member.name}
      ></TeamMember>
    );
  });
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-40 bg-main flex items-center justify-center">
        <h1 className="text-white font-body text-3xl"> Our Team</h1>
      </div>
      <div className="flex justify-center my-8 lg:px-8 xl:px-0">
        <div className="max-w-5xl mt-8 grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          {teamMembers}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
