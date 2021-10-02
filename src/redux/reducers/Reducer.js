const initialState=[{
    id:0,
    name:'naimul',
    number:'024444',
    email:'naimul@gmail.com'
},
{
    id:1,
    name:'Rafin',
    number:'0244455',
    email:'rafin@gmail.com'
},
]

const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Add':
            state=[...state,action.payload];
            return state
            case 'Update':
                const updatestate=state.map((contact)=>
                  contact.id===action.payload.id?action.payload:contact
                )
                state=updatestate
                return state
            case 'deleted':
            const filtercon=state.filter((contact)=>
                contact.id !== action.payload ? contact:null
            )
            state= filtercon
            return state
        default:
            return state
    }
}
export default Reducer;