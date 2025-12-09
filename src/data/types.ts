export type CategoryId =
  | "health-gov"
  | "health-private"
  | "public-private"
  | "forest-owner"
  | "corporate";

export interface Category {
  id: CategoryId;
  name: string;
  nameShort: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface Location {
  prefecture: string;
  city: string;
  address?: string;
  coordinates: [number, number]; // [latitude, longitude]
}

export interface TimelineEvent {
  year: number;
  month?: number;
  event: string;
}

export interface Program {
  name: string;
  description: string;
  price?: string;
  duration?: string;
}

export interface Feature {
  title: string;
  description: string;
  points?: string[];
}

export interface Result {
  metric: string;
  value: string;
  year?: number;
}

export interface CaseStudy {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle?: string;
  location: Location;
  category: CategoryId;
  operator: string;
  contact?: {
    tel?: string;
    email?: string;
  };
  url?: string;
  overview: string;
  highlights: string[];
  timeline: TimelineEvent[];
  programs: Program[];
  features: Feature[];
  results: Result[];
  images: string[];
  relatedCases?: string[];
}

export const categories: Category[] = [
  {
    id: "health-gov",
    name: "受入地域の事例（健康分野／自治体）",
    nameShort: "健康・自治体",
    description: "自治体が主導する森林を活用した健康増進事業",
    color: "#2d6a4f",
    bgColor: "#d8f3dc",
  },
  {
    id: "health-private",
    name: "受入地域の事例（健康分野／民間事業者）",
    nameShort: "健康・民間",
    description: "民間事業者による森林を活用した健康サービス",
    color: "#1d7874",
    bgColor: "#d0f4de",
  },
  {
    id: "public-private",
    name: "受入地域の事例（公民連携）",
    nameShort: "公民連携",
    description: "官民が連携して進める森林サービス事業",
    color: "#4361ee",
    bgColor: "#e0e7ff",
  },
  {
    id: "forest-owner",
    name: "受入地域の事例（森林所有者等による新たな利用開拓）",
    nameShort: "森林所有者",
    description: "森林所有者による新しい森林活用ビジネス",
    color: "#7c4a03",
    bgColor: "#fff3cd",
  },
  {
    id: "corporate",
    name: "企業等の取組事例（健康分野）",
    nameShort: "企業の取組",
    description: "企業の健康経営における森林サービス活用",
    color: "#5f3dc4",
    bgColor: "#ede9fe",
  },
];

export function getCategoryById(id: CategoryId): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCasesByCategory(
  cases: CaseStudy[],
  categoryId: CategoryId
): CaseStudy[] {
  return cases.filter((c) => c.category === categoryId);
}





