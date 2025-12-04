export default function Tabs({ active, setActive }) {
  const tabs = ["Students", "Sections", "Results"];

  return (
    <nav className="flex gap-6 border-b pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`pb-2 -mb-px transition text-sm md:text-base ${
            active === tab
              ? "border-b-2 border-blue-600 font-semibold text-blue-700"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
