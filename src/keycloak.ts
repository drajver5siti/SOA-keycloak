import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: '',
    realm: 'test',
    clientId: 'test'
});

export default keycloak;