// ══════════════════════════════════════════════════════════
// Renk paleti — tüm uygulama tarafından paylaşılır.
// Kategori renkleri WCAG AA kontrastı hedefler; tonlar
// hex alfa soneki (ör: P.accent + "22") ile inceltilir.
// ══════════════════════════════════════════════════════════
export const P = {
  bg: "#eef2ff",
  accent: "#6366f1",
  accentD: "#4338ca",
  accentL: "#e0e7ff",
  tri: "#f59e0b",
  triB: "#b45309",
  quad: "#3b82f6",
  quadB: "#1e40af",
  poly: "#8b5cf6",
  polyB: "#5b21b6",
  circ: "#10b981",
  circB: "#065f46",
  meas: "#ef4444",
  measB: "#991b1b",
  side: "#f5f4ff",
  sideB: "rgba(99,102,241,.1)",
  text: "#1e1b4b",
  sh: "rgba(99,102,241,.08)",
  shM: "rgba(99,102,241,.18)",
  header: "linear-gradient(135deg,#1e1b4b,#312e81)",
  grid: "rgba(99,102,241,.08)",
};

// Kategori başlıkları ve renk eşlemesi — SHAPE_DEF.cat bu anahtarları referanslar.
export const CAT_META = {
  triangle: { label: "Üçgenler", labelKu: "Sêgoşe", labelEn: "Triangles", color: P.tri, colorB: P.triB },
  quadrilateral: { label: "Dörtgenler", labelKu: "Çarhêl", labelEn: "Quadrilaterals", color: P.quad, colorB: P.quadB },
  polygon: { label: "Çokgenler", labelKu: "Pirhêl", labelEn: "Polygons", color: P.poly, colorB: P.polyB },
  circle: { label: "Daire ve Çember", labelKu: "Dayre û Xelek", labelEn: "Disk & Circle", color: P.circ, colorB: P.circB },
};

export const CAT_ORDER = ["triangle", "quadrilateral", "polygon", "circle"];
