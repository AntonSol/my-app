

let store={
    _state:{
        profilePage:{
        posts:[
            {id:0, message:'Hi are you? ', like:121},
            {id:1, message:'Its my first post ', like:1},
            {id:2, message:'YOU ', like:15},
        ],
        newPostText:'zgarova'
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
        
       ]},
    getState(){
        return this._state
    },   
    renderEntireTree () {
      console.log('qqq')
    },
    
    
    addPost(){
        let newPost={
            id:5,
            message: this._state.profilePage.newPostText,
            likesCount:0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this.renderEntireTree(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText=newText;
        this.renderEntireTree(this._state)
    },
    subscribe (observer) {
        this.renderEntireTree=observer
    }

}




export default store; 
