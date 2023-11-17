import Style from "./button.module.scss"
export default function Button({ children }) {
    return (
        <button className={Style.button}>
            {children}
        </button>
    )
}
