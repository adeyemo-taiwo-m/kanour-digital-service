"use client";

import Modal from "@/app/_ui/Modal";
import Button from "@/app/_ui/Button";
import Image from "next/image";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function PortfolioProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
        {/* Image Section */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/10">
          {project.imageURL ? (
            <Image
              src={project.imageURL}
              alt={`Screenshot of ${project.title}`}
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-variant/50 dark:to-dark-variant/30 flex items-center justify-center">
              <FaExternalLinkAlt className="text-dark-default/20 dark:text-white/20 w-16 h-16" />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${
                  project.color
                    ?.replace("bg-", "text-")
                    .replace("600", "500") || "text-primary-default"
                } bg-opacity-10 bg-current`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.color || "bg-primary-default"
                  }`}
                ></span>
                {project.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-default dark:text-white leading-tight">
              {project.title}
            </h2>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {/* Add more detailed description if available in project data, otherwise just show the main description */}
            {project.longDescription && (
              <p className="mt-4 text-dark-variant/70 dark:text-light-variant/70 leading-relaxed">
                {project.longDescription}
              </p>
            )}
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark-variant/50 dark:text-light-variant/50 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-dark-variant/80 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-100 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 dark:border-white/10">
            {project.liveURL && (
              <a
                href={project.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button type="primary" className="w-full justify-center !py-3">
                  View Live Project
                  <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                </Button>
              </a>
            )}

            {project.githubURL && (
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  type="secondary"
                  className="w-full justify-center !py-3"
                >
                  View Source Code
                  <FaGithub className="ml-2 w-5 h-5" />
                </Button>
              </a>
            )}

            {!project.liveURL && !project.githubURL && (
              <Button
                type="secondary"
                className="w-full justify-center !py-3"
                onClick={onClose}
              >
                Close Details
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
