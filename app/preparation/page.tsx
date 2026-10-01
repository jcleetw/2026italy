import {
  Car,
  CheckCircle,
  FirstAidKit,
  Suitcase,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

function PassportIcon({ size }: { size: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 256 256"
      width={size}
    >
      <rect
        height="192"
        rx="12"
        stroke="currentColor"
        strokeWidth="16"
        width="144"
        x="56"
        y="32"
      />
      <circle cx="128" cy="112" r="32" stroke="currentColor" strokeWidth="16" />
      <path
        d="M96 112h64M128 80c12 10 18 21 18 32s-6 22-18 32c-12-10-18-21-18-32s6-22 18-32ZM96 176h64"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  );
}

const items = [
  [PassportIcon, "證件與預訂", "護照、機票、住宿憑證"],
  [Suitcase, "行李清單", "衣物、轉接頭、攝影器材"],
  [Car, "自駕準備", "國際駕照、保險、ZTL 筆記"],
  [FirstAidKit, "健康安全", "常備藥、旅遊保險、緊急聯絡"],
] as const;

export default function Prep() {
  return (
    <main className="page fade">
      <p className="eyebrow text-[#69715b]">Before departure</p>
      <h1 className="serif text-5xl mt-3 mb-4">行前準備</h1>
      <p className="text-sm text-black/45 mb-10">
        距離出發，每一次勾選都讓旅程更近一點。
      </p>
      <div className="space-y-3">
        {items.map(([Icon, title, desc]) => (
          <div className="card p-5 flex gap-4 items-center" key={title}>
            <Icon size={26} />
            <div className="grow">
              <h2 className="serif text-lg">{title}</h2>
              <p className="text-xs text-black/45 mt-1">{desc}</p>
            </div>
            <CheckCircle size={22} className="text-black/20" />
          </div>
        ))}
      </div>
      <Link
        href="/achievements"
        className="block mt-10 p-6 bg-[#283224] text-white"
      >
        <span className="eyebrow">Also explore</span>
        <span className="serif text-2xl block mt-2">旅程成就 →</span>
      </Link>
    </main>
  );
}
