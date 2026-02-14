Aqui está o arquivo README.md consolidado, com uma escrita técnica, direta e sem o uso de emojis, conforme solicitado. O texto detalha a arquitetura, as tecnologias e o processo completo de inicialização do projeto.

Gerenciador de Leads em Nuvem
Este projeto consiste em uma aplicação fullstack desenvolvida para gerenciar o fluxo de entrada de contatos de forma escalável. O sistema utiliza uma interface construída em React para o front-end e uma arquitetura baseada em funções serverless no Google Cloud Platform para o processamento de dados.

Visão Geral do Projeto
O objetivo principal foi criar uma solução que pudesse lidar com o ciclo completo de um lead (cadastro, leitura, edição e exclusão) sem a necessidade de gerenciar servidores físicos ou máquinas virtuais. A escolha pelo modelo serverless garante que o custo seja proporcional ao uso e que a aplicação esteja sempre disponível.

Tecnologias e Ferramentas
Front-end
O cliente foi desenvolvido em React.js, focando na componentização e na gestão de estados para oferecer uma experiência de uso fluida. A estilização utiliza a tipografia Montserrat para garantir legibilidade e uma paleta de cores sóbria para transmitir profissionalismo.

Back-end
A lógica de negócios reside em funções Node.js v24 hospedadas no Google Cloud Functions. Esta camada é responsável por receber as requisições do front-end, validar as informações e processar as operações de CRUD.

Monitoramento e Infraestrutura
Toda a atividade da API é monitorada através do Cloud Logging no console do GCP, permitindo rastrear cada requisição, identificar gargalos ou erros de execução em tempo real através dos registros de logs.

Funcionamento do Sistema
O fluxo de dados começa no formulário de captura, onde as informações são validadas antes de serem enviadas via Fetch API para o endpoint na nuvem. Ao receber os dados, a função no Google Cloud processa a solicitação e retorna uma confirmação que atualiza a interface do usuário instantaneamente.

O sistema permite:

Registro de novos leads com validação de campos.

Visualização de leads cadastrados em uma lista lateral.

Edição de informações existentes para correção de dados.

Remoção de registros através de chamadas ao método DELETE da API.

Procedimentos de Inicialização
O projeto é dividido em duas camadas independentes que devem ser configuradas para o funcionamento pleno do ecossistema.

1. Configuração do Ambiente de Nuvem (Back-end)
A lógica de processamento deve estar operacional no Google Cloud:

Implantação: O código contido em index.js deve ser implantado no Google Cloud Functions.

Permissões: A função deve estar configurada para permitir acessos externos (CORS), aceitando os métodos POST, DELETE e OPTIONS.

Auditoria: O acompanhamento da saúde da aplicação deve ser feito pela aba de Logs do Cloud Functions no console do GCP.

2. Inicialização da Interface (Front-end)
Para rodar a aplicação React localmente e conectá-la à API, siga estas etapas no terminal:

Instalação de Dependências:
Navegue até a pasta web e instale os pacotes necessários:
npm install
Configuração de Endpoint:
Certifique-se de que a constante urlAPI no arquivo App.js aponta para o endereço gerado pelo Google Cloud após a implantação da função.

Execução do Servidor:
Inicie o processo do React para abrir a aplicação no navegador:
npm start
Ciclo de Validação
Com o projeto iniciado, o usuário pode preencher os campos, enviar os dados e verificar a resposta de sucesso da nuvem. A inclusão, edição ou remoção do lead refletirá tanto na interface quanto nos logs de auditoria do Google Cloud Platform.

Desenvolvido por Eduardo Vicentini Levy
