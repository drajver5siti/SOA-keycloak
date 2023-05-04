import { useKeycloak } from "@react-keycloak/web";

type Props = {
    children: JSX.Element
}

const ProtectedRoute = ({ children }: Props): JSX.Element | null => {

    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    if (!isLoggedIn) {
        keycloak.login();
    }

    return children;
}

export { ProtectedRoute };
export default ProtectedRoute;