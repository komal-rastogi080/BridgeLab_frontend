import { useState } from "react";
import Table from "../components/ui/Table";
import Button from "../components/ui/Button";
import StudentModal from "../modals/StudentModal";
import ConfirmDialog from "../components/ConfirmDialog";

export default function Students({ students, setStudents, sections, notify }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [confirmData, setConfirmData] = useState(null);

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (row) => {
    setEditing(row);
    setModalOpen(true);
  };

  const handleSave = (form) => {
    if (editing) {
      setStudents((prev) =>
        prev.map((s) =>
          s.id === editing.id ? { ...s, ...form } : s
        )
      );
      notify("success", "Student updated successfully");
    } else {
      setStudents((prev) => [
        ...prev,
        { id: Date.now(), ...form },
      ]);
      notify("success", "Student created successfully");
    }
    setModalOpen(false);
  };

  const confirmDelete = (row) => {
    setConfirmData(row);
  };

  const handleDelete = () => {
    if (!confirmData) return;
    setStudents((prev) => prev.filter((s) => s.id !== confirmData.id));
    notify("success", "Student deleted");
    setConfirmData(null);
  };

  const getSectionName = (sectionId) =>
    sections.find((s) => s.id === sectionId)?.name || "-";

  const rows = students.map((s) => ({
    ...s,
    sectionName: getSectionName(s.sectionId),
  }));

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "sectionName", label: "Section" },
    { key: "enrollmentDate", label: "Enrollment Date" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="font-semibold text-lg">Students</h2>
        <Button variant="primary" onClick={openCreate}>
          + Add New Student
        </Button>
      </div>

      <Table
        columns={columns}
        data={rows}
        onEdit={openEdit}
        onDelete={confirmDelete}
      />

      <StudentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        sections={sections}
        initialData={editing}
      />

      <ConfirmDialog
        open={!!confirmData}
        onCancel={() => setConfirmData(null)}
        onConfirm={handleDelete}
        title="Delete Student"
        message="Are you sure you want to delete this student?"
      />
    </div>
  );
}
