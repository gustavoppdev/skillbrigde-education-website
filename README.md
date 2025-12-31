<div align="center">

# SkillBridge

### Modern Education Platform

_Uma plataforma educacional completa construída com as melhores práticas de desenvolvimento front-end_

#### [Link da demo](https://skillbrigde.vercel.app/)

---

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📐 Design

Este projeto foi desenvolvido a partir de um design profissional criado no Figma:

**[Praha](https://www.figma.com/@praha)** — [Link do Design](https://www.figma.com/community/file/1302328770970984511/online-course-e-learning-educational-website-ui-template-design-in-light-theme-free-editable)



## ✨ Sobre o Projeto

**SkillBridge** é uma plataforma educacional moderna com foco em:

- **Arquitetura**: Next.js 16 com App Router e React Server Components
- **Internacionalização**: `next-intl` com rotas dinâmicas (`/en`, `/pt`)
- **SEO**: Metadata e OpenGraph dinâmicos
- **Type Safety**: TypeScript + validação Zod
- **UI/UX**: Design system com Tailwind CSS 4, shadcn/ui e Radix UI

## 🛠️ Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui · React Hook Form · Zod · next-intl


## ✨ Destaques

- Internacionalização completa (i18n) com rotas dinâmicas e traduzidas a partir do idioma
- SEO otimizado com metadata dinâmica
- Autenticação demo (Context API)
- Validação robusta de formulários (Zod)
- Design system acessível (WCAG)
- Type safety completo


## 🏗️ Arquitetura

```
src/
├── app/[locale]/          # Rotas internacionalizadas
│   ├── layout.tsx         # Layout root + metadata
│   ├── globals.css        # Design tokens CSS
│   └── [rota]/
│       ├── page.tsx       # Página da rota
│       └── components/    # Componentes específicos desta página
├── components/            # Componentes reutilizáveis globais
│   ├── layout/            # Header, Footer, Navbar
│   ├── sections/          # Seções compartilhadas
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilitários
│   ├── createPageMetadata.ts  # SEO helper
│   └── utils.ts           # Funções auxiliares
├── context/               # React Context (Auth)
├── i18n/                  # Configuração next-intl
├── constants/             # Dados estáticos
└── types/                 # TypeScript definitions
```

## 🚀 Getting Started

### Pré-requisitos

- Node.js 20+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gustavoppdev/skillbrigde-education-website.git

# Entre no diretório
cd skillbrigde-education-website

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

---

## 👨‍💻 Autor

**Gustavo Henrique**

Desenvolvedor Front-end especializado em React, Next.js e arquiteturas modernas. Este projeto demonstra habilidades em:

- Arquitetura de aplicações escaláveis
- Performance e otimizações
- Design systems e componentização
- Type safety e qualidade de código
- SEO e acessibilidade
- Internacionalização

---

<div align="center">

**[⬆ Voltar ao topo](#skillbridge)**

Feito com ❤️ e TypeScript

</div>
