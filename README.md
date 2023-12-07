
# Daterra Quitanda Website

## Descrição
### Propósito do Projeto
O projeto Quitanda Virtual foi criado com o propósito de explorar e aplicar os conceitos do Bootstrap, seguindo a abordagem "mobile first". Este projeto front-end visa construir a interface de uma loja virtual, especificamente uma quitanda. A iniciativa visa resolver desafios relacionados ao alcance de público, universalidade e padronização estética do negócio ao trazê-lo para o ambiente digital.

### Principais Características
Implementação do conceito "mobile first", garantindo uma experiência de usuário otimizada em dispositivos móveis.
Versatilidade, sendo aplicável a diversos tipos de negócios, proporcionando flexibilidade e adaptabilidade.

### Tecnologias Utilizadas
- Bootstrap 5: Framework front-end para desenvolvimento ágil e responsivo.
- jQuery 3: Biblioteca JavaScript para simplificar manipulações no DOM.
- Webpack 5: Empacotador de módulos para otimização e organização do código.

### Utilidade do Projeto
O Quitanda Virtual é uma solução para a expansão de negócios no meio digital, superando desafios como alcance de público e padronização visual. A plataforma oferece mobilidade aos usuários, permitindo que, independentemente de sua localização, tenham acesso a alimentos orgânicos e de qualidade, eliminando as barreiras de tempo e distância para uma alimentação saudável.

### Estado Atual
O projeto está em constante evolução, com melhorias sendo implementadas regularmente para aprimorar a experiência do usuário. Contribuições e sugestões são bem-vindas.

### Dependências para Instalação
Para instalar o Quitanda Virtual, é necessário ter o Node.js configurado em seu ambiente de desenvolvimento.

