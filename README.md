# 📄 Documento de Requisitos – API de Controle Financeiro

---

# 📌 1. Visão Geral do Projeto

A API de Controle Financeiro é um sistema backend desenvolvido para gerenciar receitas e despesas pessoais, permitindo ao usuário acompanhar seu saldo, organizar gastos por categorias e analisar movimentações financeiras ao longo do tempo.

O sistema será construído utilizando:

* Node.js
* Express.js
* Banco de dados SQLite (inicialmente)
* Autenticação com JWT
* Documentação com Swagger

O objetivo é criar uma API REST robusta, organizada e com regras de negócio bem definidas, simulando um sistema real utilizado por usuários.

---

# 🎯 2. Objetivo do Sistema

Permitir que usuários:

* Registrem suas receitas e despesas
* Organizem suas finanças por categorias
* Consultem movimentações por período
* Visualizem saldo total automaticamente

---

# 👤 3. Atores do Sistema

### Usuário

* Pode se cadastrar
* Pode autenticar no sistema
* Pode gerenciar suas finanças

---

# ⚙️ 4. Requisitos Funcionais

## 🔐 4.1 Autenticação

* RF01: O sistema deve permitir cadastro de usuário
* RF02: O sistema deve permitir login
* RF03: O sistema deve gerar token JWT para autenticação
* RF04: O sistema deve proteger rotas com autenticação

---

## 💰 4.2 Transações Financeiras

* RF05: O usuário deve poder cadastrar uma transação (receita ou despesa)

* RF06: Cada transação deve conter:

  * valor
  * tipo (receita/despesa)
  * categoria
  * descrição (opcional)
  * data

* RF07: O usuário deve poder editar uma transação

* RF08: O usuário deve poder excluir uma transação

* RF09: O usuário deve poder listar todas as transações

---

## 🏷️ 4.3 Categorias

* RF10: O usuário deve poder criar categorias
* RF11: O usuário deve poder listar categorias
* RF12: Cada categoria deve possuir um nome único por usuário

---

## 📊 4.4 Consultas e Filtros

* RF13: O usuário deve poder filtrar transações por período (data inicial e final)
* RF14: O usuário deve poder listar transações por mês
* RF15: O sistema deve permitir filtro por tipo (receita/despesa)
* RF16: O sistema deve permitir filtro por categoria

---

## 🧮 4.5 Cálculos Automáticos

* RF17: O sistema deve calcular automaticamente o saldo do usuário
* RF18: O sistema deve calcular total de receitas
* RF19: O sistema deve calcular total de despesas

---

# 🚫 5. Requisitos Não Funcionais

## ⚡ 5.1 Desempenho

* RNF01: A API deve responder requisições em tempo adequado (< 500ms em operações simples)

---

## 🔒 5.2 Segurança

* RNF02: As rotas devem ser protegidas com autenticação JWT
* RNF03: Senhas devem ser armazenadas criptografadas
* RNF04: O usuário só pode acessar seus próprios dados

---

## 🧱 5.3 Escalabilidade

* RNF05: O sistema deve permitir futura migração de SQLite para PostgreSQL

---

## 📄 5.4 Documentação

* RNF06: A API deve possuir documentação interativa com Swagger

---

## 🧼 5.5 Manutenibilidade

* RNF07: O código deve ser organizado em camadas (controllers, services, models)
* RNF08: O código deve seguir boas práticas de desenvolvimento

---

## 🌐 5.6 Padronização

* RNF09: A API deve seguir padrão REST
* RNF10: As respostas devem ser em JSON

---

# 🏗️ 6. Estrutura do Projeto (Visão Geral)

A aplicação será organizada em camadas:

* **Controllers** → recebem requisições
* **Services** → regras de negócio
* **Models** → estrutura de dados
* **Routes** → definição de endpoints
* **Middlewares** → autenticação e validações

---

# 🔄 7. Fluxo Básico do Sistema

1. Usuário se cadastra
2. Usuário faz login
3. Recebe token JWT
4. Acessa rotas protegidas
5. Cria receitas/despesas
6. Consulta relatórios e saldo

---

# 🧠 8. Regras de Negócio Importantes

* Uma despesa sempre diminui o saldo
* Uma receita sempre aumenta o saldo
* O saldo é calculado automaticamente (não armazenado diretamente)
* Cada usuário possui seus próprios dados isolados
* Não é permitido acessar dados de outro usuário

---

# 🚀 9. Possíveis Evoluções Futuras

* Dashboard com gráficos
* Integração com frontend (React)
* Exportação de relatórios (PDF/Excel)
* Notificações de gastos
* Controle de metas financeiras

---

# ✅ 10. Conclusão

Este projeto simula um sistema real de controle financeiro, sendo ideal para portfólio, pois demonstra:

* domínio de API REST
* autenticação segura
* regras de negócio consistentes
* organização de código
* manipulação de dados

---

👉 Próximo passo: definir **entidades (User, Transaction, Category)** e começar a modelagem do banco.
