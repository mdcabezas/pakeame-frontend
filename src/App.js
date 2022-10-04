import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Employees from "./pages/Employees";
import NewWork from "./pages/NewWork";
import Works from "./pages/Works";
import Items from "./pages/Items";
import NewItem from "./pages/NewItem";
import NewClient from "./pages/NewClient";
import NewEmployee from "./pages/NewEmployee";
import Customers from "./pages/Customers";
import NewCustomer from "./pages/NewCustomer";
import Roles from "./pages/Roles";
import NewRole from "./pages/NewRole";
import Departments from "./pages/Departments";
import NewDepartment from "./pages/NewDepartment";
import Skills from "./pages/Skills";
import NewSkill from "./pages/NewSkill";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import WorkDetail from "./pages/WorkDetail";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="works" element={<Works />} />
          <Route path="new-work" element={<NewWork />} />

          <Route path="clients" element={<Clients />} />
          <Route path="new-client" element={<NewClient />} />

          <Route path="items" element={<Items />} />
          <Route path="new-item" element={<NewItem />} />

          <Route path="customers" element={<Customers />} />
          <Route path="new-customer" element={<NewCustomer />} />

          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks-per-work/:workId" element={<WorkDetail />} />
          <Route path="new-task" element={<NewTask />} />

          <Route path="employees" element={<Employees />} />
          <Route path="new-employee" element={<NewEmployee />} />

          <Route path="roles" element={<Roles />} />
          <Route path="new-role" element={<NewRole />} />

          <Route path="departments" element={<Departments />} />
          <Route path="new-department" element={<NewDepartment />} />

          <Route path="skills" element={<Skills />} />
          <Route path="new-skill" element={<NewSkill />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
