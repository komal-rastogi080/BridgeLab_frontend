import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Notification from "./components/ui/Notification";

import Students from "./pages/Students";
import Sections from "./pages/Sections";
import Results from "./pages/Results";

import studentsData from "./data/students.json";
import sectionsData from "./data/sections.json";
import resultsData from "./data/results.json";

export default function App() {
  const [activeTab, setActiveTab] = useState("Students");

  const [students, setStudents] = useState(studentsData);
  const [sections, setSections] = useState(sectionsData);
  const [results, setResults] = useState(resultsData);

  const [notification, setNotification] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Tabs active={activeTab} setActive={setActiveTab} />

        <div className="mt-6 bg-white rounded-lg shadow p-5">
          {activeTab === "Students" && (
            <Students
              students={students}
              setStudents={setStudents}
              sections={sections}
              notify={showNotification}
            />
          )}
          {activeTab === "Sections" && (
            <Sections
              sections={sections}
              setSections={setSections}
              students={students}
              notify={showNotification}
            />
          )}
          {activeTab === "Results" && (
            <Results
              results={results}
              setResults={setResults}
              students={students}
              sections={sections}
              notify={showNotification}
            />
          )}
        </div>
      </main>

      <Notification data={notification} />
    </div>
  );
}
