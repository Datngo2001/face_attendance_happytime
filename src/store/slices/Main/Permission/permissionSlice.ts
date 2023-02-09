import { createSlice } from "@reduxjs/toolkit";

export type PermissionState = {
  status: string;
  loading: boolean;
  listOfPermissions: Permission[];
  totalPages: number;
  totalPermissions: number;
};

export type Permission = {
  no: number;
  _id: string;
  name: string; // Nhân viên, Admin, Super Admin, ...
  description: string;
  permissionGroups: FeatureGroup[];
};

export type FeatureGroup = {
  _id: string;
  name: string; // Quản lý work space, ...
  featureAccess: FeatureAccess[];
};

export type FeatureAccess = {
  _id: string;
  feature: string; // Cập nhật thông tin workspace, ...
  access: AccessEnum;
};

export enum AccessEnum {
  WORKSPACE = "WORKSPACE",
  DEPARTMENT = "DEPARTMENT",
  USER = "USER",
}

// TEST DATA
const listOfPermissions: Permission[] = [
  {
    _id: "1",
    no: 1,
    name: "Nhân viên",
    description: "Quyền của nhân viên cơ bản",
    permissionGroups: [],
  },
  {
    _id: "2",
    no: 2,
    name: "Admin",
    description: "Quyền admin của hệ thống",
    permissionGroups: [],
  },
  {
    _id: "3",
    no: 3,
    name: "Super Admin",
    description: "Vai trò có toàn bộ quyền",
    permissionGroups: [],
  },
];
// ************************************************

const permissionsSlice = createSlice({
  name: "permission",
  initialState: {
    status: "fail",
    loading: false,
    listOfPermissions: listOfPermissions,
    permissionGroups: [],
    totalPages: 1,
    totalPermissions: 0,
  } as PermissionState,
  reducers: {},
});

export const {} = permissionsSlice.actions;
export default permissionsSlice;
