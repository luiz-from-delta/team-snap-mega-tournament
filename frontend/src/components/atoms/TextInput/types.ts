export type TextInputProps = {
  isRequired?: boolean;
  name: string;
  onChange: React.ChangeEventHandler;
  placeholder: string;
  value?: string;
};
