// import './Comp1.module.scss' //全局引入

import styles from "./Comp1.module.scss";
const Comp1 = () => {
    return(
        <div className={styles.box}>
            <p>这是Comp1</p>
        </div>
    )

}
export default Comp1