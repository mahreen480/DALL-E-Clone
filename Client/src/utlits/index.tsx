import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';
 

export function getRandomPrompt(prompt: string): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

/**
 * Download an image using FileSaver.
 * @param _id - The unique identifier for the image.
 * @param photo - The image URL or Blob.
 */
export async function downloadImage(_id: string, photo: string): Promise<void> {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
