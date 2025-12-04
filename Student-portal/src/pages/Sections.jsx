import { useState } from "react";
import Table from "../components/ui/Table";
import Button from "../components/ui/Button";
import SectionModal from "../modals/SectionModal";
import ConfirmDialog from "../components/ConfirmDialog";

export default function Sections({
  sections,
  setSections,
  students,
  notify,
}) {
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
      setSections((prev) =>
        prev.map((s) =>
          s.id === editing.id ? { ...s, ...form } : s
        )
      );
      notify("success", "Section updated successfully");
    } else {
      setSections((prev) => [
        ...prev,
        { id: Date.now(), ...form },
      ]);
      notify("success", "Section created successfully");
    }
    setModalOpen(false);
  };

  const confirmDelete = (row) => {
    setConfirmData(row);
  };

  const handleDelete = () => {
    if (!confirmData) return;
    setSections((prev) =>
      prev.filter((s) => s.id !== confirmData.id)
    );
    notify("success", "Section deleted");
    setConfirmData(null);
  };

  const getTotalStudents = (sectionId) =>
    students.filter((s) => s.sectionId === sectionId).length;

  const rows = sections.map((s) => ({
    ...s,
    totalStudents: getTotalStudents(s.id),
  }));

  const columns = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "totalStudents", label: "Total Students" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="font-semibold text-lg">Sections</h2>
        <Button variant="primary" onClick={openCreate}>
          + Add New Section
        </Button>
      </div>

      <Table
        columns={columns}
        data={rows}
        onEdit={openEdit}
        onDelete={confirmDelete}
      />

      <SectionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editing}
      />

      <ConfirmDialog
        open={!!confirmData}
        onCancel={() => setConfirmData(null)}
        onConfirm={handleDelete}
        title="Delete Section"
        message="Are you sure you want to delete this section?"
      />
    </div>
  );
}
