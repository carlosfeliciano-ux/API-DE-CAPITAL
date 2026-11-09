# API de Capitais dos Estados Brasileiros

Projeto didático em TypeScript, Node.js e Express. A API recebe a sigla de uma unidade federativa e responde com sua capital em JSON.

## Requisitos

- Node.js e npm instalados
- Dependências do projeto instaladas com `npm install`

## Iniciar a API

Para desenvolver, inicie o servidor com:

```bash
npm run dev
```

O servidor ficará disponível em `http://localhost:3000`. Para consultar São Paulo, acesse:

```text
http://localhost:3000/estados/SP
```

A resposta será:

```json
{"sigla":"SP","capital":"São Paulo"}
```

A sigla também pode ser minúscula, como `/estados/sp`. Uma UF inexistente, como `/estados/XX`, recebe status HTTP `404`.

## Como a API funciona

- `src/index.ts` contém a lista das 27 UFs e a rota `GET /estados/:sigla`.
- `capitais` mantém as siglas e capitais em memória.
- A rota converte a sigla para maiúsculas e procura a capital.
- `res.json()` envia a resposta em JSON; `res.status()` define o status HTTP.

## Comandos úteis

- `npm install`: instala as dependências listadas no projeto.
- `npm run dev`: inicia o servidor de desenvolvimento e observa alterações no código.
- `npm run build`: compila TypeScript para JavaScript na pasta `dist/`.
- `npm start`: inicia a versão compilada; execute `npm run build` antes.

`src/teste.ts` é um experimento anterior com outra rota. Para esta atividade, use `src/index.ts` e o endpoint `/estados/:sigla`.
