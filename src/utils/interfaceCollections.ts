export interface User {
  userId: number;
  username: string;
  email: string;
  address: string;
  token: string;
  state: number;
}

export interface AuthForm {
  username: string;
  password: string;
}

export interface State<D> {
  error: Error | null;
  data: D | null;
  stat: 'idle' | 'loading' | 'error' | 'success'
}
