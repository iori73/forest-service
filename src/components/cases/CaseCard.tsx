"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudy } from "@/data/types";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { Card } from "@/components/ui/Card";

interface CaseCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export function CaseCard({ caseStudy, index = 0 }: CaseCardProps) {
  const imageUrl = caseStudy.images && caseStudy.images.length > 0 
    ? caseStudy.images[0] 
    : null;
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/cases/${caseStudy.slug}`}>
        <Card hover className="h-full flex flex-col">
          {/* Thumbnail with image or placeholder */}
          <div className="h-40 relative overflow-hidden bg-gradient-to-br from-forest-leaf/20 via-sky-mist to-forest-moss/20">
            {imageUrl && !imageError ? (
              <Image
                src={imageUrl}
                alt={caseStudy.subtitle || caseStudy.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                onError={() => setImageError(true)}
              />
            ) : null}
            {/* Placeholder fallback */}
            <div className={`absolute inset-0 flex items-center justify-center ${imageUrl && !imageError ? 'hidden' : ''}`}>
              <div className="text-6xl opacity-20">🌲</div>
            </div>
            <div className="absolute top-3 left-3 z-10">
              <CategoryBadge categoryId={caseStudy.category} size="sm" />
            </div>
            <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-medium text-forest-deep">
              #{caseStudy.number}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                {caseStudy.location.prefecture} {caseStudy.location.city}
              </span>
            </div>

            <h3 className="font-bold text-lg text-forest-deep leading-snug mb-2 line-clamp-2">
              {caseStudy.subtitle || caseStudy.title}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
              {caseStudy.overview}
            </p>

            {/* Highlights */}
            <div className="mt-4 pt-4 border-t border-border">
              <ul className="space-y-1">
                {caseStudy.highlights.slice(0, 2).map((highlight, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground flex items-start gap-1.5"
                  >
                    <span className="text-forest-leaf mt-0.5">✓</span>
                    <span className="line-clamp-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

