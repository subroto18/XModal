type Props = {
  type: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, id, name, onChange }: Props) => {
  return <input onChange={onChange} type={type} id={id} name={name} required />;
};

export default Input;
