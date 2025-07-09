# RID163210_Desafio5

Projeto Full Stack desenvolvido como parte do curso de Tecnologia da Escola DNC. O desafio consistiu em criar uma aplicação com backend em Node.js, com integração ao frontend em React + Vite e deploy em plataformas separadas.

## 📌 Descrição

Este projeto foi realizado como **Desafio 5** da Escola DNC e tem como objetivo integrar uma aplicação frontend com uma API backend. O frontend foi desenvolvido com **React** utilizando **Vite**, enquanto o backend foi construído com **Node.js** e **Express**. A comunicação entre as camadas é feita por meio de requisições HTTP.


## ⚙️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **Vite**: Ferramenta moderna para desenvolvimento frontend.
- **Node.js**: Plataforma para construção do backend.
- **Express**: Framework para gerenciamento das rotas da API.
- **Render**: Hospedagem do backend.
- **Vercel**: Deploy do frontend.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Cors e Body-Parser**: Suporte à comunicação entre frontend e backend.

## 🚀 Como Utilizar Localmente

### 🔹 Backend (Node.js):

1. Acesse a pasta:

   ```bash
   cd Desafio05-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

   A API estará rodando em `http://localhost:3000`.

---

### 🔹 Frontend (React + Vite):

1. Em outro terminal, acesse a pasta:

   ```bash
   cd Desafio05-Front
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com a URL da API:

   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

4. Inicie a aplicação:

   ```bash
   npm run dev
   ```

   O frontend estará disponível em `http://localhost:5173`.


## ✅ Funcionalidades

- Integração entre frontend e backend.
- Envio e recebimento de dados via API.
- Deploy completo das duas camadas.
- Consumo de variáveis de ambiente para facilitar mudanças de ambiente (dev/produção).

## ⚠️ Observações

- Certifique-se de rodar backend e frontend em terminais separados.
- A Vercel não precisa da pasta do backend para funcionar. Apenas o frontend deve ser deployado nela.
- A aplicação backend no Render pode demorar alguns segundos para "acordar" na primeira requisição.
