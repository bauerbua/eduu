export interface User {
  id: number;
  username: string;
  role: 'admin' | 'teacher' | 'student';
}
