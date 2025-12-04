import { useMemo, useState } from "react";
import Table from "../components/ui/Table";
import Button from "../components/ui/Button";
import ResultModal from "../modals/ResultModal";
import ConfirmDialog from "../components/ConfirmDialog";
import Badge from "../components/ui/Badge";

function getGrade(marks) {
  if (marks >= 90) return "A+";
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 50) return "D";
  return "F";
}

export default function Results({
  results,
  setResults,
  students,
  sections,
  notify,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [confirmData, setConfirmData] = useState(null);

  const [studentFilter, setStudentFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (row) => {
    setEditing(row);
    setModalOpen(true);
  };

  const handleSave = (form) => {
    const grade = getGrade(form.marks);
    if (editing) {
      setResults((prev) =>
        prev.map((r) =>
          r.id === editing.id ? { ...r, ...form, grade } : r
        )
      );
      notify("success", "Result updated successfully");
    } else {
      setResults((prev) => [
        ...prev,
        { id: Date.now(), ...form, grade },
      ]);
      notify("success", "Result created successfully");
    }
    setModalOpen(false);
  };

  const confirmDelete = (row) => {
    setConfirmData(row);
  };

  const handleDelete = () => {
    if (!confirmData) return;
    setResults((prev) =>
      prev.filter((r) => r.id !== confirmData.id)
    );
    notify("success", "Result deleted");
    setConfirmData(null);
  };

  const getStudentName = (id) =>
    students.find((s) => s.id === id)?.name || "-";

  const enriched = useMemo(
    () =>
      results.map((r) => ({
        ...r,
        studentName: getStudentName(r.studentId),
      })),
    [results, students]
  );

  const subjects = Array.from(
    new Set(results.map((r) => r.subject))
  ).filter(Boolean);

  const filtered = enriched.filter((r) => {
    if (studentFilter && r.studentId !== Number(studentFilter))
      return false;
    if (subjectFilter && r.subject !== subjectFilter) return false;
    return true;
  });

  const columns = [
    { key: "studentName", label: "Student Name" },
    { key: "subject", label: "Subject" },
    { key: "marks", label: "Marks" },
    {
      key: "grade",
      label: "Grade",
      render: (row) => <Badge grade={row.grade || getGrade(row.marks)} />,
    },
    { key: "examDate", label: "Exam Date" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <h2 className="font-semibold text-lg">Results</h2>
        <Button variant="primary" onClick={openCreate}>
          + Add New Result
        </Button>
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 border rounded-md p-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Student Filter
          </label>
          <select
            className="border rounded-md px-3 py-2 text-sm"
            value={studentFilter}
            onChange={(e) => setStudentFilter(e.target.value)}
          >
            <option value="">All Students</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Subject Filter
          </label>
          <select
            className="border rounded-md px-3 py-2 text-sm"
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
          >
            <option value="">All Subjects</option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Table
        columns={columns}
        data={filtered}
        onEdit={openEdit}
        onDelete={confirmDelete}
      />

      <ResultModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        students={students}
        initialData={editing}
      />

      <ConfirmDialog
        open={!!confirmData}
        onCancel={() => setConfirmData(null)}
        onConfirm={handleDelete}
        title="Delete Result"
        message="Are you sure you want to delete this result?"
      />
    </div>
  );
}
