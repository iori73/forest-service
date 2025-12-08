"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/data/cases";
import { categories, CategoryId } from "@/data/types";
import { CaseCard } from "@/components/cases/CaseCard";
import { cn } from "@/lib/utils";

function CasesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CategoryId | null;
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">(
    initialCategory || "all"
  );
  const [sortBy, setSortBy] = useState<"number" | "prefecture">("number");

  const filteredAndSortedCases = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? caseStudies
        : caseStudies.filter((c) => c.category === selectedCategory);

    if (sortBy === "prefecture") {
      filtered = [...filtered].sort((a, b) =>
        a.location.prefecture.localeCompare(b.location.prefecture, "ja")
      );
    } else {
      filtered = [...filtered].sort((a, b) => a.number - b.number);
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const prefectures = useMemo(() => {
    const prefs = new Set(filteredAndSortedCases.map((c) => c.location.prefecture));
    return Array.from(prefs).sort((a, b) => a.localeCompare(b, "ja"));
  }, [filteredAndSortedCases]);

  return (
    <>
      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    selectedCategory === "all"
                      ? "bg-forest-deep text-white shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  すべて ({caseStudies.length})
                </button>
                {categories.map((category) => {
                  const count = caseStudies.filter(
                    (c) => c.category === category.id
                  ).length;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all",
                        selectedCategory === category.id
                          ? "shadow-md"
                          : "hover:opacity-80"
                      )}
                      style={{
                        backgroundColor:
                          selectedCategory === category.id
                            ? category.color
                            : category.bgColor,
                        color:
                          selectedCategory === category.id
                            ? "white"
                            : category.color,
                      }}
                    >
                      {category.nameShort} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">並び替え:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "number" | "prefecture")
                }
                className="text-sm border border-border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-forest-leaf"
              >
                <option value="number">番号順</option>
                <option value="prefecture">都道府県順</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              <span className="font-bold text-forest-deep">
                {filteredAndSortedCases.length}
              </span>{" "}
              件の事例
              {selectedCategory !== "all" && (
                <span className="ml-2">
                  （
                  {categories.find((c) => c.id === selectedCategory)?.nameShort}
                  ）
                </span>
              )}
            </p>
            {sortBy === "prefecture" && (
              <p className="text-sm text-muted-foreground">
                {prefectures.length}都道府県
              </p>
            )}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredAndSortedCases.map((caseStudy, index) => (
                <CaseCard
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredAndSortedCases.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-forest-deep mb-2">
                該当する事例がありません
              </h3>
              <p className="text-muted-foreground">
                フィルター条件を変更してお試しください
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Category Legend (when viewing all) */}
      {selectedCategory === "all" && (
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-forest-deep mb-6">
              カテゴリについて
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, i) => (
                <div
                  key={category.id}
                  className="flex items-start gap-3 bg-white rounded-xl p-4"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shrink-0"
                    style={{
                      backgroundColor: category.bgColor,
                      color: category.color,
                    }}
                  >
                    {["I", "II", "III", "IV", "V"][i]}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-sm mb-1"
                      style={{ color: category.color }}
                    >
                      {category.nameShort}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function CasesLoading() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border overflow-hidden animate-pulse"
            >
              <div className="h-40 bg-muted" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-muted rounded w-1/3" />
                <div className="h-6 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-mist to-white">
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-forest-deep via-forest-moss to-forest-leaf">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              先進事例一覧
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              全国から集めた{caseStudies.length}
              の森林サービス産業の先進事例を紹介しています。
              <br className="hidden sm:block" />
              カテゴリや地域で絞り込んで、興味のある事例を見つけてください。
            </p>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<CasesLoading />}>
        <CasesContent />
      </Suspense>
    </div>
  );
}
