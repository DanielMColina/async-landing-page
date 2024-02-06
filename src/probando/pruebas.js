import fetch from 'node-fetch';
const imputUrl = document.querySelector("#post-url");
// const button = document.querySelector('#button-get-users');
// const divUsers = document.querySelector('#users');




const url = `https://instagram130.p.rapidapi.com/media-info-by-url?url=${imputUrl.value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3700d8bd6emsh4236d00342c1a35p1810ffjsn5e32485970cb',
		'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	console.log(coment);
} catch (error) {
        console.error(error);
    }
        
const coments = result.edge_media_to_parent_comment;
const coment = coments.edges
const DataUsers = []
const users = []

coment.forEach( coment => {
    DataUsers.push(coment.node.created_at)
});

// const returnUser = ()=>{
//     DataUsers.forEach(user =>{
//         const userUrl=  `https://instagram130.p.rapidapi.com/username-by-id?userid=${user}`
//     })
// }
    const userUrl=  `https://instagram130.p.rapidapi.com/username-by-id?userid=${user}`
    let name;
    let imgUrl;
    const respuesta = await fetch (userUrl, options);
    const resultado = await respuesta.json();
    name = resultado.data.username;
    imgUrl = resultado.data.profile_pic_url;
    console.log(name, imgUrl)
       
    //     divUsers.innerHTML =+ `<div id="users">
    //     <img src="" alt="">
    //     <h3></h3>
    //     <p></p>
    // </div>`


button.addEventListener('click',()=>{

});


// console.log()