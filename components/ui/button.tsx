import { Slot } from "@radix-ui/react-slot";
import {cva, VariantProps} from 'class-variance-authority'
import { cn } from "@/src/lib/utils";

/**
 * Define button styles using CVA (class-variance-authority)
 */

// const buttonVariants = cva(
//     'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50'
//     {
//         variants: {
//             variant: {

//             }

//         }
//     }
// );