## Índice
- [Instalação](#instalação)
- [Dependências](#dependências)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Créditos](#créditos)

## Instalação
### Requisitos Prévios
Antes de começar, certifique-se de ter o Node.js instalado em seu sistema. Caso não tenha, você pode baixá-lo e instalá-lo a partir do site oficial do [Node.js](https://nodejs.org/en).

### Passos de Instalação
- #### Clone o Repositório:    

```bash
       git clone https://github.com/welisten/DaTerra_Quitanda_Website
       cd DaTerra_Quitanda_Website 
```
- #### Instale as Dependências:
```bash
        npm install
```
Isso instalará todas as dependências necessárias, incluindo o Webpack, jQuery e Bootstrap 5.
- #### Execute o Ambiente de Desenvolvimento:
```bash
        npm start
```
Este comando iniciará o ambiente de desenvolvimento usando o Webpack Dev Server. Você poderá acessar o projeto em http://localhost:8080 (ou outra porta, dependendo da configuração).

###### Nota: Caso você tenha especificado uma porta diferente, substitua 8080 pela porta que você configurou.

- #### Gere a Build de Produção:
```bash
        npm run build
```
Este comando acionará o Webpack para criar uma versão otimizada do seu projeto na pasta dist/. Essa pasta contém os arquivos prontos para implantação em um ambiente de produção.

- #### Configuração da Porta do Servidor.

Se você precisar modificar a porta do servidor, você pode fazê-lo no arquivo de configuração do Webpack (webpack.config.js). Procure por uma seção semelhante à seguinte:
```bash
devServer: {
  port: 8080,                 // Substitua 8080 pela porta desejada
  // ... outras configurações do servidor
}
```
Altere o valor de port para a porta desejada. Após a alteração, salve o arquivo e reinicie o ambiente de desenvolvimento usando npm start. Certifique-se de atualizar a URL do projeto conforme necessário.

- #### Observações Adicionais

Certifique-se de ajustar as configurações do Webpack conforme necessário no seu arquivo de configuração (webpack.config.js).
Caso haja problemas durante a instalação ou execução, consulte a seção de Perguntas Frequentes ou verifique as Issues no repositório para soluções comuns.

## Dependências
O projeto "DaTerra - Quitanda (website)" utiliza diversas dependências para seu funcionamento e desenvolvimento. Aqui está a lista das dependências usadas, junto com as versões específicas:
```bash
{
  "dependencies": {
    "bootstrap": "5.3.2",
    "bootstrap-icons": "1.11.1",
    "jquery": "3.7.1",
    "popper": "1.0.1",
  },
  "devDependencies": {
    "copy-webpack-plugin": "11.0.0",
    "cross-env": "7.0.3",
    "css-loader": "6.8.1",
    "css-minimizer-webpack-plugin": "5.0.1",
    "file-loader": "6.2.0",
    "mini-css-extract-plugin": "2.7.6",
    "node-sass": "9.0.0",
    "postcss-loader": "7.3.3",
    "sass-loader": "13.3.2",
    "style-loader": "3.3.3",
    "terser-webpack-plugin": "5.3.9",
    "webpack": "5.89.0",
    "webpack-cli": "5.1.4",
    "webpack-dev-server": "4.15.1"
  }
}
```
### 1. Dependências Principais
##### 1. Bootstrap (v5.3.2)
Framework front-end que simplifica o desenvolvimento de componentes e estilos responsivos.

##### 2. Bootstrap Icons (v1.11.1)
Conjunto de ícones SVG que podem ser facilmente integrados ao projeto Bootstrap.

##### 3. jQuery (v3.7.1)
Biblioteca JavaScript que simplifica a manipulação do DOM e interações com o usuário.

##### 4. Popper (v1.0.1)
Biblioteca utilizada pelo Bootstrap para gerenciamento de popovers e tooltips.

### Dependências de Desenvolvimento
##### 1. Copy Webpack Plugin (v11.0.0)
Plugin para copiar arquivos e diretórios durante a construção do projeto.

##### 2. Cross-Env (v7.0.3)
Permite definir variáveis de ambiente de maneira consistente em diferentes sistemas operacionais.

##### 3. CSS Loader (v6.8.1)
Carrega arquivos CSS e adiciona-os ao DOM durante a execução do webpack.

##### 4. CSS Minimizer Webpack Plugin (v5.0.1)
Plugin para minimizar e otimizar arquivos CSS durante a construção do projeto.

##### 5. File Loader (v6.2.0)
Carrega arquivos como fontes e imagens e os move para o diretório de saída durante a construção.

##### 6. Mini CSS Extract Plugin (v2.7.6)
Extrai o CSS em arquivos separados durante a construção do projeto.

##### 7. Node Sass (v9.0.0)
Compilador Sass para Node.js.

##### 8. PostCSS Loader (v7.3.3)
Processador de CSS com plugins que podem transformar estilos de forma mais avançada.

##### 9. Sass Loader (v13.3.2)
Carrega arquivos Sass e os compila em CSS durante a execução do webpack.

##### 10. Style Loader (v3.3.3)
Adiciona estilos ao DOM durante a execução do webpack.

##### 11. Terser Webpack Plugin (v5.3.9)
Plugin que utiliza o Terser para minificar e otimizar os arquivos JavaScript durante a construção.

##### 12. Webpack (v5.89.0)
Empacotador de módulos para JavaScript e ativos.

##### 13. Webpack CLI (v5.1.4)
Interface de linha de comando do webpack.

##### 14. Webpack Dev Server (v4.15.1)
Servidor de desenvolvimento para servir o projeto durante o desenvolvimento.

Consulte a documentação oficial de cada uma para obter informações detalhadas sobre seu uso.

## Uso
Aqui estão as instruções sobre como usar o projeto "DaTerra - Quitanda (website)", que utiliza Webpack, jQuery e Bootstrap 5.

### 1. Executar o Ambiente de Desenvolvimento 

Para iniciar o ambiente de desenvolvimento e visualizar o projeto localmente, siga os seguintes passos:

```bash
# 1. Navegue até o diretório do projeto
        cd caminho/para/seu/projeto
```
```bash
# 2. Instale as dependências
    npm install
```
```bash
# 3. Execute o ambiente de desenvolvimento
    npm start
```
Isso iniciará o Webpack Dev Server e você poderá acessar o projeto no seu navegador em http://localhost:8080 (ou outra porta, se configurada de forma diferente).

### 2. Explore as Páginas
O projeto "DaTerra - Quitanda (website)" já possui páginas prontas, como por exmplo as paginas de:Login, Registro, Carrinho e dashboad do cliente ... Explore cada uma delas para entender a experiência do usuário:

### 3. Geração de Build de Produção
Quando estiver pronto para implantar o projeto em um ambiente de produção, gere uma build otimizada com o seguinte comando:

```bash
    npm run build
```
Isso criará uma versão otimizada do seu projeto na pasta dist/, pronta para ser implantada.

Lembre-se de personalizar e adaptar as instruções conforme necessário para refletir as características específicas do seu projeto e as páginas que foram desenvolvidas.
## Contribuição
Agradecemos seu interesse em contribuir para o projeto Quitanda Virtual! Sua ajuda é fundamental para tornar este projeto ainda melhor.

#### Como Contribuir ?
##### 1. Fork do Repositório:
Faça um fork do repositório para sua própria conta. Isso criará uma cópia do projeto em seu perfil.

##### 2. Clone o Repositório Fork:  
No seu terminal, execute os comandos:
```bash
git clone https://github.com/welisten/DaTerra_Quitanda_Website
cd DaTerra_Quitanda_Website
```
##### 3. Crie uma Branch de Desenvolvimento:
Crie uma nova branch para trabalhar em sua contribuição.

```bash
git checkout -b nome-da-sua-branch
```

##### 4. Implemente suas Alterações:
Faça as alterações necessárias no código e na documentação.

##### 5. Teste suas Alterações:
Certifique-se de que suas alterações não quebraram nada e que tudo está funcionando conforme esperado.

##### 6. Commit e Push:                                                     

```bash
git add .
git commit -m "Descrição concisa das alterações"
git push origin nome-da-sua-branch
```
#### 7. Abra um Pull Request:
Vá até a página do seu repositório no GitHub e abra um Pull Request (PR) para a branch principal do projeto.

#### Diretrizes para Contribuição
- Mantenha seus commits concisos e descritivos.
- Certifique-se de testar suas alterações antes de criar um PR.
- Documente adequadamente quaisquer alterações na documentação existente.
- Siga as diretrizes de codificação e estilo do projeto.

#### Issues e Melhorias
Se você encontrar problemas ou tiver ideias para melhorias, sinta-se à vontade para abrir uma issue. Contribuições nas issues também são bem-vindas!

#### Agradecimentos
Agradecço a todos os contribuidores que ajudaram a tornar este projeto possível. Em especial:
- O professor Leonardo da Cod3r, cujo o qual, atravez de seus cursos tenho evoluido cada dia mais
- O Desenvolvedor e Youtuber Ricardo Maroquio, pois pois foram seus conteúdos que serviram de inspiração para esse projeto


#### Contato
Se você tiver dúvidas ou precisar de ajuda durante o processo de contribuição, entre em contato através das Issues ou envie um e-mail para [wesleywelistenoficial@gmail.com].

## Créditos

Este projeto não seria possível sem a contribuição valiosa de diversas pessoas e recursos. Gostaríamos de expressar nossa sincera gratidão a todos os envolvidos. Aqui estão alguns dos créditos:

### Contribuidores

- [Victor Hugo Queiroga](https://github.com/victorHQ)
- [Ricardo Maroquio](https://github.com/maroquio)
- [Renata Caruzo](https://github.com/renataCaruso)
- ...

Agradeço a todas as pessoas que enviaram sugestões, relatórios de bugs e ajudaram a melhorar este projeto.

### Fontes Externas

- **Bootstrap:** Agradecemos à equipe do Bootstrap por fornecer um framework front-end poderoso e responsivo.
- **jQuery:** Reconhecemos a equipe do jQuery por sua contribuição significativa à manipulação do DOM em JavaScript.
- **Outras Bibliotecas ou Recursos:** Se você usou outras bibliotecas ou recursos específicos, liste-os aqui com os devidos créditos.

### Inspiração

Este projeto foi inspirado pelo projeto [QuitandaOnlineBS5](https://github.com/maroquio/QuitandaOnlineBS5) do professor Ricardo Maroquio e pelas aulas do curso [Desenvolvimento Web Moderno](https://github.com/cod3rcursos/web-moderno) da Cod3r, e suas respequitivas contribuição para a comunidade.

Agradecemos a todos os desenvolvedores, designers, e comunidades online que compartilham conhecimento e inspiração.

Se esqueci de mencionar alguém, por favor, me avise para que eu possa adicionar os créditos devidos.

---

**Agradecemos a todos que contribuíram para o sucesso deste projeto!**










