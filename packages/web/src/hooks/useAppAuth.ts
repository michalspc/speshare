import { AppClient } from '@app/api';
import { useAuth } from '@app/common/auth';

export const useAppAuth = () => useAuth<AppClient>();
