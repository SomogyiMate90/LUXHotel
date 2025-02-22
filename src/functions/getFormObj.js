/**
 * 
 * @param {Event} event 
 */
export default function getFormObj(event){
    event.preventDefault()
    if(typeof event.target === HTMLFormElement){

        const formData = new FormData(event.target)
        const formArry = Array.from(formData.entries())

        const formObj = formArry.reduce( (acc,item)=>{
        
            const [key, value] = item;

            acc[key] = value;
            return acc          
        }, {} )

        return formObj
    }


}