import { createSlice } from "@reduxjs/toolkit";

export type PermissionState = {
  status: string;
  loading: boolean;
  listOfPermissions: Permission[];
  totalPages: number;
  totalPermissions: number;
};

export type Permission = {
  name: string; // Nhân viên, Admin, Super Admin, ...
  description: string;
  permissionGroups: FeatureGroup[];
};

export type FeatureGroup = {
  name: string; // Quản lý work space, ...
  featureAccess: FeatureAccess;
};

export type FeatureAccess = {
  feature: string; // Cập nhật thông tin workspace, ...
  access: AccessEnum;
};

export enum AccessEnum {
  WORKSPACE = "WORKSPACE",
  DEPARTMENT = "DEPARTMENT",
  USER = "USER",
}

const permissionsSlice = createSlice({
  name: "permission",
  initialState: {
    status: "fail",
    loading: false,
    listOfPermissions: [],
    permissionGroups: [],
    totalPages: 0,
    totalPermissions: 0,
  } as PermissionState,
  reducers: {},
});

export const {} = permissionsSlice.actions;
export default permissionsSlice;
