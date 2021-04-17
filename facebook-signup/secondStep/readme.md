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

  Se você chegou nesse documento sem passar pelo FirstStep, aconselho a retornar e vê-lo, mesmo que seja um programador experiente, usamos algumas configurações específicas e que serão parte crucial para o desenvolvimento. [Vá para o FirstStep clicando aqui!](https://github.com/JoaoPBarros/projects-and-applications/tree/master/facebook-signup/firstStep)

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

<br>

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

  Vamos pensar, o `<head>` contém informações mais técnicas sobre a página e o título, ok, mas o conteúdo fica onde?   .   .   .   No `<body>` !

  Beleza, então dado o `<body>` vamos dividi-lo:

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

  Como podem ver acima usamos algumas tags que já foram citadas para já irmos nos acostumando e fixando.

  É importante lembrar sobre a indentação, note que quando um elemento é posto dentro de outro esse fica visualmente dentro. É possível perceber que tags `<img/>` são `self closing`, ou seja, são diferentes de outras tags, como a tag `<footer></footer>` que possue tags separadas para abertura e fechamento.

  **Importante:** Enquanto fazemos os códigos tente fazer no seu _VSCODE_, faça do seu jeito ou tente replicar as linhas que aparecem aqui! Escreva letra a letra, isso irá ajudar na fixação, tanto através da prática mecânica quanto do visual. Faça em seu arquivo criado `index.html` e clique no meio do arquivo, com o botão direito e ative o `Live Server` essa é a primeira extenção que usaremos, ele abrirá em seu navegador uma página web só que essa vem do seu próprio arquivo.
  ### **_Suas mãos fizeram o código hahahahha !!_**
<br>

  ## Tags Semânticas - Parte 2 :dizzy_face:


  Nesse momento que já vimos os conceitos básicos vamos passar para a semântica em textos. Sim, sim existe e é **EXTREMAMENTE IMPORTANTE**, eu consideraria a semântica de texto mais importante até do que a estrutural, um dos motivos é que independente de um indexador conseguir usar ou achar a página da web, essa pode ser para algum sistema interno de empresas ou com outros propósitos e o ato de marcar de forma semanticamente correta é o que chamará atenção daquele que está vendo/lendo.

  ### Semântica a nível textual:

  `<a>` :

      A função da tag é descrever um link, em geral conectando documentos ou páginas do próprio site. É usado para documentos que tenha assunto em comum.

  `<em>` :

      Essa por sinal representa o itálico, irá trazer ênfase ao texto em um dado momento que queira separar ou enfatizar um pedaço.

  Importante não confundir com a tag `<i>` a qual também apresenta a mesma ênfase visual, o itálico, mas essa é usada para um texto que é iniciado em _prosa_, como uma palavra estrangeira, pensamentos de um personagem ficcional, ou quando o texto se refere á definição de uma palavra em vez de representar seu significado semântico.

  Exemplo:

  - Versão escrita `html`:

    ```html
    <p>
      <i>Canidae</i> é uma família de mamíferos da ordem Carnivora que engloba cães, lobos, chacais, coiotes e raposas.<br>É composto por 35 espécies distribuídas por todos os continentes com exceção da Antártica.
    <p>
    ```

  - Versão interpretada do código:

    <p>
      <i>Canidae</i> é uma família de mamíferos da ordem Carnivora que engloba cães, lobos, chacais, coiotes e raposas.<br>É composto por 35 espécies distribuídas por todos os continentes com exceção da Antártica.
    <p>

  Duas questões podem ser notadas:

  - A palavra Canidae está em _itálico_;
  - Existe uma quebra de linha mesmo o texto sendo continuo.

  A quebra é devido a tag `<br>` _óbvio que o motivo dessa tag é porque o brasileiro vive quebrando as regras e dando jeitinho para tudo_ hahahhahaha. **Brincadeira**, o `<br>` vem de _break line_ que seria o sentido de quebrar a linha e é exatamente isso que ele faz, essa não é uma tag semântica, mas quando falamos de textos precisamos falar dela. Essa tag é importante em textos onde a quebra de linha é importante tais como endereços e versos musicais.

  **Nota:** Não use o `<br>` em vão hahahhaha ! É comum acharmos que é uma tag que ajuda no espaçamento entre linhas, mas devemos usar a tag `<p>` ou propriedades de **`CSS`**.

  `<strong>` :

    Similar a tag <em> essa também é utilizada para dar ênfase textual, mas essa é o faz com o impacto visual 'negrito'.

  `<q>` e `<cite>` :

    Essa é bem auto explicativa, são tags para citar, quando estamos usando palavras de outros autores. No geral se usa o <cite> em conjunto com o <q>, o <cite> contendo a origem e o <q> o conteúdo retirado, no entanto também achamos citações diretas com o conteúdo dentro do <cite> e a fonte escrita por extenso.

  `<time>` :

    Essa é uma tag para representar datas, podemos ainda adicionar o atributo 'datetime' para escrever a data de forma padrão.
  ```html
    <time datetime="2021-04-08">08/04</time>
  ```
_Use esse material para consulta sempre que precisar, durante a caminhada irá precisar!_

<br>

  ## Outras Tags importantes HTML

  Como já descrevemos o posicionamento de elementos são uma questão relevante, agora vamos citar outras tags que usaremos muito.

  ### Tags de cabeçalho:

  Embora seja simples as tags variam de 1 a 6, da maior para menor, `<h1>` ... `<h6>`, essas tem pouca infuência, mas é importante para a estrutura textual de uma página. Importante lembrar que esses cabeçalhos já possuem uma estilização básica.

  Exemplo:

  - Versão escrita `html`:

    ```html
    <h1>Exemplo</h1>
    <h2>Exemplo</h2>
    <h3>Exemplo</h3>
    <h4>Exemplo</h4>
    <h5>Exemplo</h5>
    <h6>Exemplo</h6>
    ```

  - Versão interpretada do código:

    <h1>Exemplo</h1>
    <h2>Exemplo</h2>
    <h3>Exemplo</h3>
    <h4>Exemplo</h4>
    <h5>Exemplo</h5>
    <h6>Exemplo</h6>

<br>

  Outra tag são as para lista as `<ol>` - lista ordenada e `<ul>` - lista não ordenada, dentro delas ficam contidos os itens ordenados ou não, dependerá da lista, as tags dos elementos das listas são `<li>`

  Para paragráfos temos a tag `<p>`, temos ainda o `<span>` o qual também serve para um conteúdo textual, porém genérico.

  Temos outras tags como `<script>` para incluir um script executável, tags para forms como: `<label>`, `<select>`, `<input>`, `<textarea>`, `<button>` e diversas outras. Veremos elas mais para frente. Caso esteja muito curioso olhe esse site: [Desenvolvedores Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element).

<br>

## O Famigerado **CSS**

  O **`CSS`** como já citamos acima, é um mecanimo para adicionarmos estilo à um documento web.

  <style>
    .text {
      border-right: 2px solid rgb(255, 255, 255, 0.75);
      color: rgb(255, 255, 255, 0.75);
      font-family: 'Fira Sans', sans-serif;
      font-size: 1.5rem;
      margin: 0 auto;
      overflow: hidden;
      padding-right: 1rem;
      text-align: center;
      white-space: nowrap;
    }

    .writeAnimation {
      animation: cursorStyle 0.75s steps(40) infinite normal , writing 5s steps(40) 1s normal both;
    }

    @keyframes cursorStyle {

      from {
        border-right-color: rgb(255, 255, 255, 0.75);
      }

      to {
        border-right-color: transparent;
      }
    }

    @keyframes writing {

      from {
        width: 0;
      }

      to {
        width: 16em;
      }

    }
  </style>
  <p class="text writeAnimation">Esse é algo que você pode aprender!</p>