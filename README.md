
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
- [Instalação](#Instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Documentação](#documentação)
- [Licença](#licença)
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
\\
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










