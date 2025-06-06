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

    case 'toggle_favorite': // Esta acción aún maneja ambos tipos
            const item = action.payload;
            const itemType = action.itemType; // 'person' o 'planet'

            if (itemType === 'person') {
                const isPersonFavorite = store.peopleFavorites.some(fav => fav.uid === item.uid);
                let newPeopleFavorites;
                if (isPersonFavorite) {
                    newPeopleFavorites = store.peopleFavorites.filter(fav => fav.uid !== item.uid);
                } else {
                    newPeopleFavorites = [...store.peopleFavorites, item]; // Añadimos el item completo
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
                    newPlanetFavorites = [...store.planetFavorites, item]; // Añadimos el item completo
                }
                return {
                    ...store,
                    planetFavorites: newPlanetFavorites
                };
            }
            // Si el itemType no es reconocido, no hacemos nada o lanzamos un error
            return store;

    default:
      throw Error('Unknown action.');
  }    
}
