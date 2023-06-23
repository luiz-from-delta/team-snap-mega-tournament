export type FormFieldProps = {
  isRequired?: boolean;
  label: string;
  name: string;
  onChange: React.ChangeEventHandler;
  placeholder: string;
  value?: string;
};
