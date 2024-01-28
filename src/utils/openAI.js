
import OpenAI from 'openai';
import { OPEN_AI_GPT_KEY } from '../components/constants';

const openAi = new OpenAI({
    apiKey: OPEN_AI_GPT_KEY, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true 
  });

export default openAi