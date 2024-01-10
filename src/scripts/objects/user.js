const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    userFllowers: '',
    userFloowing: '',
    repositories: [],
    events: [],

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.userFllowers = gitHubUser.followers;
        this.userFllowing = gitHubUser.following
    },

    setRepositories(repositories){
        this.repositories = repositories;
    },

    setEvents(eventsResponse){
        let eventosFiltrados = eventsResponse.filter(
            event => event.type === "PushEvent" || event.type === "CreateEvent");  
        this.events = eventosFiltrados;
    }
}

export { user }

