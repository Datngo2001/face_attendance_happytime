import { SelectBoxNode } from "components/TreeViewSelectBox";
import { Department } from "store/slices/Main/Departments/departmentsSlice";

export function createDepartmentSelectOptions(
  departmentTrees: Department[]
): SelectBoxNode[] {
  let result: SelectBoxNode[] = [];

  departmentTrees.forEach((department) => {
    let node: SelectBoxNode = {
      id: department.id,
      name: department.department_name,
      children: [],
      canSelect: true,
    };

    result.push(node);

    node.children.push(
      ...createDepartmentSelectOptions(department.children_department)
    );
  });

  return result;
}

export function createPositionSelectOptions(
  departmentTrees: Department[]
): SelectBoxNode[] {
  let result: SelectBoxNode[] = [];

  departmentTrees.forEach((department) => {
    department.children_position.forEach((position) => {
      result.push({
        id: position.id,
        name: position.position_name,
        children: [],
        canSelect: true,
      });
    });

    let node: SelectBoxNode = {
      id: department.id,
      name: department.department_name,
      children: [],
      canSelect: false,
    };

    result.push(node);

    node.children.push(
      ...createPositionSelectOptions(department.children_department)
    );
  });

  return result;
}
