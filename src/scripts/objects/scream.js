const scream = {
    userProfile: document.querySelector(".profile-data"),

    renderUser(user){
       this.userProfile.innerHTML = `<div class="info">
                <img src="${user.avatarUrl}" alte="Foto de Perfil"/>
                <div class="data">
                    <h1>
                    ${user.name ?? 'Não possui nome cadastrado 😭'}
                    </h1>

                    <p>
                    ${user.bio ?? 'Não possui biografia cadastrada 😭'}
                    </p>

                    <div class="section follow">
                    <p>Seguidores: ${user.userFllowers} </p>
                    <p>Seguindo: ${user.userFllowing}</p>
                    </div>
                   
                </div>
            </div>`

        let eventsItens = '';
        user.events.forEach((event) => {
            if(event.payload.commits){
                eventsItens += `<li class="text">
                 ${event.repo.name} 
                 <span class="text-light">
                     ${event.payload.commits[0].message}
                 </span>        
                 </li>`
            }
        })

        this.userProfile.innerHTML += `
        <div class="section-event">
            <h2>Ultimas atualizações</h2>
            <ul>${eventsItens}</ul>
        </div>`
        

        let repositoriesItens = '';
        user.repositories.forEach(repo => repositoriesItens += 
        `<li>
            <a href="${repo.html_url}" target="_blank">${repo.name}>
            
                <div class="container-repo-square">

                    <p class="repo-square"> 
                        <span>🍴</span> <span>${repo.forks}</span>
                    </p>

                    <p class="repo-square"> 
                        <span>⭐</span> <span>${repo.stargazers_count}</span>
                    </p>
                    <p class="repo-square"> 
                        <span>👀</span> <span>${repo.watchers}</span>
                    </p>

                    <p class="repo-square"> 
                        <span>☕</span> <span>${repo.language}</span>
                    </p>
                    
                </div>
            </a>
        </li>`)

        console.log(user.repositories)
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += 
            `<div class="repositories section">
                <h2>Repositorios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`;    
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado. 😕</h3>"
    }
}

export { scream }