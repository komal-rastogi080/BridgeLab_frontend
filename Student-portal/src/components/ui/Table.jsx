export default function Table({
  columns,
  data,
  loading,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-3 py-2 border-b text-left font-semibold text-gray-700"
              >
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th className="px-3 py-2 border-b text-left font-semibold text-gray-700">
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {loading && (
            <tr>
              <td
                colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                className="px-3 py-4 text-center text-gray-500"
              >
                Loading...
              </td>
            </tr>
          )}

          {!loading && data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                className="px-3 py-4 text-center text-gray-500"
              >
                No records found
              </td>
            </tr>
          )}

          {!loading &&
            data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#f9fafb] transition-colors"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-3 py-2 border-b text-gray-800"
                  >
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}

                {(onEdit || onDelete) && (
                  <td className="px-3 py-2 border-b">
                    <div className="flex gap-2">
                      {onEdit && (
                        <button
                          className="text-xs text-blue-600 hover:underline"
                          onClick={() => onEdit(row)}
                        >
                          Edit
                        </button>
                      )}
                      {onDelete && (
                        <button
                          className="text-xs text-red-600 hover:underline"
                          onClick={() => onDelete(row)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
