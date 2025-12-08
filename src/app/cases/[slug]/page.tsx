"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCaseBySlug, getRelatedCases, caseStudies } from "@/data/cases";
import { getCategoryById } from "@/data/types";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CaseCard } from "@/components/cases/CaseCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const category = getCategoryById(caseStudy.category);
  const relatedCases = getRelatedCases(caseStudy);

  // Find previous and next cases
  const currentIndex = caseStudies.findIndex((c) => c.id === caseStudy.id);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-mist to-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-forest-deep via-forest-moss to-forest-leaf relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/cases" className="hover:text-white transition-colors">
                  事例一覧
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">
                {caseStudy.subtitle || caseStudy.title}
              </li>
            </ol>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                #{caseStudy.number}
              </span>
              <CategoryBadge categoryId={caseStudy.category} />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {caseStudy.subtitle || caseStudy.title}
            </h1>

            {caseStudy.subtitle && (
              <p className="text-lg text-white/80 mb-6 max-w-3xl">
                {caseStudy.title}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
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

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>{caseStudy.operator}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-forest-deep mb-4">
                      概要
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.overview}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 p-4 bg-sky-mist rounded-xl">
                      <h3 className="font-bold text-forest-deep mb-3">
                        ポイント
                      </h3>
                      <ul className="space-y-2">
                        {caseStudy.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-forest-leaf mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Timeline */}
              {caseStudy.timeline.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-forest-deep mb-6">
                        取組の経緯
                      </h2>
                      <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-forest-leaf via-forest-moss to-forest-deep" />

                        <div className="space-y-6">
                          {caseStudy.timeline.map((event, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="relative pl-12"
                            >
                              {/* Dot */}
                              <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-forest-leaf border-4 border-white shadow" />

                              <div className="bg-muted rounded-xl p-4">
                                <div className="font-bold text-forest-deep mb-1">
                                  {event.year}年
                                  {event.month && `${event.month}月`}
                                </div>
                                <p className="text-muted-foreground text-sm">
                                  {event.event}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Programs */}
              {caseStudy.programs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-forest-deep mb-6">
                        プログラム・メニュー
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {caseStudy.programs.map((program, i) => (
                          <div
                            key={i}
                            className="bg-muted rounded-xl p-4 hover:bg-sky-mist transition-colors"
                          >
                            <h3 className="font-bold text-forest-deep mb-2">
                              {program.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {program.description}
                            </p>
                            {(program.price || program.duration) && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {program.price && (
                                  <span className="inline-flex items-center gap-1 text-xs bg-accent-sunlight/20 text-earth-warm px-2 py-1 rounded-full">
                                    <svg
                                      className="w-3 h-3"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    {program.price}
                                  </span>
                                )}
                                {program.duration && (
                                  <span className="inline-flex items-center gap-1 text-xs bg-forest-leaf/20 text-forest-deep px-2 py-1 rounded-full">
                                    <svg
                                      className="w-3 h-3"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    {program.duration}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Features */}
              {caseStudy.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-forest-deep mb-6">
                        特徴・成功要因
                      </h2>
                      <div className="space-y-6">
                        {caseStudy.features.map((feature, i) => (
                          <div
                            key={i}
                            className="border-l-4 border-forest-leaf pl-6"
                          >
                            <h3 className="font-bold text-forest-deep text-lg mb-2">
                              特徴{i + 1}: {feature.title}
                            </h3>
                            <p className="text-muted-foreground mb-3">
                              {feature.description}
                            </p>
                            {feature.points && feature.points.length > 0 && (
                              <ul className="space-y-1">
                                {feature.points.map((point, j) => (
                                  <li
                                    key={j}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <span className="text-forest-leaf">•</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Results */}
              {caseStudy.results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-forest-deep mb-6">
                        実績データ
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {caseStudy.results.map((result, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-br from-forest-leaf/10 to-forest-moss/10 rounded-xl p-5"
                          >
                            <div className="text-sm text-muted-foreground mb-1">
                              {result.metric}
                              {result.year && (
                                <span className="ml-1">({result.year}年)</span>
                              )}
                            </div>
                            <div className="text-2xl font-bold text-forest-deep">
                              {result.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Basic Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-forest-deep mb-4">基本情報</h3>

                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm text-muted-foreground">
                          カテゴリ
                        </dt>
                        <dd className="mt-1">
                          <span
                            className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                            style={{
                              backgroundColor: category?.bgColor,
                              color: category?.color,
                            }}
                          >
                            {category?.name}
                          </span>
                        </dd>
                      </div>

                      <div>
                        <dt className="text-sm text-muted-foreground">所在地</dt>
                        <dd className="font-medium text-forest-deep">
                          {caseStudy.location.prefecture}{" "}
                          {caseStudy.location.city}
                          {caseStudy.location.address && (
                            <div className="text-sm text-muted-foreground mt-1">
                              {caseStudy.location.address}
                            </div>
                          )}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-sm text-muted-foreground">実施者</dt>
                        <dd className="font-medium text-forest-deep">
                          {caseStudy.operator}
                        </dd>
                      </div>

                      {caseStudy.contact && (
                        <div>
                          <dt className="text-sm text-muted-foreground">
                            連絡先
                          </dt>
                          <dd className="text-sm">
                            {caseStudy.contact.tel && (
                              <div className="flex items-center gap-2 text-forest-deep">
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
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                                {caseStudy.contact.tel}
                              </div>
                            )}
                            {caseStudy.contact.email && (
                              <div className="flex items-center gap-2 text-forest-deep mt-1">
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
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                                <span className="break-all">
                                  {caseStudy.contact.email}
                                </span>
                              </div>
                            )}
                          </dd>
                        </div>
                      )}

                      {caseStudy.url && (
                        <div>
                          <dt className="text-sm text-muted-foreground mb-2">
                            ウェブサイト
                          </dt>
                          <dd>
                            <a
                              href={caseStudy.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-forest-leaf hover:text-forest-deep transition-colors text-sm"
                            >
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
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              公式サイトを見る
                            </a>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-forest-deep mb-4">
                      他の事例を見る
                    </h3>
                    <div className="space-y-3">
                      {prevCase && (
                        <Link
                          href={`/cases/${prevCase.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-sky-mist transition-colors group"
                        >
                          <svg
                            className="w-5 h-5 text-muted-foreground group-hover:text-forest-deep transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-muted-foreground">
                              前の事例
                            </div>
                            <div className="text-sm font-medium text-forest-deep truncate">
                              {prevCase.subtitle || prevCase.title}
                            </div>
                          </div>
                        </Link>
                      )}
                      {nextCase && (
                        <Link
                          href={`/cases/${nextCase.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-sky-mist transition-colors group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-muted-foreground">
                              次の事例
                            </div>
                            <div className="text-sm font-medium text-forest-deep truncate">
                              {nextCase.subtitle || nextCase.title}
                            </div>
                          </div>
                          <svg
                            className="w-5 h-5 text-muted-foreground group-hover:text-forest-deep transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <Button href="/cases" variant="outline" className="w-full">
                        事例一覧へ戻る
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-forest-deep">関連する事例</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCases.map((related, i) => (
                <CaseCard key={related.id} caseStudy={related} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}



