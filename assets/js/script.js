const sobre = document.querySelector('#about');
const formulario = document.querySelector('#formulario');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
async function getApiGithub() {
  try{
        const dadosPerfil = await fetch(`https://api.github.com/users/loslanas`);
        const perfil = await dadosPerfil.json();

        let conteudo = `<img src="./assets/img/persona.jpg"
                    alt="Foto do perfil do Github">
            <article id="about_texto">
                <h2>Sobre mim</h2>
                <p>Sou um profissional multidisciplinar que une tecnologia, comunicação e dados para criar soluções inovadoras. Bacharel em Rádio, TV e Internet, com formação avançada em Ciências da Computação, desenvolvi habilidades para facilitar a comunicação entre equipes técnicas e clientes. Com experiência na maior emissora de TV da América Latina, aprimorei meu trabalho em equipe e organização de processos. Busco transformar dados em estratégias eficientes e impactantes. </p>
            
                <div id="about_github" class="flex about_github">
                    <a href="${perfil.html_url}" target="_blank"
                    class="botao">
                        GITHUB
                    </a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>
                </div>
            </article>        
            `;

            sobre.innerHTML += conteudo;


    }catch(error){
    console.error(error);
  }
}

formulario.addEventListener('submit', function(event){
    event.preventDefault()

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "Nome deve ter no mínimo 3 caracteres";
       campoNome.focus();
       return;
    }else{
              txtNome.innerHTML = "";
       }

       const campoEmail = document.querySelector("#email");
       const txtEmail = document.querySelector("#txtEmail");
   
       if(!campoEmail.value.match(emailRegex)){
           txtEmail.innerHTML = "Não é um email válido";
          campoEmail.focus();
          return;
       }else{
                 txtEmail.innerHTML = "";
          } 
          
          
          const campoAssunto = document.querySelector("#assunto");
          const txtAssunto = document.querySelector("#txtAssunto");
      
          if(campoAssunto.value.length < 5){
              txtAssunto.innerHTML = "O Assunto deve ter no mínimo 5 caracteres";
             campoAssunto.focus();
             return;
          }else{
                    txtAssunto.innerHTML = "";
             }   
             
             formulario.submit();
});

getApiGithub();