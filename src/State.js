import { renderEntireTree } from "./render";

let state={
    profilePage:{
        posts:[
            {id:0, message:'Hi are you? ', like:121},
            {id:1, message:'Its my first post ', like:1},
            {id:2, message:'YOU ', like:15},
          ],
    },
    messagePage:{    
         dialogsData:[
             {id:0,name:'Toha'},
             {id:1,name:'Biba'},
             {id:2,name:'Trololo'},
      ],
         messagesData:[
             {id:0,message:'Hi'},
             {id:1,message:'I am Anton'},
             {id:2,message:'QQ'},
      ],},
    sidebar:[
        
    ]
}
export let addPost=(postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,
        likesCount:0,
    }
    state.profilePage.posts.push(newPost);
    renderEntireTree(state)
}
export default state; 