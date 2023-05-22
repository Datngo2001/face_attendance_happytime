import { api } from "config/api";

export type LabelResult = {
  id: string;
  label: string;
};

export function getEmployeeNames(ids: string[]) {
  var promises = ids.map((id) =>
    api.get(`api/agent/get/${id}`).then(
      (res: any) =>
        ({
          id: res.payload._id,
          label: res.payload.name,
        } as LabelResult)
    )
  );
  return Promise.all(promises);
}
