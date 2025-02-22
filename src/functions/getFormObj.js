/**
 * 
 * @param {Event} event 
 */
export default function getFormObj(event){
    event.preventDefault()
    if(event.target instanceof HTMLFormElement){

        const formData = new FormData(event.target)
        const formArry = Array.from(formData.entries())

        const formObj = formArry.reduce( (acc,item)=>{
                console.log(item)
            const [key, value] = item;

            acc[key] = value;
            return acc          
        }, {} )

        return formObj
    }


}