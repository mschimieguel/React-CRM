import styles from "./Overview.module.css";

function Overview (){
    return <div >
        <h1 className={styles.descricao} > Review e Retrospectiva da Sprint - Grupo 9</h1>
        <p lassName={styles.descricao} >
        A concepção do projeto foi um processo que fluiu sem problemas dado que um dos integrantes do grupo possuía experiência prévia profissional com software de CRM.
O primeiro esforço desprendido foi na escolha da stack do sistema, onde inicialmente consideramos utilizar o FireBase como ferramenta principal para lidar com o BackEnd 
e Banco de Dados. No entanto, ao depararmos com algumas dúvidas diante de sua interface optamos por ater ao Flask e o SQLite, o qual foi uma decisão certeira sendo que o
 trabalho entre os integrantes do BackEnd fluiu sem mais dificuldades.
        </p>
        <br />
<p>
O React foi um desafio grande, pois foi uma ferramenta que o time de FrontEnd aprendeu durante o desenvolvimento do sistema.
O maior desafio foi a integração do sistema, onde surgiram alguns bugs no BackEnd e encontrar uma solução de comunicação na estrutura do React 
se mostrou algo menos trivial do que o esperado.

</p>
<br />
<p>
Dito isso, conseguimos nos ater as histórias propostas e a regra de negócio do projeto. Foi possível seguir o bord inicial 
desenvolvido no figma levando em consideração os princípios de UX e Ui.

</p>
<p>
A interação entre os integrantes do grupo foi excelente, tendo em vista as diversas reuniões realizadas ao longo do projeto,
 parte delas utilizando da metodologia de pairprogramming, o qual foi determinante para o sucesso da integração do sistema. Vale ressaltar 
 também que a distribuição e redistribuição constante de tarefas permitiu que todo o time trabalhasse em todo o projeto. </p>
    </div>
}

export default Overview;