import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


function handleAddProject(newProject) {
  setProjects((currentProjects) => [
    ...currentProjects,
    newProject
  ]);
}

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="app-container">
      <Header />

      <section className="add-project-section">
        <h2>Add Project</h2>
        <ProjectForm onAddProject={handleAddProject} />
      </section>

      <section className="projects-section">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <ProjectList projects={filteredProjects} />
      </section>
    </main>
  );
}

export default App;