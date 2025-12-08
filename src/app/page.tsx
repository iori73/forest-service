"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CaseCard } from "@/components/cases/CaseCard";
import { caseStudies, getStatistics } from "@/data/cases";
import { categories } from "@/data/types";

export default function HomePage() {
  const stats = useMemo(() => getStatistics(), []);
  
  // 注目事例（異なるカテゴリから選択）
  const featuredCases = useMemo(() => [
    caseStudies[0], // 信濃町
    caseStudies[6], // Tree Picnic Adventure
    caseStudies[9], // ふもとっぱら
  ], []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest-moss to-forest-leaf">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent-sunlight blur-3xl" />
          </div>
          {/* Tree pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="trees" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 20 L10 15 L5 15 L10 8 L15 15 L10 15" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#trees)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-sunlight animate-pulse" />
              林野庁委託事業 令和元年度報告書より
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              森から届く、
              <br />
              <span className="text-accent-sunlight">新しい価値</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              森林セラピー、健康経営、アウトドアアクティビティ——
              <br className="hidden sm:block" />
              日本各地で生まれている
              <strong className="text-white">森林サービス産業</strong>の
              <br className="hidden sm:block" />
              先進事例14件をわかりやすく紹介します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/cases" size="lg" variant="primary" className="bg-white text-forest-deep hover:bg-sky-mist">
                事例を見る
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button href="/about" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                森林サービス産業とは
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: stats.totalCases, label: "事例" },
              { value: stats.prefectureCount, label: "都道府県" },
              { value: 5, label: "カテゴリ" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* What is Forest Service Industry */}
      <section className="py-24 bg-sky-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4">
              森林サービス産業とは
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              森林空間を健康、観光、教育等の多様な分野で活用し、
              <br className="hidden sm:block" />
              新たな価値を生み出す産業のことです。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "健康・ウェルネス",
                description:
                  "森林セラピー、クアオルト健康ウォーキングなど、森林環境を活用した健康増進プログラム",
              },
              {
                icon: "🏕️",
                title: "観光・レクリエーション",
                description:
                  "キャンプ、アドベンチャーパーク、グランピングなど、森林を舞台にした体験型観光",
              },
              {
                icon: "🏢",
                title: "企業・健康経営",
                description:
                  "社員研修、チームビルディング、福利厚生として森林サービスを活用する企業の取り組み",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full text-center p-8">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-forest-deep mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4">
              5つのカテゴリ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              事例は主体や分野によって5つのカテゴリに分類されています
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={`/cases?category=${category.id}`}>
                  <Card hover className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                        style={{
                          backgroundColor: category.bgColor,
                          color: category.color,
                        }}
                      >
                        {["I", "II", "III", "IV", "V"][i]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-forest-deep mb-1">
                          {category.nameShort}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-24 bg-gradient-to-b from-white to-sky-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep mb-4">
                注目の事例
              </h2>
              <p className="text-lg text-muted-foreground">
                多様な森林サービスの形を見てみましょう
              </p>
            </div>
            <Button href="/cases" variant="outline" className="hidden sm:flex">
              すべての事例を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCases.map((caseStudy, i) => (
              <CaseCard key={caseStudy.id} caseStudy={caseStudy} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button href="/cases" variant="outline">
              すべての事例を見る
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-sunlight blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-forest-leaf blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              森林サービス産業の可能性を
              <br />
              一緒に探りませんか？
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              この事例集が、森林資源を活用した新たなビジネスや
              <br className="hidden sm:block" />
              地域活性化のヒントになれば幸いです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/cases" size="lg" className="bg-white text-forest-deep hover:bg-sky-mist">
                事例を探す
              </Button>
              <Button
                href="https://www.rinya.maff.go.jp/j/sanson/kassei/sangyou/attach/pdf/houkokusyo_202003-1.pdf"
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                原本PDFを見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
