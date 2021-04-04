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

  Recaptulando:

    FirstStep:

      No nosso primeiro passo nós aprendemos os comandos para lidar com diretórios e arquivos via CLI, entendemos os porquês do versionamento local e remoto, além disso lidamos com os comandos um a um para criar e inicializar um repositório local e vinculamos à um repositório remoto no GitHub setando as configurações globais básicas durante o processo.

  Agora, temos que começar pelos nossos amigos **'HTML'** e **'CSS'**. Entendemos que nenhum do dois são linguagens de programação, o **'HTML'** - HyperText Markup Language (Linguagem de Marcação de Hipertexto), é uma linguagem de marcação que usamos para construção de páginas na web. O **'CSS'**, temido e querido, é uma mão na roda para os desenvolvedores criarem interfaces e transformarem sites em sites responsivos. O Cascading Style Sheets - **'CSS'**, é lido na forma de cascata, ou seja, existe uma prioridade dos acontecimentos o que faz com que os comandos possam ser sobrescritos.

    Digamos que temos o seguinte documento 'CSS':

      - Comando 1 (CMD1);
      - Comando 2 (CMD2);
      - Comando 3 (CMD3);

    Se esses comandos são para modificar elementos ou atributos diferentes, não há muito problema, porém sendo eles para um mesmo elemento ou atributo. Vamos adicionar um elemento que será modificado pelos nossos comandos e seguir a lógica:

      - 'Elemento 1';

    Nosso documento será lido e executado:

      - O Comando 1 é executado, e altera o Elemento 1, retorna 'Elemento 1':CMD1;

    O 'Elemento 1' agora se tornou o elemento já alterado 'Elemento 1':CMD1;

      - O Comando 2 é executado, e altera o 'Elemento 1':CMD1, retorna 'Elemento 1':CMD2;

    Note que neste momento o Comando 2 sobrescreve o Comando 1, mas além da possibilidade de sobrescrever, o documento ainda pode 'quebrar' renderizando de uma forma não esperada pela sobrecrição;

      - O Comando 3 é executado, e altera o 'Elemento 1':CMD2, retorna 'Elemento 1':CMD3;

  Novamente vemos a sobrescrição de comandos, mas digamos que na verdade os comandos tenham diferença de _especificidade_;

  Para entender melhor vamos ver o que define a especificidade e seus graus;

    A especificidade é calculada da seguinte forma:

      O seletor universal * é ignorado.
      a = número de IDs em cada seletor;
      b = número de seletores de classes, atributos e pseudoclasses;
      c = número de seletores de tipo e pseudoelementos;
      estilos inline (style="") tem mais prioridade que as 3 condições acima.
      Usando os valores a-b-c você obtém o índice de classificação (vale o maior):

        ┌── maior especificidade
      ┌─┴─┐
      1-0-3 > 0-15-5 > 0-4-2 > 0-0-10
                              └─┬──┘
         menor especificidade ──┘

      Além desse cálculo, temos a tag de prioridade !important, a qual vai desempatar e define como principal comando independente de comandos anteriores ou seguintes. Vale ainda ressaltar caso seja aplicado em um atributo que agregue sub-atributos, os sub-atributos também serão sobrescritos, exemplo:

        - margin !important;
               ||
        - margin-left !important;
        - margin-right !important;
              ...;


  Retornando agora para o **'HTML'**, essa linguagem demanda uma estruturação. É muito importante que sejam bem pensadas as formatações para melhorar o SEO do site, e isso é feito com as tags semânticas.

  Dar sentido ao que está sendo construído auxilia também na acessibilidade e esses três pontos: estruturação, tags semânticas usadas corretamente e toques na acessibilidade fazem parte das boas práticas do desenvolvimento.

  - Estrutura:

    Começamos adicionando por padrão a tag '<!DOCTYPE html>' ela por si só já nos retorna uma base assim:

      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>

      </body>
      </html>

    Começa a ficar mais claro a estrutura com as tags 'head' e 'body', mas dentro do 'body' adicionamos ainda as tags que a subdividem: 'header', 'main' e 'footer';

  - Tags Semânticas:

    '<header>':

      - Utilizado para representar o cabeçalho do documento ou da seção declarada;

    '<main>':

      - Define a posição do conteúdo principal;

    '<footer>':

      - Representa o final do documento ou da seção, o rodapé do de uma página web;

    '<nav>':

      - Outra tag bastante auto explicativa, a '<nav>' serve para declararmos uma barra de navegação, geralmente contendo botões e/ou links, usados em conjunto de tags para listas não ordenadas e links;

    '<article>':

      - Parecido com o '<section>', mas esse tem sentido completo (inicio, meio e fim), muito comum para notícias em sites de notícias e blogs;

    '<section>' ou '<sect>':

      - Serve para representar uma seção, geralmente tópicos e seções são descritos com essa tag com títulos;

    '<aside>':

      - Conhecida por ser uma tag de apoio ou complemento, muito usado para complementar seções ou lateralizar elementos e informações;

    '<figure>' e '<figcaption>':

      - A tag '<figure>' é utilizada para especificar quando uma figura foi incluída e a '<figcaption>' serve para incluírmos uma descrição à figura;