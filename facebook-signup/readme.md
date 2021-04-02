Introdução:

    Olá, meu nome é João Barros e vou dividir aprendizados valiosos sobre programação.

      Durante minha caminhada, tive várias dificuldades por não possuir base nenhuma prévia, e nesse documento
      eu vou dividir meu aprendizado e minha visão como pessoa desenvolvedora que aprendeu do básico.

      Venha com muita vontade, vou te ensinar das bases de lógica até conseguir fazer uma implementação digna
      de uma pessoa desenvolvedora Front-end. Esse projeto foi feito com muito carinho, faça bom proveito dele.

    Nesse Projeto iremos replicar a interface antiga do Facebook, e cada linha desse documento, vai
    dar o caminho das pedras com os conceitos básicos para você ter o melhor aproveitamento possível.

    Primeiro, vamos lembrar do porque fazer lendo e seguindo os passos ao invés de simplesmente fazer um vídeo guiando:

      - No vídeo você poderia simplesmente se desligar e copiar as linhas de código que eu digitaria;

      - Durante a leitura, você precisará ativamente estar compenetrado e buscando pelo o conhecimento;

      - E com um documento de texto, aqueles que não possuirem um computador tão potente ou uma internet tão boa,
      poderão ter acesso e aprendizado de qualidade com o máximo aproveitamento.


  Sobre o computador:

    As máquinas atuais básicas são bem suficientes na capacidade (minha sugestão é pelo menos i3 com 4gb ram),
    mas algumas pessoas com computadores básicos com +15 anos, podem ter algum problema no geral, para esses
    busquem utilizar o básico, sem muitas abas abertas no seu browser. Se tiver a possibilidade e tempo instale
    uma distro Linux, existem várias e algumas até são quase tão simples quanto o windows.

    Sistema operacional:

      Atualmente uso o Linux Mint, extremamente mais leve que o Windows, possui uma interface familiar
      para usuários de Windows, exige muito pouco do usuário final e comandos em CLI são praticamente
      desnecessários, qualquer coisa pode ser resolvida via o próprio gerenciador de pacotes.
      Além da distro Mint, aconselho a distro popOS, muito prática na questão de
      atualizações e gerenciamento de sistema.

      Caso você esteja usando Windows fique tranquilo, esse tutorial é independente de sistema operacional,
      somente aconselho que tome cuidado com o processamento e capacidade de programas abertos.

  Programas e pacotes necessários e configurações básicos:

    Alguns dos sites contam um pouca da história e podem servir como fonte de consulta caso tenha algum
    erro não previsto nesse documento.

   Github:

      O Github, não confunda com o Git, é uma rede social na qual podemos colocar nossos repositórios remotos,
      dessa forma protegemos nosso progresso e podemos trabalhar com diversos outros programadores em projetos
      open-source, privados e até comumente em empresas. Por isso crie uma conta, pois durante a instalação do
      Git precisará da senha e do usuário para setar as configurações básicas de seu repositório remoto.

   - Site do Github: https://github.com/ ;

   	Se tiver curiosidade sobre projetos que já fiz, dê uma olhada no meu Github, talvez sirva de inspiração:

   - Repositório: https://github.com/JoaoPBarros?tab=repositories ;

   Visual Studio Code ou VSCODE:

      O VSCODE é provavelmente o editor de código mais usado atualmente, existem outros, mas usaremos esse aqui
      e você pode baixa-lo aqui:

   - VSCODE: https://code.visualstudio.com/ ;

    É tão prático que ele já reconhece seu sistema operacional e te passa a versão a ser baixada.
	No windows você aperta e foi, caso esteja usando o Linux e tenha alguma dificuldade:

   - https://code.visualstudio.com/docs/setup/linux (em inglês) ;

   - https://www.vivaolinux.com.br/dica/Como-instalar-o-Visual-Studio-Code-no-Debian-10-Buster (em português) ;

    Aqui também é importante lembrar de algumas extensões que vamos precisar e usar, no menu ao seu lado esquerdo
    possui um ícone com quatro quadrados sendo que 3 estão juntos e 1 separado, clique nele;

    Você deve procurar e instalar as seguintes extensões:

        - EditorConfig for VS Code;
        - ESLint;
        - Color Highlight
        - GitLens-Git supercharged;
        - HTML CSS Support;
        - JavasScript (ES6) code snippets;
        - Live Server;
        - Material Icon Theme;
        - Bracket Pair Colorizer;
        - Auto Rename Tag;
        - Code Runner;
        - CodeMetrics;
        - CSS Peek;

      Esse passo é de extrema importância porque essas extensões auxiliaram nosso desenvolvimento durante todo o projeto.
      Cada uma delas tem um sentido e ao longo do desenvolvimento você verá a utilidade deles,
      para não me extender confie no que digo.

        Existe ainda, caso goste, eu por acaso uso, a extensão de tema:

        - Dracula Official (depois de instalado você pode escolher entre dracula e dracula soft, eu prefiro o dracula);

   Caso queira algum auxilo para entender como instalar temos esse video, ele instala somente alguns dos componentes que usaremos e outros que não usaremo, mas para ser um guia de como instalar e ter um passo a passo será útil:

   https://www.youtube.com/watch?v=c7P03kkrEG8&t=451s

        Aos que forem ver o video, instalem e configurem o tipo de letra e outras modificações visuais caso queiram, mas elas
	não influenciarão no nosso progresso.

   Pacotes:

   Para prepararmos um ambiente para o desenvolvimento, devemos instalar alguns pacotes:

   - Git: https://blog.geekhunter.com.br/visual-studio-code-como-editor-do-git/ (em português) ;

   - Nodejs: https://nodejs.org/en/download/package-manager/ (Escolha a versão LTS, essa não é a versão mais nova, mas é a mais estável, o que facilitará bastante) (em inglês) ;

   - NPM: Quando instalamos o Nodejs, também instalamos o NPM - Node Package Manager.

  	Sobre nomenclaturas em comandos (fora do terminal):

        Por padrão, quando usarmos comandos, usarei a nomenclatura em inglês (e ao lado e dentro do parênteses a nomenclatura
	em português), quando aplicável.

	Caso tenha alguma dificuldade dá um google.


Antes de começarmos atente-se alguns sinais:

  - 'Aspas simples' e "Aspas duplas": toda vez que usarmos, no meio de uma explicação, uma certa nomenclatura que aconselho, para chamar sua atenção com palavras chave ou para casos de exemplificação, como o que será descrito mais abaixo quando criarmos um repositório;

  - Para mantermos como padrão ao final de uma 'linha de código' escrita em JavaScript ou Css usaremos ';' , essa padronização é importante para evitarmos falhas desnecessárias;

  Além dessas, preste bastante atenção a indentação.
