"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { categories } from "@/data/types";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-mist to-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-forest-deep via-forest-moss to-forest-leaf">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              森林サービス産業とは
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              森林空間を健康、観光、教育等の多様な分野で活用することにより、
              <br className="hidden sm:block" />
              新たな価値を生み出す産業です。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <Card>
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-2xl font-bold text-forest-deep mb-6">
                  背景と目的
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    日本の国土の約7割を占める森林は、木材生産だけでなく、水源涵養、国土保全、
                    生物多様性の保全など多面的な機能を有しています。
                  </p>
                  <p>
                    近年、健康志向の高まりや働き方改革の推進を背景に、森林空間を健康増進や
                    レクリエーション、企業研修など多様な目的で活用する動きが広がっています。
                  </p>
                  <p>
                    このような「森林サービス産業」は、山村地域における新たな収入源の確保や
                    交流人口の拡大による地域活性化に寄与することが期待されています。
                  </p>
                </div>

                <div className="mt-10 p-6 bg-sky-mist rounded-2xl">
                  <h3 className="text-xl font-bold text-forest-deep mb-4">
                    森林サービス産業が生み出す価値
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: "💚",
                        title: "健康増進",
                        description: "森林浴やウォーキングによるストレス軽減・免疫力向上",
                      },
                      {
                        icon: "🏔️",
                        title: "地域活性化",
                        description: "交流人口の拡大と地域経済への貢献",
                      },
                      {
                        icon: "🌱",
                        title: "森林保全",
                        description: "森林への関心向上と適切な管理の促進",
                      },
                      {
                        icon: "🤝",
                        title: "都市と山村の連携",
                        description: "企業と地域の新たなパートナーシップ構築",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-bold text-forest-deep">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <Card>
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-2xl font-bold text-forest-deep mb-6">
                  本事例集の分類
                </h2>
                <p className="text-muted-foreground mb-8">
                  本事例集では、森林サービス産業の先進事例を以下の5つのカテゴリに分類しています。
                </p>

                <div className="space-y-4">
                  {categories.map((category, i) => (
                    <Link
                      key={category.id}
                      href={`/cases?category=${category.id}`}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-forest-leaf hover:bg-sky-mist/50 transition-all"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                        style={{
                          backgroundColor: category.bgColor,
                          color: category.color,
                        }}
                      >
                        {["I", "II", "III", "IV", "V"][i]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-forest-deep mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-muted-foreground shrink-0 mt-3"
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Card>
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-2xl font-bold text-forest-deep mb-6">
                  出典について
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    本サイトは、林野庁委託事業
                    <strong className="text-forest-deep">
                      「森林資源を活用した新たな山村活性化に向けた調査検討事業」
                    </strong>
                    の報告書（令和元年度）の参考資料
                    <strong className="text-forest-deep">
                      「森林サービス産業」先進事例集
                    </strong>
                    を基に作成しています。
                  </p>
                  <p>
                    内容の正確性については、原本をご確認ください。
                    また、各事例の最新情報については、直接各事業者へお問い合わせください。
                  </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="https://www.rinya.maff.go.jp/j/sanson/kassei/sangyou/attach/pdf/houkokusyo_202003-1.pdf"
                    variant="primary"
                  >
                    原本PDFを見る
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
                  </Button>
                  <Button href="https://www.rinya.maff.go.jp/" variant="outline">
                    林野庁ウェブサイト
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
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button href="/cases" size="lg">
              事例を見る
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}





