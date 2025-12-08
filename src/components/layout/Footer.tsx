import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">森林サービス産業 先進事例集</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              本サイトは、林野庁委託事業「森林資源を活用した新たな山村活性化に向けた調査検討事業」
              の報告書（令和元年度）を基に作成しています。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cases"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  事例一覧
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  森林サービス産業とは
                </Link>
              </li>
              <li>
                <a
                  href="https://www.rinya.maff.go.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  林野庁
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Source */}
          <div>
            <h3 className="text-lg font-bold mb-4">出典</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              令和元年度 林野庁委託事業
              <br />
              「森林資源を活用した新たな山村活性化に向けた調査検討事業」報告書
              <br />
              （参考資料）「森林サービス産業」先進事例集
            </p>
            <a
              href="https://www.rinya.maff.go.jp/j/sanson/kassei/sangyou/attach/pdf/houkokusyo_202003-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-accent-sunlight hover:text-white transition-colors"
            >
              原本PDF
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/50">
            このサイトは教育・情報提供を目的として作成されています。
            <br className="sm:hidden" />
            内容の正確性については原本をご確認ください。
          </p>
        </div>
      </div>
    </footer>
  );
}



