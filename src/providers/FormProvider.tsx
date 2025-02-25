import { ReactNode } from "react";
import { FormProvider as RHFProvider, useForm } from "react-hook-form";

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const methods = useForm(); // Správa formuláře

  return <RHFProvider {...methods}>{children}</RHFProvider>;    
}
