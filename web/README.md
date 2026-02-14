
---

# Gerenciador de Leads em Nuvem

Este projeto consiste em uma aplicação fullstack desenvolvida para gerenciar o fluxo de entrada de contatos de forma escalável. O sistema utiliza uma interface construída em React para o front-end e uma arquitetura baseada em funções serveless no Google Cloud Platform para o processamento de dados.

## Visão Geral do Projeto

O objetivo principal foi criar uma solução que pudesse lidar com o ciclo completo de um lead (cadastro, leitura, edição e exclusão) sem a necessidade de gerenciar servidores físicos ou máquinas virtuais. A escolha pelo modelo serverless garante que o custo seja proporcional ao uso e que a aplicação esteja sempre disponível.

## Tecnologias e Ferramentas

### Front-end

O cliente foi desenvolvido em React.js, focando na componentização e na gestão de estados para oferecer uma experiência de uso fluida. A estilização utiliza a tipografia Montserrat para garantir legibilidade e uma paleta de cores sóbria para transmitir profissionalismo.

### Back-end

A lógica de negócios reside em funções Node.js hospedadas no Google Cloud Functions. Esta camada é responsável por receber as requisições do front-end, validar as informações e processar as operações de CRUD.

### Monitoramento e Infraestrutura

Toda a atividade da API é monitorada através do Cloud Logging no console do GCP, permitindo rastrear cada requisição, identificar gargalos ou erros de execução em tempo real através dos registros de logs.

## Funcionamento do Sistema

O fluxo de dados começa no formulário de captura, onde as informações são validadas antes de serem enviadas via Fetch API para o endpoint na nuvem. Ao receber os dados, a função no Google Cloud processa a solicitação e retorna uma confirmação que atualiza a interface do usuário instantaneamente.

O sistema permite:

* Registro de novos leads com validação de campos.
* Visualização de leads cadastrados em uma lista lateral.
* Edição de informações existentes para correção de dados.
* Remoção de registros através de chamadas ao método DELETE da API.

## Configuração e Execução

Para executar o ambiente de desenvolvimento:

1. Acesse o diretório do front-end através do terminal.
2. Instale as dependências necessárias utilizando o gerenciador de pacotes npm.
3. Inicie o servidor de desenvolvimento local.
4. O sistema estará disponível no navegador para interagir com a API hospedada no Google Cloud.

---

**Desenvolvido por Eduardo Vicentini Levy**
