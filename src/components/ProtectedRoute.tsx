import { useKeycloak } from "@react-keycloak/web";

type Props = {
    children: JSX.Element
}

const ProtectedRoute = ({ children }: Props): JSX.Element | null => {

    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return isLoggedIn ? children : <div>Not logged in!</div>;
}

export { ProtectedRoute };
export default ProtectedRoute;