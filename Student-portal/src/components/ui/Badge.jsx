export default function Badge({ grade }) {
  const map = {
    "A+": "bg-emerald-500",
    A: "bg-blue-500",
    B: "bg-violet-500",
    C: "bg-amber-500",
    D: "bg-red-400",
    F: "bg-red-600",
  };

  const color = map[grade] || "bg-gray-400";

  return (
    <span
      className={`${color} text-white text-xs px-2 py-1 rounded-full`}
    >
      {grade}
    </span>
  );
}
