import styles from "./TableItem.module.css"

function TableItem({singleData, deleteFunction}){
    

    return(
        <tr>
                <td className={styles.myTable}>{singleData.name}</td>
                <td>{singleData.age}</td>
                <td>{singleData.department}</td>
                <td>{singleData.salary}</td>
                <td>{singleData.maritalStatus ? "Married" : "Single"}</td>
                <td><button name={singleData.id} onClick={ deleteFunction }>X</button></td>
        </tr>
    )
}

export default TableItem