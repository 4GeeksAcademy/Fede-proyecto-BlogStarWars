export const initialStore=()=>{
  return{
    people:[],
    planets:[],
    peopleFavorites: [], 
    planetFavorites: [] 
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'load_people':
      console.log("loading people")
      return {...store, people:action.payload};

    case 'load_planets': 
            console.log("Acción: Cargando planetas en el store...");
            return {
                ...store,
                planets: action.payload
            };

    case 'toggle_favorite': 
            const item = action.payload;
            const itemType = action.itemType;

            if (itemType === 'person') {
                const isPersonFavorite = store.peopleFavorites.some(fav => fav.uid === item.uid);
                let newPeopleFavorites;
                if (isPersonFavorite) {
                    newPeopleFavorites = store.peopleFavorites.filter(fav => fav.uid !== item.uid);
                } else {
                    newPeopleFavorites = [...store.peopleFavorites, item]; 
                }
                return {
                    ...store,
                    peopleFavorites: newPeopleFavorites
                };
            } else if (itemType === 'planet') {
                const isPlanetFavorite = store.planetFavorites.some(fav => fav.uid === item.uid);
                let newPlanetFavorites;
                if (isPlanetFavorite) {
                    newPlanetFavorites = store.planetFavorites.filter(fav => fav.uid !== item.uid);
                } else {
                    newPlanetFavorites = [...store.planetFavorites, item]; 
                }
                return {
                    ...store,
                    planetFavorites: newPlanetFavorites
                };
            }
            
            return store;

    default:
      throw Error('Unknown action.');
  }    
}
