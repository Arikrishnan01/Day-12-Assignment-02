// let animalapi='https://cataas.com/api/cats'


// async function first_promises()
// {
//     let sample= await fetch(animalapi,{
//         "method": 'GET',
//         "content-type": 'application/; charset=UTF-8'
//     });
//     console.log(sample)

//     var getdata=await sample.json();
//     console.log(getdata);

//     for(let i of getdata)
//     {
//         var catid=i['_id']
//         console.log(catid)
//         console.log(i['tags'])
//     }

//     let listgroup=document.createElement('div');

// }


// first_promises()
let animalapi='https://cataas.com/api/cats'
let data=document.querySelector('.body_api');

let result=fetch(animalapi,{
    "method":"GET",
    "content-type":"application/json charset=UTF-B"
});
result
    .then((response)=>{
        let output=response
        output=response.json();
        return output
    })
    .then((output)=>{
        for(let i of output)
        {
            console.log(i);
            console.log(i['_id'])
            console.log(i['tags'])
            console.log(i['createdAt'])//updatedAt
            console.log(i['updatedAt'])
            var id_val=i['_id'];
            var tags_val=i['tags'];
            var create_At=i['createdAt'];
            var update_At=i['updatedAt'];
            var parent_data=document.createElement("div");
            var id_ele=document.createElement("h3");
            var tags_ele=document.createElement("h3");
            var create_ele=document.createElement("h3");
            var update_ele=document.createElement("h3");
            id_ele.innerHTML=`ID: ${id_val}`;            
            tags_ele.innerHTML=`TAGS: ${tags_val}`;
            create_ele.innerHTML=`CREATE_AT: ${create_At}`;
            update_ele.innerHTML=`UPDATE_AT: ${update_At}`;
            parent_data.append(id_ele);
            parent_data.append(tags_ele);
            parent_data.append(create_ele);
            parent_data.append(update_ele);
            data.append(parent_data);


        }

    })
