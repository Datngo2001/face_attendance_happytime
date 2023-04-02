import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export type Props = {
  defaultValues?: any;
  validationSchema?: any;
};

const useCRUDForm = ({ defaultValues, validationSchema }: Props) => {
  const { control, handleSubmit, setError, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return { control, handleSubmit, setError, reset };
};

export default useCRUDForm;
