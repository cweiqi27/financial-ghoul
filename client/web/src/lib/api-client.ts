import { treaty } from '@elysiajs/eden'

import type { App } from '@fg/api'

export const api = treaty<App>('localhost:3000')
