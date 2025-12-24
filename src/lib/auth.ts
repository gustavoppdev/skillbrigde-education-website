import { z } from "zod";

// Tipos base para o sistema de auth
export interface User {
  id: string;
  email: string;
  password?: string; // Em um app real, NUNCA salve senhas em plain text no localStorage
  fullName?: string;
}

// Chaves para o LocalStorage
const STORAGE_KEYS = {
  USERS: "sb_users",
  CURRENT_USER: "sb_current_user",
};

/**
 * Serviço de Autenticação Simples
 * Gerencia usuários e sessão utilizando LocalStorage.
 */
export const AuthService = {
  /**
   * Registra um novo usuário.
   * Verifica se o email já existe antes de salvar.
   */
  register: (data: { email: string; password: string; fullName?: string }) => {
    const users = AuthService.getUsers();

    // Verifica duplicidade
    if (users.find((u) => u.email === data.email)) {
      throw new Error("UserAlreadyExists");
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    };

    // Salva o novo usuário na lista
    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

    // Loga automaticamente após registro
    AuthService.setSession(newUser);
    return newUser;
  },

  /**
   * Realiza o login do usuário.
   * Verifica se as credenciais correspondem a um usuário cadastrado.
   */
  login: (data: { email: string; password: string }) => {
    const users = AuthService.getUsers();
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!user) {
      throw new Error("InvalidCredentials");
    }

    AuthService.setSession(user);
    return user;
  },

  /**
   * Encerra a sessão do usuário.
   */
  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  },

  /**
   * Recupera o usuário atualmente logado.
   */
  getCurrentUser: (): User | null => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return stored ? JSON.parse(stored) : null;
  },

  // --- Métodos Privados/Auxiliares ---

  /**
   * Recupera a lista de todos os usuários cadastrados.
   */
  getUsers: (): User[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEYS.USERS);
    return stored ? JSON.parse(stored) : [];
  },

  /**
   * Salva a sessão do usuário atual.
   * Remove a senha do objeto por segurança (mesmo sendo localStorage).
   */
  setSession: (user: User) => {
    // Cria uma cópia segura sem a senha
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...safeUser } = user;
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(safeUser));
  },
};
