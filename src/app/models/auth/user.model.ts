export interface UserProfile {
  id?: string;
  name: string;
  email: string;
  age?: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  age: number;
  password: string;
}
