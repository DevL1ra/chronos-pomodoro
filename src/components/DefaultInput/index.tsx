import styles from './styles.module.css';

type DefaultinputProps = {
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>; //interseção de tipos (tudo que um input normal teria

export function Defaultinput({ id, type, labelText, ...rest }: DefaultinputProps) {
    return (
        <>
        <label htmlFor={id}>{labelText}</label>
        <input className={styles.input} id={id} type={type} {...rest}/>
        </>
    );

}