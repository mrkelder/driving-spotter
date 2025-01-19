import React, { createContext, useContext, useState } from "react";
import { Report } from "@/src/interfaces/Report";
import { mockReports } from "@/src/mockData/reports";

interface ReportsContextProps {
  reports: Report[];
  addReport: (report: Report) => void;
}

const ReportsContext = createContext<ReportsContextProps | undefined>(
  undefined
);

export const ReportsProvider: React.FC = ({ children }: any) => {
  const [reports, setReports] = useState<Report[]>(mockReports);

  const addReport = (report: Report) => {
    setReports((prevReports) => [...prevReports, report]);
  };

  return (
    <ReportsContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportsContext.Provider>
  );
};

export const useReports = () => {
  const context = useContext(ReportsContext);
  if (!context) {
    throw new Error("useReports must be used within a ReportsProvider");
  }
  return context;
};
