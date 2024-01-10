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
        user.repositories.forEach(repo => repositoriesItens += `<li>
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </li>`)
        
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