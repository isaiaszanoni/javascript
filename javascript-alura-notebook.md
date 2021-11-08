# Javascript Alura 

### Importância do Javascript

O Javascript é a linguagem nativa da Web. Nos ajuda a trazer dinamismo e agilidade às páginas, além de funcionalidades diversas, como envio e tratamento de dados em formulários, métodos para conectar-se com o banco de dados, etc.

### Node Js

É uma plataforma que permitiu trazer o Javascript para o backend dos sistemas, ajudando a popularizar ainda mais a linguagem.

### Aplicativos Desktop

Também podemos desenvolver para desktop utilizando javascript. O electron, por exemplo, é uma plataforma criada para disponibilizar o uso de javascript e outras linguagens de front-end para produzir aplicativos desktop. 

### Arduino

Podemos programar arduino com Javascript utilizando a biblioteca Johnny-Five.

### Banco de Dados

O MongoDB é um banco de dados baseado em Javascript.

---

## Hello World

- O código deve estar escrito ou referenciado na tag script.

### 

---

## Query Selector

Buscando a interatividade e o dinamismo entre o html e js, vamos falar sobre DOM.

### DOM - Modelo de Objeto de Documento

Trata-se de uma interface de programação para documentos HTML, XML e SVG. Seu papel é representar o documento de maneira estruturada tal como uma árvore, definindo métodos que permitem acesso à árvore, para alterar estrutura, estilo e conteúdo do documento.

Também temos o que são conhecidos como nós. 

> https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
>
> https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model

O Document representa a página para o browser, e o Javascript pode ler isso. 

Podemos passar, por exemplo:

```html
<script>
    console.log(document)
</script>
```

E vamos obter, como saída, o documento HTML da página. Este é o document em si. 

Podemos referenciar trechos do nosso document em que estamos interessados. Utilizando o query selector, passamos como parâmetro o o nome da tag a qual queremos utilizar. Por exemplo, temos um h1 em nosso site, e eu gostaria de imprimir no console o valor deste h1:

```js
document.querySelector("h1");
```

Como resultado obtivemos:

```
<h1>Aparecida Nutrição</h1>
```

### Pegando o valor de uma tag utilizando o querySelector + textContent

```javascript
var titulo = document.querySelector("h1").textContent
console.log(titulo)
```

E alcançamos a saída:

```
Aparecida Nutrição
```

---

## Boas Práticas

Não é uma boa prática referenciar tags, pois podemos ter muitos `<h1>` em nossa página, podemos alterar para um `<h2>` etc. É uma prática buscar por outras opções, como uma classe, id ou seletores CSS.

Vamos colocar uma classe em nosso h1 e referenciar esta classe em nosso Javascript

```html
<h1 class="titulo">
   Aparecida Nutrição
</h2>
...
<script>
	var titulo = document.querySelector(".titulo");
    titulo.textContent = "Site de Nutrição"
</script>
```

---

## Estilos com JavaScript

`classList` - Retorna todas as classes do objeto.
`classList = add()`

---

## Escutando Eventos

### Função anônima

No seguinte caso, a função anônima é chamada sem 

---

## Evitando o comportamento Padrão de um elemento

`event.preventDefault`

---

## Adicionando Pacientes na Tabela









# MyPokemons Ideias

- classList → implementar o classList ao invés de repetir os nomes de class/id;
- Implementar da melhor maneira o addEventListener, sem repetir codigo
- Adicionar uma div dentro da div mãe que conterá todos os cards utilizando o appendChild
- 
