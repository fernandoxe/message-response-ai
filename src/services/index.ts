import { API_KEY } from '@/config';
import GenerativeLanguage from '@google-ai/generativelanguage';
import { GoogleAuth } from 'google-auth-library';

const { TextServiceClient } = GenerativeLanguage.v1beta2;

const MODEL_NAME = 'models/text-bison-001';

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export const getResponseText = async (prompt: string) => {
  const result = await client.generateText({
    model: MODEL_NAME,
    prompt: {
      text: prompt,
    },
  });
  const response = result?.[0].candidates?.[0].output;
  return response;
};
