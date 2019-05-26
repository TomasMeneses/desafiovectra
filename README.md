<h1>Desafio vectra</h1>
<h3>Realizado por: Tomás Meneses</h3>

<h3>Tecnologias:</h3>

<ul>
    <li>Node.js</li>
    <li>Angular</li>
    <li>MySql</li>
    <li>ORM Sequelize</li>
</ul>

<h2>Instruções para execução do projeto</h2>

<h3>Acesse a pasta backend e execute o comando npm install no seu terminal</h3>
<h3>Acesse a pasta frontend e execute o comando npm install no seu terminal</h3>

<h2>Instruções Script MySql e conexão ao BD</h2>

<h3>Conexão ao BD</h3>
<ol>
    <li>Acesse a pasta backend</li>
    <li>Acesse a pasta models</li>
    <li>Leia e execute as instruções que estão comentadas no arquivo</li>
    <li>Execute os passos das outras instruções abaixo</li>
</ol>


<h4>Você tem duas opções para executar o script do MySql:</h4>

<h4><strong>Caso escolha executar via MySql Workbench: </strong></h4>

<ol>
    <li>Abra o arquivo SCRIPT VECTRA presente neste repositório com seu MySql Workbench</li>
    <li>Execute o script</li>
</ol>

<h4><strong>Caso escolha executar via Node com a ORM Sequelize: </strong></h4>

<ol>
    <li>Abra a pasta backend</li>
    <li>Abra a pasta models</li>
    <li>Abra o arquivo Pessoa.js com qualquer editor de texto</li>
    <li>Retire as duas barras // da linha 37 para descomentar a instrução Pessoa.sync({force:true}); </li>
    <li>Comente a linha 39 com // antes de module.exports = Pessoa;</li>
    <li>Acesse a pasta models com o Terminal ou CMD</li>
    <li>Execute o comando node Pessoa.js</li>
    <li>Recoloque as duas barras // da linha 37 para comentar a instrução Pessoa.sync({force:true}); </li>
    <li>Descomente a linha 39 retirando // antes de module.exports = Pessoa;</li>
</ol>

<h2>Para rodar o projeto</h2>

<ol>
    <li>Acesse a pasta frontend com seu terminal</li>
    <li>Execute o comando ng serve no seu terminal</li>
    <li>Acesse a pasta backend com seu terminal</li>
    <li>Execute o comando node app.js</li>
</ol>