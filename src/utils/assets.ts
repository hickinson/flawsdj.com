import { existsSync } from 'node:fs';
import { join } from 'node:path';

export function publicAssetExists(path: string | undefined) {
  if (!path?.startsWith('/')) return false;

  return existsSync(join(process.cwd(), 'public', path));
}
