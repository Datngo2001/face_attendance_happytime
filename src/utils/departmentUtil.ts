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
    };

    result.push(node);

    node.children.push(
      ...createDepartmentSelectOptions(department.children_department)
    );
  });

  return result;
}
