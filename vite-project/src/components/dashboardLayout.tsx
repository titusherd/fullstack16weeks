import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <div>Dashboard</div>
      <main>{children}</main>
    </div>
  );
};
