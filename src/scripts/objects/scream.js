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

                    <p>
                    Repositorios: ${user.public_repos ?? 'Não publicou nenhum repositorio até o momento.'}
                    </p> 
                </div>
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