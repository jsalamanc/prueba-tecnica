import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/*
 * Combines and merges Tailwind CSS classes using twMerge and clsx utility
 * twMerge is used to handle conflits between classes effectively.
 *
 * @param {...ClassValue} inputs - An array of clss values to be combined and
 * @returns {string} - The merged and combined class names as a string.
 */

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
