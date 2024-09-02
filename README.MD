# Bluesky MOC

**Bluesky MOC** é um aplicativo React Native utilizando Expo, Tailwind CSS e NativeWind. Ele consome a API do Bluesky para exibir um feed de posts em um formato responsivo e estilizado.

## Instalação e Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/carlosdavid0/bluesky-moc.git
   cd bluesky-moc
   ```

2. **Instale as Dependências**

   Com `npm` ou `yarn`, instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicialize o Projeto**

   Para iniciar o servidor de desenvolvimento, execute:

   ```bash
   npm start
   # ou
   yarn start
   # ou
   npx expo start
   ```

   Isso abrirá o Expo DevTools, onde você pode escolher rodar o aplicativo no Android, iOS via Expo Go.

## Estrutura do Código

### `App.tsx`

O ponto de entrada do aplicativo. Configura o feed de posts e inclui uma lista com controle de atualização.

### `src/components/post/index.tsx`

Componente que renderiza um post individual. Utiliza as propriedades `postStatus`, `content` e `author` para exibir informações de um post.

### `src/components/post/types.ts`

Define os tipos TypeScript usados nos componentes de post.

### `global.css`

Arquivo de estilos globais que aplica as configurações básicas de CSS.

### `tailwind.config.js`

Configuração do Tailwind CSS para personalização e temas.

### `tsconfig.json`

Configurações do TypeScript para o projeto.

## Regras de Negócio

1. **Feed de Posts**

   - O feed é carregado ao iniciar o aplicativo e pode ser atualizado ao puxar para baixo.
   - O feed é consumido de uma API externa e exibido em uma lista.

2. **Componentes**

   - **Post**: Cada post inclui informações sobre status (likes, comentários, retweets), conteúdo (texto do post) e autor (nome, usuário, avatar).

3. **Estilo**
   - O aplicativo usa Tailwind CSS para estilização. As classes são aplicadas diretamente aos componentes usando NativeWind.

## Exemplos de Uso

### Renderização de um Post

```tsx
<Post
  postStatus={{
    likes: 10,
    comments: 5,
    retweets: 2,
    isLiked: false,
    time: "2024-09-01T12:00:00Z",
  }}
  content={{
    text: "Este é um exemplo de post.",
  }}
  author={{
    name: "João Silva",
    username: "@joaosilva",
    avatar: "https://exemplo.com/avatar.jpg",
  }}
/>
```

### Configuração do Tailwind CSS

Ajuste as configurações do Tailwind no arquivo `tailwind.config.js` para personalizar o tema e os estilos do seu aplicativo.

## Instruções Adicionais

- **Atualização de Dependências**: Para atualizar as dependências do projeto, execute `npm update` ou `yarn upgrade`.
- **Construção do App**: Para construir o aplicativo para produção, use `expo build` ou as ferramentas de construção do Expo.

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Abra um pull request com melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
