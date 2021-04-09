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

      No nosso primeiro passo nós aprendemos os comandos para lidar com diretórios e arquivos via CLI,
	  entendemos os porquês do versionamento local e remoto, além disso lidamos com os comandos um a um
	  para criar e inicializar um repositório local e vinculamos à um repositório remoto no GitHub setando
	  as configurações globais básicas durante o processo.

  Agora, temos que começar pelos nossos amigos **`HTML`** e **`CSS`**. Entendemos que nenhum do dois são linguagens de programação, o **`HTML`** - HyperText Markup Language (Linguagem de Marcação de Hipertexto), é uma linguagem de marcação que usamos para construção de páginas na web. O **`CSS`**, temido e querido, é uma mão na roda para os desenvolvedores criarem interfaces e transformarem sites em sites responsivos. O Cascading Style Sheets - **`CSS`**, é lido na forma de cascata, ou seja, existe uma prioridade dos acontecimentos o que faz com que os comandos possam ser sobrescritos.

    Digamos que temos o seguinte documento 'CSS':

      - Comando 1 (CMD1);
      - Comando 2 (CMD2);
      - Comando 3 (CMD3);

    Se esses comandos são para modificar elementos ou atributos diferentes, não há muito problema,
	porém sendo eles para um mesmo elemento ou atributo. Vamos adicionar um elemento que será modificado
	pelos nossos comandos e seguir a lógica:

      - 'Elemento 1';

    Nosso documento será lido e executado:

      - O Comando 1 é executado, e altera o Elemento 1, retorna 'Elemento 1':CMD1;

    O 'Elemento 1' agora se tornou o elemento já alterado 'Elemento 1':CMD1;

      - O Comando 2 é executado, e altera o 'Elemento 1':CMD1, retorna 'Elemento 1':CMD2;

    Note que neste momento o Comando 2 sobrescreve o Comando 1, mas além da possibilidade de sobrescrever,
	o documento ainda pode 'quebrar' renderizando de uma forma não esperada pela sobrescrição;

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

      Além desse cálculo, temos a tag de prioridade !important, a qual vai desempatar e
	  define como principal comando independente de comandos anteriores ou seguintes.
	  Vale ainda ressaltar caso seja aplicado em um atributo que agregue sub-atributos,
	  os sub-atributos também serão sobrescritos, exemplo:

        - margin !important;
               ||
        - margin-left !important;
        - margin-right !important;
              ...;


  Retornando agora para o **`HTML`**, essa linguagem demanda uma estruturação. É muito importante que sejam bem pensadas as formatações para melhorar o SEO do site, e isso é feito com as tags semânticas.

  Dar sentido ao que está sendo construído auxilia também na acessibilidade e esses três pontos: estruturação, tags semânticas usadas corretamente e toques na acessibilidade fazem parte das boas práticas do desenvolvimento.

  - Estrutura:

    Começamos adicionando por padrão a tag `<!DOCTYPE html>` ela por si só já nos retorna uma base assim:

    ```html
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
    ```

    Chamamos de tag o `<!DOCTYPE html>`, mas o correto é chamar de `DTD` - `Document Type Declaration`. Atualmente não tem uma serventia, devido ao HTML5 usar padrões próprios e não herdados de suas versões anteriores, mas com o tempo e as atualizações futuras da linguagem o uso do `DTD` voltará a ter sentido como havia em versões do HTML4 ou xHTML.

    Começa a ficar mais claro a estrutura com as tags 'head' e 'body', mas dentro do 'body' adicionamos ainda as tags que a subdividem: 'header', 'main' e 'footer';

  - Tags Semânticas:

	`<header>` :

		  - Utilizado para representar o cabeçalho do documento ou da seção declarada;

	`<main>` :

		  - Define a posição do conteúdo principal;

	`<footer>` :

		  - Representa o final do documento ou da seção, o rodapé do de uma página web;

	`<nav>` :

		  - Outra tag bastante auto explicativa, a '<nav>' serve para declararmos uma
		  barra de navegação, geralmente contendo botões e/ou links, usados em conjunto
		  de tags para listas não ordenadas e links;

	`<article>` :

		  - Parecido com o '<section>', mas esse tem sentido completo (inicio, meio e fim),
		  muito comum para notícias em sites de notícias e blogs;

	`<section>` ou `<sect>` :

		  - Serve para representar uma seção, geralmente tópicos e seções são descritos com
		  essa tag com títulos;

	`<aside>` :

		  - Conhecida por ser uma tag de apoio ou complemento, muito usado para complementar
		  seções ou lateralizar elementos e informações;

	`<figure>` e `<figcaption>` :

		  - A tag '<figure>' é utilizada para especificar quando uma figura foi incluída e
		  a '<figcaption>' serve para incluírmos uma descrição à figura;

  Bem... Falamos sobre a importância da estrutura, sobre `DTD` e tags semânticas, mas o que seriam toques de acessibilidade ?!

  Vamos chegar agora nesse ponto. Durante a construção podemos adicionar "toques" chamo eles assim porque são como dicas. Quando adicionamos textos, titulos, textos"alt"(e você verá mais) esses são os "toques" que além de pemitirem que interpretadores.

  Seguem algumas dicas sobre boas práticas:

    - Faça descrição alternativa das imagens, pois assim os leitores de tela poderão identificá-las e descrevê-las para os usuários cegos.

    - Não use apenas cores para destacar uma informação. Isso ajudará pessoas com daltonismo, por exemplo, que não conseguiriam diferenciar os itens destacados apenas por cores.

    = Simplifique seu texto. Ao fazer isso, você facilita a leitura de pessoas com dislexia.

    - Crie áreas de clique maiores nos botões, isso ajudará usuários que não têm precisão nos cliques a acessar conteúdos específicos.

  Além de estarmos em compliance com a legislação brasileira que exige acessibilidade desde 2016 ( [LBI - Lei 13.146/2015](http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13146.htm) ), é importante **TODOS** possam entender as informações que queremos transmitir e que eles possam interagir com elas também!

  Contudo menos de 1% dos sites brasileiros estão em conformidade, o que impede com que pessoas consigam compreender o que queremos passar e se somente a questão social não for o suficiente, vamos além!

  Sendo um site menos acessível, este também possuirá um **SEO** pior, porque alguns interpretadores podem baixar o seu rank ou simplesmente ignorar se não possuir um `trending topic` - tópico de tendência.

  Por alto, quando lançamos um site na internet, os motores de busca, tais como google, bing além de indexadores de redes sociais, vão analisar o site e de acordo com certos critérios estipularão uma nota e isso fará com que a página fique mais ou menos aparente.

  Se quiser saber mais sobre **SEO**, dê uma olhada nesse [site - Resultados Digitais](https://resultadosdigitais.com.br/especiais/o-que-e-seo/).


## Nossa Primeira Página HTML

  Nesse momento, com os conhecimentos anteriores, vamos focar na construção de uma primeira página HTML.

  Começaremos digitando a `DTD` e devemos ter um documento assim:

  ```html
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
  ```
  Por padrão trocaremos sempre o `en` por `pt-br` para declararmos a linguagem da página web em que estamos trabalhando.

  Vamos pensar o `<head>` contém informações mais técnicas sobre a página e o título, mas o conteúdo fica onde?   .   .   .   No `<body>` !

  Beleza, então dado o body vamos dividi-lo:

  ```html
  <body>
    <header>
      <h1>Awesome Project<h1>
    </header>

    <main>
      <section>Esse é um paragráfo simples!</section>
    </main>

    <footer>
      <figure>
        <img src="qualquersite.com/imagem.jpg" alt="Imagem" />
      </figure>
    </footer>
  </body>
  ```

  Como podem ver acima usamos algumas tags que já foram citadas é importante lembrar sobre a indentação. Note que quando um elemento é posto dentro de outro esse fica visualmente dentro. É possível perceber que tags `<img/>` são `self closing`, ou seja, são diferentes de tags como a tag `<footer></footer>` que possue tags separadas para abertura e fechamento.

  **Importante:** Enquanto fazemos os códigos tente fazer no seu _VSCODE_, tente replicar as linhas que aparecem aqui! E escreva letra a letra, isso irá ajudar na fixação, tanto através da prática mecânica quanto do visual. Faça em seu arquivo criado `index.html` e clique no meio do arquivo, com o botão direito e ative o `Live Server` essa é a primeira extenção que usaremos, ele abrirá em seu navegador uma página web só que essa vem do seu próprio arquivo.
  ### **_Suas mãos fizeram o código hahahahha !!_**
