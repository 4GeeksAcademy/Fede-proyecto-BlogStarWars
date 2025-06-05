import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardInfo } from "../components/CardInfo.jsx";

export const Info = () => {

    const { store, dispatch } = useGlobalReducer()

    return (

        <div>

            <div className=" m-5 ">
                <img
                    src="https://images.unsplash.com/photo-1587279484796-61a264afc18b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXJ3YXJzfGVufDB8fDB8fHww"
                    alt=""
                    className="banner-image"
                />
            </div>
            <div className=" m-5 ">
                <h2>Characters</h2>
                <div>
                    <CardInfo />
                </div>
            </div>
            <div className=" m-5 ">
                <h2>Planets</h2>
                <div>
                    <CardInfo />
                </div>
            </div>
        </div>
    );
}; 