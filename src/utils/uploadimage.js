export const imageUpload = async (images) => {
    let imgArr = [];
    for(const item of images){
        const formData = new FormData()


  
          {/* formData.append("file", item)  */}
    

        if(item.camera){
            formData.append("file", item.camera)
        }else{
            formData.append("file", item)
        }
        

        formData.append("upload_preset", "hrl3z0nw")
        formData.append("cloud_name", "tunismorneg")

        const res = await fetch("https://api.cloudinary.com/v1_1/tunismorneg/upload", {
            method: "POST",
            body: formData
        })
        
        const data = await res.json()
        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }
    return imgArr;
}