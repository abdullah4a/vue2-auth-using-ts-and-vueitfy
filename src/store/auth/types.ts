import { PrismConfiguration } from '@/interfaces/configurations';
import { User } from '@/interfaces/user';

export interface AuthState {
  token: string | null;
  user: User | null;
  company: object | null;
  uploading: boolean;
  selectedUserBranches: number[];
  userAllowedBranches: Array<{ text: string; value: number }>;
  prismConfiguration: PrismConfiguration[];
}
