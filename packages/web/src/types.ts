import type { NextPage } from 'next';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  guardScopes?: string[];
};
