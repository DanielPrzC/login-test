import React from "react";
import { Section } from "./styles";
import UploadForm from "../../UploadForm";

const Dashboard = () => {
  return (
    <Section>
      <h1>This is the Dashboard</h1>
      <UploadForm />
    </Section>
  );
};

export default Dashboard;
