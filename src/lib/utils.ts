import { ClassValue, clsx } from 'clsx';
import {twMerge} from 'tailwind-merge';

/**
 * A utility function to merge Tailwind CSS classes cleanly.
 * 
 * @param inputs - Tailwind CSS Classes or conditions
 * @returns Merged class names
 */

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}