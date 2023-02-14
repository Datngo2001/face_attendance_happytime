import React from "react";
import { TableRow } from "./components/FeatureAccessTable";

export type ContextData = {
  tableRows: TableRow[];
  setTableRows: any;
};

export const PermissionFormContext = React.createContext<ContextData>(null);
