import { useKeycloak } from "@react-keycloak/web";

const Profile = () => {

    const { keycloak } = useKeycloak();

    return (
        <h2 className="font-bold text-2xl">
            Welcome, &nbsp;
            <span className="font-semibold text-blue-800">
                {keycloak.tokenParsed?.preferred_username}
            </span>
        </h2>
    )
}

export { Profile };
export default Profile;