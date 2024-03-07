export interface InputProps {
  name: string;
  placeholder: string;
  value: string | number;
  onChangeFunction: React.ChangeEventHandler<HTMLInputElement>;
}
