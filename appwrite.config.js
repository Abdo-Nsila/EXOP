import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '65d8b78ceed1339477af'

// export const DATABASE_ID = '...'
// export const COLLECTION_ID_MESSAGES = '...'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;