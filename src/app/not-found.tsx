"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-mist to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-8xl mb-6">🌲</div>
        <h1 className="text-4xl font-bold text-forest-deep mb-4">
          ページが見つかりません
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            ホームへ戻る
          </Button>
          <Button href="/cases" variant="outline" size="lg">
            事例一覧を見る
          </Button>
        </div>
      </motion.div>
    </div>
  );
}



