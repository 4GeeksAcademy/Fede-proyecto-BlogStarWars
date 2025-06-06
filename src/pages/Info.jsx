import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardInfo } from "../components/CardInfo.jsx";
import { useEffect } from "react";
import { HorizontalScroll } from "../components/HorizontalScroll.jsx";
import { PeopleInfo } from "../components/PeopleInfo.jsx";
import { PlanetsInfo } from "../components/PlanetsInfo.jsx";

export const Info = () => {

    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        loadPeople();
        loadPlanets();
    }, [])


    const loadPeople = async () => {
        try {
            let response = await fetch("https://www.swapi.tech/api/people");
            if (!response.ok) {
                console.error(`Error al cargar personas: ${response.status} - ${response.statusText}`);
                return;
            }
            let data = await response.json();
            const InfoDetailPeople = data.results; // Esta es la lista resumida de la API

            // Ahora, para cada persona resumida, haremos una llamada para obtener sus detalles
            const detailedPeoplePromises = InfoDetailPeople.map(async (person) => {
                const detailResponse = await fetch(person.url); // Usamos la URL individual del personaje
                if (!detailResponse.ok) {
                    console.error(`Error al cargar detalles de ${person.name}: ${detailResponse.status} - ${detailResponse.statusText}`);
                    return { ...person, detailsError: true }; // Marcamos que hubo un error
                }
                const detailData = await detailResponse.json();
                return { ...person, ...detailData.result.properties }; // Combinamos la data resumida con los detalles
            });

            // Esperamos a que todas las promesas de detalles se resuelvan
            const detailedPeople = await Promise.all(detailedPeoplePromises);

            // Hacemos dispatch con el array de personas detalladas
            dispatch({ type: "load_people", payload: detailedPeople });

        } catch (error) {
            console.error("Error general al cargar personas o sus detalles:", error);
        }
    };

    const loadPlanets = async () => {
        try {
            let response = await fetch("https://www.swapi.tech/api/planets");
            if (!response.ok) {
                console.error(`Error al cargar lista de planetas: ${response.status} - ${response.statusText}`);
                return;
            }
            let data = await response.json();
            const summaryPlanets = data.results;

            const detailedPlanetsPromises = summaryPlanets.map(async (planet) => {
                const detailResponse = await fetch(planet.url);
                if (!detailResponse.ok) {
                    console.error(`Error al cargar detalles de ${planet.name}: ${detailResponse.status} - ${detailResponse.statusText}`);
                    return { ...planet, detailsError: true };
                }
                const detailData = await detailResponse.json();
                // La API de swapi.tech para detalles individuales usa 'result.properties'
                return { ...planet, ...detailData.result.properties };
            });

            const detailedPlanets = await Promise.all(detailedPlanetsPromises);
            dispatch({ type: "load_planets", payload: detailedPlanets }); // ¡Dispatch con el nuevo tipo!

        } catch (error) {
            console.error("Error general al cargar planetas o sus detalles:", error);
        }
    };

    const handleToggleFavorite = (item, itemType) => {
        dispatch({ type: "toggle_favorite", payload: item, itemType: itemType });
    };



    return (

        <div>

            <div className="">
                <img
                    src="https://images.unsplash.com/photo-1587279484796-61a264afc18b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXJ3YXJzfGVufDB8fDB8fHww"
                    alt=""
                    className="banner-image"
                />
            </div>
            <div className="m-5">
                <h2>Characters</h2>
                <HorizontalScroll>
                    <div className="d-flex flex-row flex-nowrap">
                        {store.people && store.people.length > 0 ?
                            store.people.map((person) => (
                                <CardInfo
                                    key={person.url} // Es crucial usar una 'key' única para cada elemento en una lista
                                    title={person.name} // Usamos el nombre de la persona como título de la tarjeta
                                    url={`/person/${person.uid}`} // Asumiendo que SWAPI proporciona un uid para cada persona
                                // Puedes añadir una imageUrl aquí si SWAPI la proporcionara o si tienes una lógica para mapearlas
                                    onToggleFavorite={() => handleToggleFavorite(person, 'person')}
                                // ¡CAMBIO CLAVE AQUÍ! Comprueba en peopleFavorites
                                isFavorite={store.peopleFavorites.some(fav => fav.uid === person.uid)}
                                >
                                    <PeopleInfo person={person} />
                                </CardInfo>
                            )) : (
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>)}
                    </div>
                </HorizontalScroll>
            </div>
            <div className="m-5">
                <h2>Planets</h2>
                <HorizontalScroll>
                    <div className="d-flex flex-row flex-nowrap">
                        {store.planets && store.planets.length > 0 ?
                            store.planets.map((planet) => (
                                <CardInfo
                                    key={planet.url} 
                                    title={planet.name} 
                                    url={`/planet/${planet.uid}`} 
                                    onToggleFavorite={() => handleToggleFavorite(planet, 'planet')}
                                // ¡CAMBIO CLAVE AQUÍ! Comprueba en planetFavorites
                                isFavorite={store.planetFavorites.some(fav => fav.uid === planet.uid)}
                                >
                                    <PlanetsInfo planet={planet} />
                                </CardInfo>
                            )) : (
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>)}
                    </div>
                </HorizontalScroll>
            </div>
        </div>
    );
}; 