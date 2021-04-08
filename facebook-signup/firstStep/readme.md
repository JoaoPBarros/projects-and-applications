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

## Sumário
- [Sobre o Computador](#sobre-o-computador)

- [Avisos Importantes](#avisos-importantes)

- [Criando e Iniciando um Repositório](#criando-e-iniciando-um-repositório)

	- [Hard Way](##'hard-way')
      - [O Início](###o-início)
      - [O Meio](###o-meio)
      - [E o Fim](###e-o-fim)

	- [Easy Way](##'easy-way')

- [Iniciando o repositório](#partiu-vscode)

- [Aprendizado First Step](#você-deve-estar-se-perguntando-o-que-eu-fiz)



  ## Sobre o computador:

  	As máquinas atuais básicas são bem suficientes na capacidade (minha sugestão é pelo menos i3 com 4gb ram),
  	mas algumas pessoas com computadores básicos com +15 anos, podem ter algum problema no geral, para esses
  	busquem utilizar o básico, sem muitas abas abertas no seu browser. Se tiver a possibilidade e tempo instale
  	uma distro Linux, existem várias e algumas até são quase tão simples quanto o windows.

    ###### Sistema operacional:

      Atualmente uso o Linux Mint, extremamente mais leve que o Windows, possui uma interface familiar
      para usuários de Windows, exige muito pouco do usuário final e comandos em CLI são praticamente
      desnecessários, qualquer coisa pode ser resolvida via o próprio gerenciador de pacotes.
      Além da distro Mint, aconselho a distro popOS, muito prática na questão de
      atualizações e gerenciamento de sistema.

      Caso você esteja usando Windows fique tranquilo, esse tutorial é independente de sistema operacional,
      somente aconselho que tome cuidado com o processamento e capacidade de programas abertos.

  ##### Programas e pacotes necessários e configurações básicos:

    Alguns dos sites contam um pouca da história e podem servir como fonte de consulta caso tenha algum
    erro não previsto nesse documento.

   ###### Github:

      O Github, não confunda com o Git, é uma rede social na qual podemos colocar nossos repositórios remotos,
      dessa forma protegemos nosso progresso e podemos trabalhar com diversos outros programadores em projetos
      open-source, privados e até comumente em empresas. Por isso crie uma conta, pois durante a instalação do
      Git precisará da senha e do usuário para setar as configurações básicas de seu repositório remoto.

   - [Site do Github](https://github.com/);

   	Se tiver curiosidade sobre projetos que já fiz, dê uma olhada no meu Github, talvez sirva de inspiração:

   - [Repositório](https://github.com/JoaoPBarros?tab=repositories);

   ###### Visual Studio Code ou VSCODE:

      O VSCODE é provavelmente o editor de código mais usado atualmente, existem outros, mas usaremos esse aqui
      e você pode baixa-lo aqui:

   - [VSCODE](https://code.visualstudio.com/);

    É tão prático que ele já reconhece seu sistema operacional e te passa a versão a ser baixada.
	No windows você aperta e foi, caso esteja usando o Linux e tenha alguma dificuldade:

   - [Em inglês, site oficial VSCODE](https://code.visualstudio.com/docs/setup/linux);

   - [Em português, blog Viva O Linux](https://www.vivaolinux.com.br/dica/Como-instalar-o-Visual-Studio-Code-no-Debian-10-Buster);

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

        - Dracula Official (depois de instalado você pode escolher entre dracula
        e dracula soft, eu prefiro o dracula);

   Caso queira algum auxilo para entender como instalar temos esse video, ele instala somente alguns dos componentes que usaremos e outros que não usaremo, mas para ser um guia de como instalar e ter um passo a passo será útil:

   [Video Auxiliar, Autor: Diego Fernandes](https://www.youtube.com/watch?v=c7P03kkrEG8&t=451s);

      Aos que forem ver o video, instalem e configurem o tipo de letra e outras modificações
	  visuais caso queiram, mas elas não influenciarão no nosso progresso.

   ###### Pacotes:

   Para prepararmos um ambiente para o desenvolvimento, devemos instalar alguns pacotes:

   - Git: [Blog GeekHunter, em português](https://blog.geekhunter.com.br/visual-studio-code-como-editor-do-git/);

   - Nodejs: [Site Oficial Nodejs, em inglês](https://nodejs.org/en/download/package-manager/)
   (Escolha a versão LTS, essa não é a versão mais nova, mas é a mais estável, o que facilitará bastante);

   - NPM: Quando instalamos o Nodejs, também instalamos o NPM - Node Package Manager.

  	Sobre nomenclaturas em comandos (fora do terminal):

        Por padrão, quando usarmos comandos, usarei a nomenclatura em inglês (e ao lado e dentro
		do parênteses a nomenclatura em português), quando aplicável.

	Caso tenha alguma dificuldade dá um google.

**Agora com nosso ambiente pronto, podemos dizer que "É hora de mostrar o poder do Megazord"**

![Megazord Formado](https://github.com/JoaoPBarros/projects-and-applications/blob/master/facebook-signup/public/gifs/megazordSequenciaAtivada.gif)

## Avisos Importantes

  Antes de começarmos atente-se a alguns sinais:

  - 'Aspas simples' e "Aspas duplas": toda vez que usarmos, no meio de uma explicação, uma certa nomenclatura que aconselho, para chamar sua atenção com palavras chave ou para casos de exemplificação, como o que será descrito mais abaixo quando criarmos um repositório;

  - Para mantermos como padrão ao final de uma `linha de código` escrita em JavaScript ou Css usaremos `;` , essa padronização é importante para evitarmos falhas desnecessárias;

  Além dessas, preste bastante atenção a indentação.


## Criando e iniciando um repositório

  - Criando um repositório

    Antes de começar você deve criar uma pasta onde vai salvar seus projetos e repositórios, prefira sempre pastas o mais próximo possível da raíz, evite colocar dentro de muitas pastas, em algum momento você aprenderá a mexer com `shell script` e para cada pasta que você precisar entrar precisará escrever um comando.

    **Importante já se acostumar com o formato de escrita camelCase.**

      - Camel Case é a prática de escrever palavras compostas ou frases de modo que cada palavra ou abreviatura no meio da frase comece com uma letra maiúscula.

      - Pascal Case é a prática de escrever palavras compostas ou frases de modo que cada palavra ou abreviatura comece com uma letra maiúscula.

      Funciona da seguinte maneira toda vez que for escrever uma palavra composta, uma frase ou uma expressão, exemplo: 'Essa é uma expressão' , 'João e Maria'.

      camelCase:

        Errado: 'Essa é uma expressão' , 'João e Maria';
        Correto: 'essaEUmaExpressao' , 'joaoEMaria';

      PascalCase:

        Errado: 'Essa é uma expressão' , 'João e Maria';
        Correto: 'EssaEUmaExpressao' , 'JoaoEMaria';

      Para esse projeto adotaremos o camelCase;

    Criando arquivos via CLI:

      Temos aqui dois caminhos e aí é contigo, os dois geram a mesma entrega, mas não tem o mesmo resultado.

      Mas como assim? Você me pergunta.. Existe um caminho que eu vou te ensinar a lidar com o básico dos comando de terminal, e há aquele que é só um copia e cola. Não há demérito nessa parte o objetivo é outro, mas se quer um aprendizado mais aprofundado, aconselho ir pelo `Hard Way`. Caso prefira o `Easy Way` siga direto.

    ### 'Hard Way'

      #### O Início

		  Se você escolheu esse caminho, meus parabéns!!
		  Ser uma pessoa que se aprofunda nos assuntos lhe trará muitos bons frutos!!

		  A partir de agora arregace as mangas porque lá vem código!!

		  Primeira coisa é definir: Windows ou Linux ? (Teremos os dois caminhos fique tranquilo);
		  Tendo optado pelo 'Hard Way' acredito que você realmente se interessa por programação,
		  então por favor, use um Linux!

		  - Mas Jota, porque raios preciso usar o Linux ?
		  - Mal ouvi falar sobre ele, e me parece algo tão inacabado (vulgo, trabalho mal feito)..

		  O OS Unix, ou Operational System Unix(Sistema Operacional Unix), lançado em 1969,
		  foi usado como base para os OSs que temos hoje. Esse ganhou muitas variações, sendo
		  usado até mesmo para, o que você já deve ter imaginado, macOS.
		  Isso mesmo o Senhor Jobs usou como base do que é usado nos MACs, por isso lidar com comandos
		  de terminal, ou em termologia de programadores comandos de shell, é basicamente igual entre
		  os dois sistemas.

		  O Linux é um sistema que por padrão é mais focado em CLI - Command Line Interface(Interface
		  de linha de comando) do que GUI - Graphical User Interface(Interface Gráfica de Usuário). Porém,
		  desse sistema, temos diversas variações das quais chamamos 'distros'(distribuições ou versões)
		  que foram customizadas e são ainda bastante customizáveis. Das distros mais comuns temos o Ubuntu,
		  que vem com o GNOME, um software open-source para o ambiente de trabalho e possui um excelente
		  gerenciador de pacotes facilitando a utilização de usuários mais novos. Atualmente eu uso como já
		  citei o Mint, mas recomendo também o popOS, esses são ainda mais simples. Para aqueles que quiserem
		  um desafio, aconselho o famoso ARCHlinux.

	  E para os mais empenhados, recomendo esse vídeo do Fábio Akita:

	  [O Guia DEFINITIVO de UBUNTU para Devs Iniciantes](https://www.youtube.com/watch?v=epiyExCyb2s);

	  (esse vídeo tem um nome bem apelativo, mas é bom);

    #### O meio:

       **Nota do Jota:**

          - tecla 'cmd' é aquela que possui a função de subir seu menu, em teclados normais é a tecla com o
          símbolo da Windows, se você estiver usando um sem a imagem ou um mac, fica sempre na mesma
		  posição do teclado.

       Primeiro abra seu terminal:

       - Windows:

          Nada no Windows funciona de primeira, hahahahhahaha! E não entenda isso como algo ruim, ele é feito
		  para funcionar sem que o usuário precise usar CLI;

          Para abrir o terminal utilize as teclas `cmd` + `R`;
          Ao aparecer o `Executar` digite: `powershell` , aperte `Enter`;

          Você deve visualizar uma janela com o fundo azul, alguns dizeres e a última linha escrita estará assim:

          	  'PS C:\>Users\seuNome>';

       - Linux:

          No geral o terminal fica aparente na área de trabalho, mas vamos usar o atalho, nada de mouse nesse momento;

          Para abrir o terminal utilize as teclas:

			  'Ctrl' + 'Alt' + 'T';

		  Você deve visualizar uma janela com o fundo preto e só verá um:

			  '~';


      _Lembre que as 'Aspas Simples' não fazem parte dos comandos, são somente para ênfase._

	  Independente do seu OS, os comandos são os mesmos!

      Agora vamos entender os comandos:

	- Lista arquivos e diretórios;

          'ls'

	- Lista TODOS os arquivos e diretórios (existem diretórios e arquivos que podem estar ocultos, assim todos ficam aparentes);

          'ls -a'

	- Cria um diretório com o nome newFolder, pode usar qualquer nome no lugar e desde que não ajam espaços no nome não haverá problemas;

          'mkdir newFolder'

	 - Muda para o diretório inicial;

           'cd'

	- Muda para o diretório nomeado como esseDiretório, novamente pode ser qualquer nome desde que o diretório exista;

		  'cd esseDiretório'

	- Muda para o diretório pai, como se voltasse uma camada.

		  'cd ..'

	- Mostra o caminho do diretório atual, muitos projetos tem as pastas nomeadas igualmente, esse comando é ótimo para ver se realmente está no lugar certo.

          'pwd'

	-  Copia o arquivo teste1 e nomeia a cópia como teste2;

           'cp teste1 teste2'

	- Remove o arquivo teste1;

          'rm teste1'

	- Remove o diretório oldFolder juntamente com tudo que tem dentro;

          'rmdir oldFolder'

	- Exibe o texto "Algum texto aqui" no terminal;

          'echo Algum texto aqui'

	- Cria um arquivo teste1.txt com o conteúdo "Algum texto aqui", lembrando que pode ser qualquer tipo de arquivo;

          'echo Algum texto aqui> teste1.txt'

	- Cria arquivos, pode criar simplesmente um ou vários de uma vez, com diferentes tipos e nomes, sempre deixando um espaço entre os arquivos;

          'touch teste1.txt teste2.txt teste3.txt'

    #### E o fim:

       Terminal aberto, bora para a solução!

       - Windows:

          Recapitulando, no nosso terminal você deve estar visualizando a linha:

         	 'PS C:\>Users\seuNome>';

          Vamos voltar os diretórios executando o comando `cd ..` até a pasta raíz, ou seja, até ficar somente:

           	 'PS C:\>';

          Vamos criar e entrar no diretório chamado `awesomeProjects` e depois criar e entrar no diretório chamado `projeto-1-DoBasicoAoInfinito`;

          Feito isso, você deve visualizar em seu terminal a seguinte linha:

           	 'PS C:\>awesomeProjects\projeto-1-DoBasicoAoInfinito\>';

          Agora, vamos criar e entrar no diretório chamado `src` e ao final deve visualizar a seguinte linha:

           	 'PS C:\>awesomeProjects\projeto-1-DoBasicoAoInfinito\src\>';

          Dependendo do tamanho da janela essa linha deve estar encurtada, mas com o comando já citado assim, você pode e deve conferir se o caminho está correto;

          E para finalizar vamos criar, de uma vez só, os arquivos:

           	 'index.html', 'styles.css', 'script.js';

          Quando usar o comando `ls`, você deve visualizar os 3 arquivos;

       - Linux:

          Recapitulando, no nosso terminal você deve estar visualizando a linha:

           	 '~';

          Vamos criar e entrar no diretório chamado `awesomeProjects` e depois criar e entrar no diretório chamado `projeto-1-DoBasicoAoInfinito`;

          Feito isso, você deve visualizar em seu terminal a seguinte linha:

           	 '~/awesomeProjects/projeto-1-DoBasicoAoInfinito';

          Agora, vamos criar e entrar no diretório chamado `src` e ao final deve visualizar a seguinte linha:

           	 '~/awesomeProjects/projeto-1-DoBasicoAoInfinito/src';

          Dependendo do tamanho da janela essa linha deve estar encurtada, mas com o comando já citado assim, você pode e deve conferir se o caminho está correto;

          E para finalizar vamos criar, de uma vez só, os arquivos:

           	 'index.html', 'style.css', 'script.js';

          Quando usar o comando `ls`, você deve visualizar os 3 arquivos;

      ### 'Easy Way'

        Se você optou por esse caminho, fique tranquilo, não afetará em nenhum pouco o processo
        de aprendizagem sobre a criação e sobre conhecimentos mais específicos e desejados em programação.
        No entanto, se você ficou com uma pulguinha atrás da orelha, volte e vá pelo 'Hard Way' , aprofunde o seu conhecimento.

       Abra o terminal através dos comandos

		 'Ctrl' + 'Shift' + '´' (Ctrl + Shift + Acento Agudo);

	   Clique no terminal e siga os passos, caso haja alguma divergêrncia siga a partir do seu OS.

       Dentro da pasta já, você deverá visualizar ao seu lado esquerdo uma aba de menu com ícones, uma outra com o nome da pasta e vazia.

       *Importante: Digite, se e somente se, estiver dentro das 'Aspas Simples' , caso queira copie e cole **SEM AS 'ASPAS SIMPLES'**.

            Para copiar ou colar em um terminal utilize os comandos 'Ctrl' + 'Shift' +
            'C' - para copiar ou 'V' - para colar. Fora do terminal, incluindo esse readme,
			o 'Ctrl' + 'C' e o 'Ctrl' + 'V' funcionam normalmente.

     - Windows ou Linux:

          Digite:


			'mkdir awesomeProjects' , aperte 'Enter';

			'mkdir projeto-1-DoBasicoAoInfinito' , aperte 'Enter';

			'mkdir src' , aperte 'Enter';

			'cd src' , aperte 'Enter';

			'touch index.html style.css script.js' , aperte 'Enter';


      Após isso você visualizará os 3 arquivos que serão criados dentro da pasta `src`;

      Caso queira se aprofundar em comandos via terminal, confira esses sites:

       - Windows: [Site DevContent, em português](https://devcontent.com.br/artigos/windows/principais-comandos-prompt);

       - Linux: [Site Alura, em português](https://www.alura.com.br/artigos/comecando-com-o-terminal-manipulando-arquivos-e-diretorios);

    ## Partiu VSCODE:

	Feche o terminal e abra o VSCODE,
        Clique em File (Arquivo);
          Open Folder (Abrir Pasta);
            Procure a pasta 'awesomeProjects';
              Selecione a pasta 'projeto-1-DoBasicoAoInfinito' e aperte OK;

      Deve ser visualizado ao lado esquerdo da tela a pasta e os arquivos.

      Agora sim!! Vamos abrir o terminal dentro do VSCODE, utilize o atalho:

        'Ctrl' + 'Shift' + 'J';

      Com isso você visualizará o terminal integrado na parte inferior do VSCODE, já no caminho do diretório atual selecionado ao abrir a pasta no próprio VSCODE.

      Vamos agora iniciar o repositório! Clique no terminal e escreva o seguinte comando:

		'git init';

      Esse comando vai fazer a inicialização do repositório local, ou seja, vamos poder versionar localmente nosso código, mas imagine o seguinte caso:

       ##### Caso Exemplo:

          Em uma empresa, você foi alocado na equipe de desenvolvimento e sua equipe recebeu uma
		  funcionalidade para melhorar o produto da empresa. Nesse momento seu gestor divide as
		  tarefas e cada um ficou com um pedaço da funcionalidade.

          Então você e mais um colega vão desenvolver um pedaço importante, você faz um pedaço
		  e envia o arquivo para o seu colega e ele faz o mesmo. Quando você recebe e salva o
		  arquivo em sua máquina com o mesmo nome, descobre que a funcionalidade foi alterada
		  e não está mais funcionando nem a parte que você fez. E agora ? Como que resolve ?
		  Como retornar a um ponto do desenvolvimento desse código ?

		  	Vamos as opções:

              - Pedir ajuda ao Doc ou Dr. Emmett Brown para usar DeLorean para voltar no tempo e
              impedir que o código seja modificado;

              - Desistir do desenvolvimento e ir vender sua arte na praia;

              - Lembrar que fez o versionamento local e que pode retornar a um ponto do código
              antes da modificação ter sido feita;

          Com certeza a primeira teria sido um solução interessante, mas a terceira é a viável
		  e uma realidade! O versionamento de códigos tem sua importância ai. Todas as vezes que
		  é necessário refatorar, aplicar um melhoria, ou como no caso acima, implementar uma
		  funcionalidade nova o versionamento de código impede que erros futuros atrapalhem
		  conquistas passadas, acelerando o progresso e evitando a necessidade de começar do zero.

       Complementar a solução do versionamento local, temos o versionamento remoto, o qual irá facilitar a transação de versões entre os desenvolvedores, auxilar a clarificar qual etapa está o progresso de uma determinada funcionalidade, simplificar as fusões de código ou 'merges' os quais são importantes para o desenvolver partes diferentes de um programa e ao subir o código, como o exemplo a seguir:

            Última versão estável: codigo fonte;

            Versão do desenvolvedor1: codigo fonte + implementação 1;
            Versão do desenvolvedor2: codigo fonte + implementação 2;

          Podemos igualmente como é feito com a união de conjuntos, somam-se as partes diferentes
		  e subitraem-se as igualdades, trazendo como resultado:

            Última versão estável: codigo fonte;

            Versão Mergeada(fundida): codigo fonte + implementação 1 + implementação 2;
            (fusão dos códigos dos desenvolvedores 1 e 2);

          Aos poucos vemos o sentido de certas práticas, e só podemos tratar com seriedade quando
		  entendemos o verdadeiro sentido de cada uma dessas práticas.

	![Fusão Goten e Trunks](https://github.com/JoaoPBarros/projects-and-applications/blob/master/facebook-signup/public/gifs/fusaoDBZ.gif)

      Voltando as linhas de código, após ter aplicado o comando `git init` , por curiosidade digite o comando que verifica TODOS os arquivos presentes na pasta (se você escolheu o `Easy Way`, a lista de comandos está na linha 166 deste documento);

	  *Importante: Lembre-se, se e somente se, estiver dentro das 'Aspas Simples' , caso queira copie e cole, mas **SEM AS 'ASPAS SIMPLES'**.

      Deve verificar que há algo surpreendente temos arquivos escondidos!! Esses arquivos são parte do funcionamento do Git, por isso não os altere.

      Agora vamos verificar se está tudo ok, utilize o comando:

         'git status'

      Você receberá uma mensagem de erro, dizendo que os arquivos `index.html`, `style.css` e `script.js` não estão sendo monitorados e para isso devemos adiciona-los aos arquivos a serem monitorados, execute o comando para adicionar:

    Podemos fazer de 3 formas:

       Uma das possibilidade é adicionar um de cada vez,

         'git add index.html'
         'git add style.css'
         'git add script.js'

       Assim também é possível, adicionando cada um dos arquivos, porém de uma única vez,

       	 'git add index.html style.css script.js'

       E a versão mais simples, que adiciona todo e qualquer arquivo não monitorado e/ou modificado sem precisar escrever um a um:

       	 'git add .'

      O ponto nesse caso significa que serão adicionados todos os arquivos que não estão sendo monitorados.

      Vamos prosseguir usando o comando que vai tirar uma foto(imagem) do seu progresso até agora, essa imagem vai ser utilizada caso precise comparar versões ou se precisar retornar o código até esse ponto.
      Importante lembrar que se você simplesmente tirar a foto, mas não escrever o que ela representa será pouco útil, porque o seu eu do futuro quando precisar saber o quanto tem de progresso ou o que está funcionando até o momento daquela imagem não o saberá.
      Pensando nisso você deve deixar um mensagem que seja concisa.
      Siga o processo para entender o código, mas não execute ainda:

	- Esse código é o que fará o registro, mas sem a mensagem;

   			'git commit'

	- O significado de -m é `mensage` ou seja esse deixará a mensagem, mas ainda precisamos adicionar qual mensagem você quer deixar;

       		'git commit -m'

	- Agora sim adicionamos uma mensagem que deve ser escrita dentro das "Aspas Duplas", sem acentuação e as "Aspas Duplas" devem estar na mensagem.

       		'git commit -m "Meu primeiro commit, um projeto incrivel está por vir"'

      Parabéns você já conseguiu fazer seu primeiro commit (é como desenvolvedores chamam o ato de registrar e deixar uma mensagem sobre o sobre o pregresso de um projeto. Esse ainda é verbificado e você ouvirá ao longo do tempo frases como "Já commitou o projeto?", "bora commitar.", "Uffa! Só falta commitar!")

      **Importante: Devo lembrar-te que o ato de adicionar existe em duas etapas:**

          Quando os arquivos não estão sendo monitorados devem ser adicionados usando o comando 'git add';

          Ao longo do seu progresso veremos que os arquivos que foram modificados também precisam ser adicionados,
		  mas em vez de adiciona-los através do 'git add' você pode adiciona-los juntamente ao commit e a mensagem,
		  adicioando a letra 'a' entre o '-' e o 'm';

      Vamos agora escrever uma frase e fazer aparecer no navegador!
      Abra o arquivo `index.html` no seu VSCODE, e vamos prosseguir escrevendo a seguinte linha de código:

          '<div>Você é uma pessoa INCRÍVEL e veja tudo que já fez até aqui!</div>';

      Mais para frente esclarecerei cada significado, mas agora, depois de seguir cada passo até aqui olhe para trás e veja quanta coisa foi feita.
      Prosseguindo, você agora dentro do arquivo HTML vai clicar com o botão direito do mouse na tela e clicar no 'Open with Live Server' (abrir com live server). Espere um pouquinho e pronto, colocou uma linha no ar.

      Bora jogar para o repositório remoto e ter a certeza que teremos o acesso caso qualquer problema físico ocorra;
      Lembra que pedi para criar uma conta no GitHub ? Está na hora de usá-la;

        	Entre no site e faça o login, terá que criar um repositório lá, procure pela opção "+ New repository".

        Na próxima página adicione o nome do seu repositório (exemplo: `projeto-1-DoBasicoAoInfinito` utilize o mesmo nome que usou na pasta de preferência). As configurações deixe padrão.

        	Feito isso encontre a opção "Create repository" e clique.

        A próxima página que abrir conterá as instruções básicas de utilização, neste momento não faça nada na página apenas anote a linha que contém conteúdo semelhante a descrita logo abaixo e deixe a página aberta no navegador.

          'git remote add origin https://github.com/seu-usuario/projeto-1-DoBasicoAoInfinito.git'

          Vamos precisar dela depois.

        A partir daqui vamos voltar para o terminal do VSCODE;
        Digite os seguintes comandos:

          'git config --global user.email email-que-usou-pra-criar-a-conta-do-github'
          'git config --global user.name nome-do-seu-usuario-de-login-do-github'
          'git config --global core.editor code --wait'

        Para conferirmos se está tudo ok, você deve digitar o seguinte comando:

          'git config --global -e';

        E deve verificar o seguinte código:

			[user]
				name = 'Nome do seu usuário no GitHub'
				email = 'Seu e-mail cadastrado no GitHub'

			[core]
				editor = code --wait

        Agora verifique se está no caminho do seu projeto, caso não tenha feito nada diferente você estará, vamos usar aquele comando que já haviamos salvo do GitHub:

          'git remote add origin https://github.com/seu-usuario/projeto-1-DoBasicoAoInfinito.git'

          'git status'

          'git push -u origin master'

      Nesses comandos que executamos acima:

	- É devido a estarmos enviando para um repositório remoto;

   		  'remote'

	- É porque estamos adicionando ele;

          'add'

	- É uma forma abreviada de '--upstream', ou seja, vamos setar de forma padrão a branch do código que faremos para não termos que digitar todas as vezes que formos executar outros comandos durante o projeto;

          '-u'

	- É por convenção escolhido, o “origin” do repositório remoto é um tipicamente guardados em uma máquina separada ou em um servidor centralizado e essa palavra aponta a origem do repositório naquele outro lugar. (caso queira entender melhor: [Site GitHowTo, em português](https://githowto.com/pt-BR/what_is_origin));

          'origin'

	- É o nome dado a branch a qual estamos, geralmente a branch principal é chamada de master ou de main, por sinal usaremos a master, ao longo da sua vida como desenvolvedor verá que existem projetos com dezenas, centenas de branchs. (caso queira saber mais sobre branchs dê uma olhada no seguinte site: [Site Git SCM, em inglês](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches));

          'master'



## Você deve estar se perguntando, o que eu fiz?

   Hmmm...

  		Bem basicamente você aprendeu comandos para verificar, criar, deletar,
		pastas e arquivos qualquer origem via CLI, sem necessidade de visualizar
		e por sinal até arquivos escondidos agora você consegue visualizar;

   Além disso,

		Configuramos um ambiente de desenvolvimento independente do seu sistema
		operacional que não deixará nenhum set da nasa mais qualificado em questão
		de ambiente para desenvolvermos;

   Ahhh não podemos esquecer é claro, talvez seja a incrível e impreterível habilidade

		Lidamos com o Git, TODO DESENVOLVEDOR PRECISA SABER E SABER BEM GIT.
		Programas quebram, códigos falham, pessoas erram, o Git é nossa máquina do tempo,
		dimensione isso para sua vida e vai entender a força que o Git tem no mundo do
		desenvolvimento.


### _Meus Parabéns!! Você chegou até aqui!!_

![Sincronizado](https://github.com/JoaoPBarros/projects-and-applications/blob/master/facebook-signup/public/gifs/rickDan%C3%A7andoComEquipeSincronizado.gif "Mission Accomplished")
