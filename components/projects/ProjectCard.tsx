"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Projects.module.css";
import { Project } from "@/app/projects/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={styles.card}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className={styles.overlay}>
        <span>{project.category}</span>
        <h2>{project.title}</h2>
        <p>{project.location}</p>
      </div>
    </Link>
  );
}