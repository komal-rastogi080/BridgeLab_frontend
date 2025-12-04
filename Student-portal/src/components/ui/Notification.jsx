export default function Notification({ data }) {
  if (!data) return null;

  const { type, message } = data;
  const base =
    "fixed z-50 top-4 right-4 px-4 py-2 rounded-md shadow text-sm flex items-center gap-2";
  const styles =
    type === "error"
      ? "bg-red-50 text-red-700 border border-red-200"
      : "bg-green-50 text-green-700 border border-green-200";

  return (
    <div className={`${base} ${styles}`}>
      <span className="font-semibold">
        {type === "error" ? "Error" : "Success"}
      </span>
      <span>{message}</span>
    </div>
  );
}
