# dio_codes

Diretório para acompanhamento da trilha SPTech de programador Back-End. Os arquivos de resumo dos cursos e projetos serão compartilhados aqui para facilitar a consulta dos mesmos.

## Conteúdo:
### git and github basics

#### 1- Passos para iniciar projeto e/ou contribuir com projeto já existente:
1.1- instale o git: https://git-scm.com/downloads

1.2- inicie o git: 
- crie um diretório para o repositório local
- dentro dele inicie o git: git init 

1.3- configure o git:
use git config --list para verificar os dados que foram configurados
- git config --global user.name "<nome do usuário">  
- git config --global user.email "<email do usuário">
- git config --global user.nickename "<nickename igual do github (servido remoto)>"

1.4- criar um projeto inicial 
checar se a origem já está cadastrada: git remote -v

1.5- clonar um projeto existente 

2- Conflitos no github
Antes de iniciar uma modificação, caso outras pessoas trabalhem com você, atualize seu repositório local:
- git pull

Caso exista um conflito, o git não aceitará seu merge, como resolver?
- usar git pull - isso vai trazer as auterações do repositório remoto para o repositório local. O git vai trazer do arquivo que está no repositório sem decidir qual modificação está correta, então vc deve abri-lo e verificar o que deve ser mantido. Feita esta correção faça o precesso de atualização novamente e suba o código no repositório remoto, tudo estará em ordem agora.
