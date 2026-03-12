import Styles from "./Button.module.css";

type Props = {
  label: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, className, ...rest }: Props) => {
  return (
    <button className={`${Styles.button} ${className ?? ""}`} {...rest}>
      {label}
    </button>
  );
};

export default Button;
