import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compileSCSS = (inputFile, outputFile, isMinified) => {
    // Determine the output style based on isMinified
    const styleOption = isMinified ? '--style compressed' : '--style expanded';
    
    exec(`sass ${styleOption} ${inputFile} ${outputFile}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error compiling ${inputFile}:`, stderr);
            return;
        }
    });
};

const main = () => {
    const staticDir = path.resolve(__dirname, '../../public/styles'); // Adjust path to point to the static directory

    // Compile LTR SCSS (Minified)
    compileSCSS(
        path.resolve(__dirname, '../../assets/sass/main-ltr.scss'),
        path.join(staticDir, 'main-ltr.css'),
        true // Set to true for minification
    );

    // Compile RTL SCSS (Minified)
    compileSCSS(
        path.resolve(__dirname, '../../assets/sass/main-rtl.scss'),
        path.join(staticDir, 'main-rtl.css'),
        false // Set to true for minification
    );
};

main();
