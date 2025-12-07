# 🏥 VidaPlus SGHSS | Modern Health Management System

**VidaPlus SGHSS** é um protótipo moderno de um Sistema de Gestão Hospitalar e de Saúde (SGHSS). O projeto foca em uma interface de usuário limpa e responsiva, construída com **Tailwind CSS** para o frontend e **JavaScript puro** (Vanilla JS) para a lógica e simulação de dados (Mock DB).

O sistema simula três perfis de usuário: **Paciente**, **Médico** e **Administrador**, cada um com um dashboard e funcionalidades específicas.


## ✨ Tecnologias Utilizadas

* **HTML5:** Estrutura base do projeto.
* **Tailwind CSS:** Framework de CSS utilitário para estilização rápida e responsiva.
* **JavaScript (Vanilla JS):** Lógica do sistema, manipulação de estado, navegação e simulação de banco de dados (`db` mock object).
* **Lucide Icons:** Biblioteca de ícones simples e consistentes.
* **Google Fonts (Plus Jakarta Sans):** Tipografia moderna e legível.

## 🚀 Funcionalidades Principais

O protótipo implementa a navegação e a lógica básica para os três perfis de usuário.

### 👤 Perfil Paciente

* **Dashboard de Início:** Boas-vindas e acesso rápido a agendamento de consultas.
* **Busca de Especialistas:** Interface para buscar médicos por nome ou especialidade.
* **Agendamento Wizard:** Fluxo modal simulado de seleção de médico, data e horário para confirmar uma nova consulta.
* **Próximos Compromissos:** Visualização das consultas agendadas, com botão para iniciar a Telemedicina (simulado).

### 🩺 Perfil Médico

* **Agenda do Dia:** Visualização em linha do tempo (timeline) dos compromissos, destacando o horário atual (`AO VIVO`).
* **Acesso ao Prontuário:** Botão para abrir um modal detalhado do Prontuário Médico, incluindo dados biométricos, alertas clínicos e histórico de consultas.
* **Emissão de Receita Digital:** Fluxo para preencher uma prescrição e gerar uma pré-visualização em formato de PDF (simulado).
* **Telemedicina:** Interface de vídeo conferência simulada com controles de áudio/vídeo.

### ⚙️ Perfil Administrador

* **Dashboard Financeiro:** Cartões com dados de Receita Bruta, Despesas, Lucro Líquido e total de Usuários (dados mockados).
* **Gráfico de Pacientes:** Visualização em barras da distribuição de pacientes por mês (dados mockados).
* **Gestão de Usuários:** Tabela para visualizar, editar ou cadastrar novos usuários (Paciente, Médico, Admin) no Mock DB.

## 💻 Estrutura do Projeto

O projeto é composto por três arquivos principais:

* **`index.html`**: Contém toda a estrutura HTML do aplicativo, o **Mock DB** (objeto `db` em `<script>`), o **estado da aplicação** (`appState`), a lógica de controle (`handleLogin`, `MapsTo`, `render...`), e a importação do Tailwind CSS e Lucide Icons.
* **`style.css`**: (Quase vazio) Contém alguns estilos customizados/gerais, embora a maior parte do estilo seja tratada pelo Tailwind CSS diretamente no HTML.
* **`script.js`**: (Vazio, a lógica foi movida para `index.html` para simplificação do protótipo) O arquivo JavaScript em um ambiente real conteria a lógica de controle e manipulação do DOM.

### 🌐 Scripts e Bibliotecas

As seguintes dependências externas são carregadas via CDN no `index.html`:

* `https://cdn.tailwindcss.com`
* `https://unpkg.com/lucide@latest`
* Google Font: `Plus Jakarta Sans`

## 🛠️ Como Executar

Este projeto é um protótipo frontend e não requer um servidor backend.

1.  **Baixe ou Clone** o repositório.
2.  **Abra o arquivo `index.html`** em qualquer navegador web moderno.

### Credenciais de Teste

Para testar as diferentes visualizações, use as credenciais simuladas na tela de login e selecione o perfil desejado:

| Perfil | E-mail (Mock) | Senha (Mock) |
| :--- | :--- | :--- |
| **Paciente** | `usuario@vidaplus.com` | `123456` |
| **Médico** | `usuario@vidaplus.com` | `123456` |
| **Administrador** | `usuario@vidaplus.com` | `123456` |

**Nota:** A validação de login é apenas para campos vazios. Qualquer e-mail e senha preenchidos resultará em login bem-sucedido no perfil selecionado.

## 🤝 Contribuições

Este é um projeto de prototipagem/exemplo. Se você deseja contribuir com melhorias na UX/UI ou refatoração do Vanilla JS, sinta-se à vontade para abrir uma Issue ou Pull Request.