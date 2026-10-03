"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import FilterBar from "@/components/projects/FilterBar";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  return (
    <>
      <Navbar />

      <ProjectsHeader />

      <FilterBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ProjectsGrid activeFilter={activeFilter} />

      <Footer />
    </>
  );
}