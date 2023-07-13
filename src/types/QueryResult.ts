import { Rocket } from "./Rocket";

export interface QueryResult {
  loading: boolean;
  error?: Error;
  data?: {
    rockets: Rocket[];
  }
}