import { useState, useEffect } from "react";
import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

export default function ResultModal({
  open,
  onClose,
  onSave,
  students,
  initialData,
}) {
  const [form, setForm] = useState({
    studentId: "",
    subject: "",
    marks: "",
    examDate: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        studentId: initialData.studentId || "",
        subject: initialData.subject || "",
        marks: initialData.marks ?? "",
        examDate: initialData.examDate || "",
      });
    } else {
      setForm({
        studentId: "",
        subject: "",
        marks: "",
        examDate: "",
      });
    }
    setErrors({});
  }, [initialData, open]);

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.studentId) e.studentId = "Student is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (form.marks === "") e.marks = "Marks are required";
    else if (Number(form.marks) < 0 || Number(form.marks) > 100)
      e.marks = "Marks must be between 0 and 100";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    onSave({ ...form, marks: Number(form.marks) });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initialData ? "Edit Result" : "Add New Result"}
    >
      <div className="flex flex-col gap-3">
        <Select
          label="Student"
          required
          options={students.map((s) => ({
            label: s.name,
            value: s.id,
          }))}
          value={form.studentId}
          onChange={(e) =>
            handleChange("studentId", Number(e.target.value))
          }
          error={errors.studentId}
        />
        <Input
          label="Subject"
          required
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          error={errors.subject}
          placeholder="Subject name"
        />
        <Input
          label="Marks"
          required
          type="number"
          min={0}
          max={100}
          value={form.marks}
          onChange={(e) => handleChange("marks", e.target.value)}
          error={errors.marks}
        />
        <Input
          label="Exam Date"
          type="date"
          value={form.examDate}
          onChange={(e) => handleChange("examDate", e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {initialData ? "Update" : "Create"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
