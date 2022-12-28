# rooms-subjects-videos

- Criar repositório no Github
- Clonar para o VS Code
- Abrir o terminal no VS Code com CTRL + J
- Instalar o package.json com o comando yarn ou npm init -y no terminal
- Instalar as bibliotecas de dependência de desenvolvimento yarn add -D typescript nodemon ts-node @types/express @types/node
- Instalar as bibliotecas de produção yarn add pg express typeorm dotenv reflect-metadata
- Configurar dentro do package.json logo abaixo do "license": "MIT" o "scripts": { "dev": "nodemon --exec ts-node ./src/index.ts" }
- Próximo passo é instalar o Typescript que pode ser instalado pleo npx tsc --init no terminal, neste caso será gerado um tsconfig com bastante configurações desabilitadas dentro do compilerOption. OBS - O ideal é instalar o tsc localmente para se ajustar a cada projeto e não globalmente, pois normalmente os projetos diferem uns dos outros.
- Com postgres já instalado no computador criar um database com nome de "api_rest_typescript"
- Após criar o método get dentro do index, testar com Insomnia ou Postgres o método, que deve retornar um json

