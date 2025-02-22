
const Table = ({children, tbodyData}) =>{  

return(
    <table className="p-1 border border-primary border-opacity-25 table table-striped table-hover"> 
        {children}

        <tbody className="hover-tbody-to-tr">
        {
            tbodyData.map( (item,index)=>{
                return(
                    <tr style={{backgroundColor : 'rgb(247, 193, 94)'}} className="can-hover" key={item.id}>
                        <td >{item?.name}</td>
                        <td >{item?.price}</td>
                        <td >{item?.features?.join(', ')}</td>
                        <td >{item?.description}</td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
)


}
export default Table;