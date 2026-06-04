import { Client } from 'colyseus.js'

export const colyseusClient = new Client(import.meta.env.VITE_COLYSEUS_URL)
