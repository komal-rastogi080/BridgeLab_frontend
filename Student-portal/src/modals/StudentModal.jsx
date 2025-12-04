import { useState, useEffect } from "react";
import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

export default function StudentModal({
  open,
  onClose,
  onSave,
  sections,
  initialData,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    sectionId: "",
    enrollmentDate: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        email: initialData.email || "",
        sectionId: initialData.sectionId || "",
        enrollmentDate: initialData.enrollmentDate || "",
      });
    } else {
      setForm({
        name: "",
        email: "",
        sectionId: "",
        enrollmentDate: "",
      });
    }
    setErrors({});
  }, [initialData, open]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErr = {};
    if (!form.name.trim()) newErr.name = "Name is required";
    if (!form.email.trim()) newErr.email = "Email is required";
    return newErr;
  };

  const handleSubmit = () => {
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    onSave(form);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initialData ? "Edit Student" : "Add New Student"}
    >
      <div className="flex flex-col gap-3">
        <Input
          label="Name"
          required
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
          placeholder="Enter student name"
        />
        <Input
          label="Email"
          required
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
          placeholder="Enter email"
        />
        <Select
          label="Section"
          options={sections.map((s) => ({
            label: s.name,
            value: s.id,
          }))}
          value={form.sectionId}
          onChange={(e) => handleChange("sectionId", Number(e.target.value))}
        />
        <Input
          label="Enrollment Date"
          type="date"
          value={form.enrollmentDate}
          onChange={(e) =>
            handleChange("enrollmentDate", e.target.value)
          }
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
